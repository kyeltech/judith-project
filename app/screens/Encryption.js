//import liraries
import React, {Component} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppInput from '../reusable/AppInput';
import AppText from '../reusable/AppText';
import {
  PrimaryColor,
  PrimaryDarkColor,
  WhiteColor,
} from '../reusable/Constants';
import {Styles} from '../reusable/GlobalStyle';
import Header from '../reusable/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppButton from '../reusable/AppButton';
// create a component
const Encryption = ({navigation}) => {
  const [value, setIsValue] = React.useState();
  const defaultState = {
    encrypt: '',
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
  const onSubmit = () => {
    navigation.navigate('dashboardTab');
    const details = setIsValue();
  };
  return (
    <SafeAreaView style={[Styles.SafeAreaContainer, styles.container]}>
      <Header
        hasGoBack
        headerStyle={styles.headerBg}
        backIconColor={WhiteColor}
      />

      <>
        <View style={styles.encrpytContainer}>
          <AppText
            style={{
              textAlign: 'center',
              paddingVertical: 20,
              fontWeight: '600',
            }}>
            Publick Key loaded
          </AppText>

          {[{label: 'Encryption message ', key: 'encrypt'}].map(item => (
            <>
              <Controller
                key={item.key}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: `${item.label} is required`,
                  },
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
                      label={item.label}
                      error={errors[item.key]?.message}
                      value={value}
                      autoCapitalize={'none'}
                      type={'text'}
                    />
                  );
                }}
                name={item.key}
              />
            </>
          ))}
          <View>
            <AppButton
              onClick={handleSubmit(onSubmit)}
              text="Encrypt"
              style={styles.btnContainer}
            />
          </View>

          <View style={styles.messageContainer}>
            <AppText
              style={{
                textAlign: 'center',
                paddingVertical: 20,
                fontWeight: '600',
              }}>
              Encrypted Message:
            </AppText>

            <View>
              <AppText>{value?.details || ''}</AppText>
            </View>
          </View>
          <View>
            <AppButton
              text="Copy Encrytped Message"
              style={styles.btnContainer}
            />
          </View>
        </View>
      </>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBg: {
    backgroundColor: PrimaryDarkColor,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  encrpytContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  messageContainer: {
    justifyContent: 'center',
  },
});

//make this component available to the app
export default Encryption;
