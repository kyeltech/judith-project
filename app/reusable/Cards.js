//import liraries
import React, {useMemo} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppButton from './AppButton';
import AppCards from './AppCards';
import AppInput from './AppInput';
import AppText from './AppText';
import {PrimaryDarkColor, WhiteColor} from './Constants';
import {Styles} from './GlobalStyle';
import {NAME_REGEX, PHONE_REGEX} from '../reusable/validation';
import {Controller, useForm} from 'react-hook-form';
import {usePostRequest} from '../services/mutation/post';
import useToastAlert from './useToastAlert';

// create a component
const Cards = ({navigation}) => {
  const {showToast, renderToast} = useToastAlert();
  const defaultState = {
    cardholdername: '',
    card: '',
    CCV: '',
    expirydate: '',
  };

  const CardItem = useMemo(
    () => [
      {
        value: '' || 'xxxx xxxx xxxx xxxx',
      },
      {
        dateOnCard: '' || 'MM/YY ',
      },
      {
        CardHolderName: '' || 'CARD HOLDER',
      },
    ],
    [],
  );
  const defaultRules = {
    cardholdername: {
      value: NAME_REGEX,
      message: 'should be between 3-50 characters',
    },
    card: {
      value: PHONE_REGEX,
      message: 'should be between 10-15 characters',
    },
    cvv: {
      value: /^(\d{3})$/,
      message: 'should be of 3 digits',
    },
    expirydate: {
      value: /^(\d{4})$/,
      message: 'should match MM/YY',
    },
  };

  const {createPost: AddCard, isLoading} = usePostRequest(
    '/card/create',
    async res => {
      console.log(res?.data);

      setTimeout(() => {
        // navigation.navigate('Login', {});
        showToast('Card Details Added Successfully');
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
    AddCard(payload);
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
              {item.dateOnCard}
            </AppText>
          </View>
        ))}
        {CardItem.slice(2, 3).map((item, index) => (
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

      <View>
        {[
          {label: 'card holder', key: 'cardholdername'},
          {label: 'CCV', key: 'CCV'},
          {label: 'expirydate', key: 'expirydate'},
          {label: 'card', key: 'card'},
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
              render={({field: {onChange, onBlur, value}}) =>
                item.key.includes('expirydate') ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      flexGrow: 2,
                    }}>
                    <AppInput
                      label={item.label}
                      // style={styles.input}
                      onBlur={onBlur}
                      onChangeText={text_ => onChange(text_.replace(/\//g, ''))}
                      error={errors[item.key]?.message}
                      value={value}
                      keyboardType={
                        item.key.includes('expirydate')
                          ? 'phone-pad'
                          : 'default'
                      }
                      autoCapitalize={'none'}
                      type={item.key.includes('expirydate') ? 'input' : 'email'}
                    />
                  </View>
                ) : (
                  <AppInput
                    label={item.label}
                    // style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    error={errors[item.key]?.message}
                    value={value}
                    autoCapitalize={'none'}
                    type={item.key.includes('password') ? 'password' : 'input'}
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
      {/* 
      <View style={styles.inputcontainer}>
        <AppInput
          onChangeText={card => setIsNumber(card)}
          value={number}
          label={'Card Number'}
          type={'input'}
        />
        <View
          style={{
            flexDirection: 'row',
            flexGrow: 2,
          }}>
          <AppInput
            inputStyle={{maxWidth: '80%'}}
            onChangeText={date => setIsExpiry(date)}
            value={expiry}
            label="Expiry date"
            type={'number'}
          />
          <AppInput
            inputStyle={{maxWidth: '75%'}}
            onChangeText={CCV => setIsCvv(cvv)}
            value={cvv}
            label={'cvv'}
            autoCapitalize={'none'}
            type="name"
          />
        </View>

        <AppInput
          onChangeText={name => setIsHolder(name)}
          label={'Card Holder'}
          value={holder}
          autoCapitalize={'none'}
          type="name"
        />

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
    height: 185,
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
export default Cards;
