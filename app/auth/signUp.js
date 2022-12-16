//import liraries
import React, {useContext, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppInput from '../reusable/AppInput';
import Header from '../reusable/Header';
import {EMAIL_REGEX, PHONE_REGEX} from '../reusable/validation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppButton from '../reusable/AppButton';
import AppText from '../reusable/AppText';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Styles} from '../reusable/GlobalStyle';
import {PrimaryColor} from '../reusable/Constants';
import {AuthContext} from '../../router/AuthProvider';
import {ActivityIndicator} from 'react-native-paper';
// create a component
const SignUp = ({navigation}) => {
  const {register} = useContext(AuthContext);
  const [displayName, setDisplayName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
              labelValue={displayName}
              onChangeText={username => setDisplayName(username)}
              label="fullname"
            />
            <AppInput
              onChangeText={useEmail => setEmail(useEmail)}
              labelValue={email}
              LeftIcon={() => (
                <Ionicons name="lock-closed" size={20} color={PrimaryColor} />
              )}
              label={'Email'}
              type="email"
            />
            <AppInput
              labelValue={password}
              onChangeText={userPassword => setPassword(userPassword)}
              LeftIcon={() => (
                <Ionicons name="lock-closed" size={20} color={PrimaryColor} />
              )}
              label="password"
              autoCapitalize={'none'}
              type="password"
            />
          </View>
          <>
            <View>
              <AppButton
                text="Submit"
                style={styles.btnContainer}
                onClick={() => register(displayName, email, password)}
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
