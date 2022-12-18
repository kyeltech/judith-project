//import liraries
import React, {useContext, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppInput from '../reusable/AppInput';
import Header from '../reusable/Header';
import {EMAIL_REGEX, PHONE_REGEX} from '../reusable/validation';
import AppButton from '../reusable/AppButton';
import AppText from '../reusable/AppText';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Styles} from '../reusable/GlobalStyle';
import {usePostRequest} from '../services/mutation/post';
import useToastAlert from '../reusable/useToastAlert';
// create a component
const SignUp = ({navigation}) => {
  const [requestPayload, setRequestPayload] = React.useState({});
  const [user, setUser] = React.useState({});
  const {showToast, renderToast} = useToastAlert();
  const defaultState = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: '',
    question: 'yes',
  };
  const defaultRules = {
    email: {
      value: EMAIL_REGEX,
      message: 'Enter valid email address',
    },
    phone: {
      value: PHONE_REGEX,
      message: 'Enter valid phone number',
    },
    countryCode: {},
    password: {},
  };

  const {createPost: signUpUser, isLoading} = usePostRequest(
    '/auth/signup',
    async res => {
      setTimeout(() => {
        navigation.navigate('Login', {
          user,
          data: requestPayload,
        });
        showToast(res?.data?.message);
      });

      // console.log(res?.data?.message);
    },
    async err => {
      // console.log(err);

      if (err?.errorResponse) {
        showToast(err?.errorResponse);
      }
    },
  );

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: defaultState,
    mode: 'all',
  });

  const onSubmit = data => {
    let payload = {
      ...data,
    };
    signUpUser(payload);
    setRequestPayload(payload);
    setUser(data);
    // };
  };
  return (
    <SafeAreaView style={Styles.SafeAreaContainer}>
      <>
        <Header hasImage />
        <KeyboardAwareScrollView
          alwaysBounceVertical={false}
          alwaysBounceHorizontal={false}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}
          nestedScrollEnabled={true}
          contentContainerStyle={[styles.inputcontainerScroll]}>
          <View style={styles.inputcontainer}>
            <View>
              {[
                {label: 'first name', key: 'firstname'},
                {label: 'last name', key: 'lastname'},
                {label: 'Email', key: 'email'},
                {label: 'Password', key: 'password'},
              ].map(item => (
                <>
                  <Controller
                    key={item.key}
                    control={control}
                    // pattern: defaultRules[item.key],
                    rules={{
                      required: {
                        value: true,
                        message: `${item.label} is required`,
                      },
                      pattern: defaultRules[item.key],
                    }}
                    render={({field: {onChange, onBlur, value}}) => (
                      <AppInput
                        label={item.label}
                        // style={styles.input}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        error={errors[item.key]?.message}
                        value={value}
                        autoCapitalize={'none'}
                        type={
                          item.key.includes('password') ? 'password' : 'input'
                        }
                      />
                    )}
                    name={item.key}
                  />
                </>
              ))}
            </View>
          </View>
          <>
            <View>
              <AppButton
                text="Submit"
                loading={isLoading}
                disabled={isLoading}
                style={styles.btnContainer}
                onClick={handleSubmit(onSubmit)}
              />
            </View>
            <View style={styles.RouteSignUpContainer}>
              <AppText>Already have an Account?</AppText>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Login')}
                style={styles.RouteSignUp}>
                <AppText color={'primary'} style={styles.fontS}>
                  Sign In
                </AppText>
              </TouchableWithoutFeedback>
            </View>
          </>
        </KeyboardAwareScrollView>
      </>
      {renderToast()}
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  inputcontainer: {
    flex: 7,
    paddingVertical: 24,
    paddingHorizontal: 30,
  },
  inputcontainerScroll: {
    justifyContent: 'space-between',
  },
  btnContainer: {
    marginHorizontal: 70,
    borderRadius: 50,
  },
  RouteSignUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  forgotPContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  fontS: {
    paddingHorizontal: 5,
    fontWeight: '900',
  },
});

//make this component available to the app
export default SignUp;
