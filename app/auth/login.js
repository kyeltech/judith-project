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
import {AuthContext} from '../../router/AuthProvider';
import OnboardingScreen from '../../assets/Image/fingerprint.png';
// create a component
const Login = ({navigation, isTrue}) => {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isBiometric, setIsBiometric] = useState();

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
            <AppInput
              LeftIcon={() => (
                <Ionicons name="person" size={20} color={PrimaryColor} />
              )}
              onChangeText={useMail => setEmail(useMail)}
              label={'email'}
              labelValue={email}
              type="email"
            />
            <AppInput
              onChangeText={usePassword => setPassword(usePassword)}
              LeftIcon={() => (
                <Ionicons name="lock-closed" size={20} color={PrimaryColor} />
              )}
              label={'password'}
              labelValue={password}
              autoCapitalize={'none'}
              type={'password'}
            />

            <TouchableRipple
              style={styles.forgotPContainer}
              onPress={() => navigation.navigate('forgotpassword')}>
              <AppText>Forgot Password?</AppText>
            </TouchableRipple>
          </View>
          <>
            <View>
              <AppButton
                onClick={() => login(email, password)}
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
