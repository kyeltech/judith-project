//import liraries
import React, {useMemo} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {usePostRequest} from '../services/mutation/post';
import AppButton from './AppButton';
import AppCards from './AppCards';
import AppInput from './AppInput';
import AppText from './AppText';
import {PrimaryDarkColor, WhiteColor} from './Constants';
import {Styles} from './GlobalStyle';
import useToastAlert from './useToastAlert';
import {EMAIL_REGEX, NAME_REGEX} from './validation';

// create a component
const Socials = () => {
  const [title, setTitle] = React.useState('');
  const [email, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {showToast, renderToast} = useToastAlert();
  const defaultState = {
    title: '',
    email: '',
    password: '',
  };
  const CardItem = useMemo(
    () => [
      {
        value: '' || 'xxxx xxxx xxxx xxxx',
      },
      {
        CardHolderName: '' || 'Social Details',
      },
    ],
    [],
  );

  const defaultRules = {
    title: {
      value: NAME_REGEX,
      message: 'should be between 3-50 characters',
    },
    email: {
      value: EMAIL_REGEX,
      message: 'should be between 10-15 characters',
    },
    password: {},
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: defaultState,
    mode: 'all',
  });
  const {createPost: AddSocials, isLoading} = usePostRequest(
    '/social/create',
    async res => {
      console.log(res?.data);
      setTimeout(() => {
        // navigation.navigate('Login', {});
        showToast('Social Medial Details Added Successfully');
      });

      // console.log(res?.data?.message);
    },
    async err => {
      console.log(err);

      if (err?.errorResponse) {
        showToast(err?.errorResponse);
      }
    },
  );

  const onSubmit = data => {
    let payload = {
      ...data,
    };
    AddSocials(payload);
    console.log(payload);
  };
  return (
    <ScrollView showsVerticalScrollIndicator>
      <AppCards style={styles.walletButtonContent}>
        {CardItem.slice(0, 1).map((item, index) => (
          <View key={`_${index}`} style={styles.walletBalance}>
            <AppText
              style={[
                Styles.body3,
                styles.text,
                {botderWidth: 1, boorderColor: WhiteColor},
              ]}>
              {item.value}
            </AppText>
          </View>
        ))}
        {CardItem.slice(1, 2).map((item, index) => (
          <View key={`_${index}`} style={styles.walletBalance}>
            <AppText
              style={[
                Styles.body3,
                styles.text,
                {botderWidth: 1, boorderColor: WhiteColor},
              ]}>
              {item.CardHolderName}
            </AppText>
          </View>
        ))}
      </AppCards>

      <View style={styles.inputcontainer}>
        {[
          {label: 'title', key: 'title'},
          {label: 'email', key: 'email'},
          {label: 'password', key: 'password'},
        ].map(item => (
          <>
            <Controller
              key={item.key}
              control={control}
              // patterpn: defaultRules[item.key],
              rules={{
                required: {
                  value: true,
                  message: `${item.label} is required`,
                },
                pattern: defaultRules[item.key],
              }}
              render={({field: {onChange, onBlur, value}}) =>
                item.key.includes('password') ? (
                  <AppInput
                    label={item.label}
                    // style={styles.input}
                    onBlur={onBlur}
                    onChangeText={text_ => onChange(text_.replace(/\//g, ''))}
                    error={errors[item.key]?.message}
                    value={value}
                    keyboardType={
                      item.key.includes('password') ? 'phone-pad' : 'default'
                    }
                    autoCapitalize={'none'}
                    type={item.key.includes('pasword') ? 'password' : 'email'}
                  />
                ) : (
                  <AppInput
                    label={item.label}
                    // style={styles.input}
                    onBlur={onBlur}
                    onChangeText={text_ => onChange(text_.replace(/\//g, ''))}
                    error={errors[item.key]?.message}
                    value={value}
                    autoCapitalize={'none'}
                    type={'input'}
                  />
                )
              }
              name={item.key}
            />
          </>
        ))}
      </View>
      <AppButton
        loading={isLoading}
        disabled={isLoading}
        onClick={handleSubmit(onSubmit)}
        text="Save Card"
        style={styles.btnContainer}
      />

      {/* <View style={styles.inputcontainer}>
        <AppInput
          onChangeText={social => setTitle(social)}
          value={title}
          label={'Social Name'}
          type={'input'}
        />
        <View
          style={{
            flexDirection: 'row',
            flexGrow: 2,
          }}>
          <AppInput
            inputStyle={{maxWidth: '80%'}}
            onChangeText={user => setMail(user)}
            value={email}
            label="Email"
            type={'number'}
          />
          <AppInput
            inputStyle={{maxWidth: '75%'}}
            onChangeText={access => setPassword(access)}
            value={password}
            label={'Password'}
            autoCapitalize={'none'}
            type="name"
          />
        </View>

        <View>
          
        </View>
      </View> */}
      {renderToast()}
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  walletButtonContent: {
    height: 140,
    width: 'auto',
    backgroundColor: PrimaryDarkColor,
    padding: 30,
    justifyContent: 'center',
  },
  walletBalance: {
    paddingVertical: 15,
  },
  walletButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30.5,
  },
  text: {
    color: WhiteColor,
    fontSize: 16,
    fontWeight: '900',
  },
  inputcontainer: {
    paddingVertical: 24,
    paddingHorizontal: 30,
  },
});

//make this component available to the app
export default Socials;
