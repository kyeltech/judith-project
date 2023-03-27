//import liraries
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useMutation, useQueryClient} from 'react-query';
import api from '../api/api';

export const usePostRequest = (
  url,
  onSuccess,
  onError,
  invalidateQueryKey,
  additionalHeader = {},
  transformRequest,
) => {
  const [errorResp, setErrorResp] = useState();
  const [response, setResponse] = useState();

  const createRequest = async formData => {
    try {
      const {data} = await api.post(url, formData, {
        headers: additionalHeader,
        transformRequest,
      });
      setResponse(data);
      onSuccess?.(data);
    } catch (err) {
      let errorObj = {};
      // console.log('axios error',JSON.stringify(error));
      if (err.response?.data) {
        errorObj = {
          errorStatus: err.response.data.status,
          errorResponse:
            err.response.data.fields?.email ||
            err.response.data.fields?.password,
          errors: err.response.data.error,
        };
      } else {
        //TODO: Catch network error
        errorObj = {
          errorStatus: err.response.data.status,
          errorResponse: err.response.data.error,
          errors: {},
        };
      }
      onError?.(errorObj);
      setErrorResp(errorObj);
    }
  };

  const {
    mutateAsync: createPost,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useMutation(createRequest);

  return {
    createPost,
    isLoading,
    errorResp,
    response,
    isError,
    error,
    isSuccess,
  };
};
