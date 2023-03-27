import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthToken} from './constants';

export const setAuthToken = token => {
  if (token === null) {
    return AsyncStorage.removeItem(AuthToken);
  }

  return AsyncStorage.setItem(AuthToken, token);
};

export const getAuthToken = () => AsyncStorage.getItem(AuthToken);
