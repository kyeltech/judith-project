//import liraries
import React, {useContext, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppInput from '../reusable/AppInput';
import Header from '../reusable/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppButton from '../reusable/AppButton';
import AppText from '../reusable/AppText';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Styles} from '../reusable/GlobalStyle';
import {PrimaryColor} from '../reusable/Constants';
import {TouchableRipple} from 'react-native-paper';
import OnboardingScreen from '../../assets/Image/fingerprint.png';
import {usePostRequest} from '../services/mutation/post';
import useToastAlert from '../reusable/useToastAlert';
import {EMAIL_REGEX, PHONE_REGEX} from '../reusable/validation';
import {setAuthToken} from '../utils/token';
import * as Keychain from 'react-native-keychain';
import {setLoginEmail} from '../utils/loginType';
// create a component
const Login = ({navigation, isTrue, route}) => {
  const [isBiometric, setIsBiometric] = useState();
  const {showToast, renderToast} = useToastAlert();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = route?.params;

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

  React.useEffect(() => {
    console.log(user);
  }, [user]);

  const defaultState = {
    email: '',
    password: '',
  };

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    // isLoading,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {createPost: signinWithEmail, isLoading} = usePostRequest(
    '/auth/login',
    async res => {
      const username =
        (res?.data.user.firstname && res?.data.user.lastname) || 'User';
      const token = res?.data.token;
      await setAuthToken(token);
      await setLoginEmail(username);
      await Keychain.setGenericPassword(username, token).catch(() => {});
      setIsLoggedIn(true);
      setTimeout(() => {
        navigation.navigate('dashboardTab', {
          user: res?.data.user,
        });
        showToast(' user login to account successfully and user notified.');
      }, 1000);
      // navigation.navigate('dashboardTab', {
      //   data: res?.data.user,
      // });

      // showToast(' user login to account successfully and user notified.');
      console.log(res?.data.token);

      // console.log(res?.data.user.firstname);
      // console.log(res?.data.user.lastname);
    },
    async err => {
      console.log(err?.status);
      if (err?.errorResponse) {
        showToast(err?.errorResponse);
      }
    },
  );

  const onSubmit = async data => {
    await signinWithEmail(data);
    console.log(data);
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
                loading={isLoading}
                disabled={isLoading}
                onClick={handleSubmit(onSubmit)}
                text="Submit"
                style={styles.btnContainer}
              />
            </View>
            <View style={styles.RouteSignUpContainer}>
              <AppText>New here?</AppText>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('SignUp')}
                style={styles.RouteSignUp}>
                <AppText color={'primary'} style={styles.fontS}>
                  Sign Up
                </AppText>
              </TouchableWithoutFeedback>
            </View>

            <View style={{alignItems: 'center', marginTop: 40}}>
              <TouchableOpacity>
                <Image source={OnboardingScreen} {...Styles.helpIcon} />
              </TouchableOpacity>
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
export default Login;
