//import liraries
import React, {Component} from 'react';
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
// create a component
const Verify = ({navigation}) => {
  const defaultState = {
    email: '',
    password: '',
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

  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm({
    defaultValues: defaultState,
    mode: 'all',
  });
  return (
    <SafeAreaView style={Styles.SafeAreaContainer}>
      <>
        <Header />
        <KeyboardAwareScrollView
          alwaysBounceVertical={false}
          alwaysBounceHorizontal={false}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}
          nestedScrollEnabled={true}
          contentContainerStyle={[styles.inputcontainerScroll]}>
          <View style={styles.inputcontainer}>
            {[{label: 'Password', key: 'password'}].map(item => (
              <>
                <Controller
                  key={item.key}
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: `${item.label} is required`,
                    },
                    pattern: defaultRules[item.key],
                  }}
                  render={({field: {onChange, onBlur, value}}) => {
                    return item.key.includes('email') ? (
                      <AppInput
                        LeftIcon={() => (
                          <Ionicons
                            name="person"
                            size={20}
                            color={PrimaryColor}
                          />
                        )}
                        onBlur={onBlur}
                        onChangeText={text_ => onChange(text_)}
                        value={value}
                        key={item.key}
                        label={item.label}
                        type="email"
                      />
                    ) : (
                      <AppInput
                        onChangeText={text_ => onChange(text_)}
                        LeftIcon={() => (
                          <Ionicons
                            name="lock-closed"
                            size={20}
                            color={PrimaryColor}
                          />
                        )}
                        label={item.label}
                        error={errors[item.key]?.message}
                        value={value}
                        autoCapitalize={'none'}
                        type={
                          item.key.includes('password') ? 'password' : 'input'
                        }
                      />
                    );
                  }}
                  name={item.key}
                />
              </>
            ))}
          </View>
          <>
            <View>
              <AppButton text="Submit" style={styles.btnContainer} />
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
export default Verify;
