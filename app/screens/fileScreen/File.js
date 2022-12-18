import React, {useMemo} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View, StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppButton from '../../reusable/AppButton';
import AppCards from '../../reusable/AppCards';
import AppInput from '../../reusable/AppInput';
import AppText from '../../reusable/AppText';
import {PrimaryDarkColor, WhiteColor} from '../../reusable/Constants';
import {Styles} from '../../reusable/GlobalStyle';
import Header from '../../reusable/Header';

// create a component
const File = ({navigation}) => {
  const [cvv, setIsCvv] = React.useState('');
  const [holder, setIsHolder] = React.useState('');
  const [expiry, setIsExpiry] = React.useState('');
  const [number, setIsNumber] = React.useState('');
  // const cardRef = firebase.firestore().collection('newData');

  // const CreateCard = useCallback(() => {
  //   // if (
  //   //   (cvv && cvv.length > 0) ||
  //   //   (holder && holder.length > 0(expiry && expiry.length > 0)) ||
  //   //   (number && number.length > 0)
  //   // ) {
  //   const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  //   const data = {
  //     name: holder,
  //     cvv: cvv,
  //     date: expiry,
  //     card: number,
  //     createdAt: timestamp,
  //   };

  //   const cardRef2 = collection(firebase, 'cardDetails');
  //   const result = addDoc(cardRef2, data);
  //   if (result) {
  //     console.log('Successful');
  //   } else {
  //     console.log('Error adding data');
  //   }
  //   // const citiesCol = collection(firebase, 'cardDetails');
  //   // const citySnapshot = await getDoc(citiesCol);
  //   // const cityList = citySnapshot.docs.map(doc => doc.data());
  //   // console.log(cityList);
  //   // cardRef
  //   //   .add(data)
  //   //   .then(res => {
  //   //     console.log('success', res);
  //   //     setIsHolder();
  //   //   })
  //   //   .catch(err => {
  //   //     console.log('error', err);
  //   //   });
  // }, [cvv, expiry, holder, number]);
  // const CreateCard = () => {
  //   if (
  //     (cvv && cvv.length > 0) ||
  //     (holder && holder.length > 0) ||
  //     (expiry && expiry.length > 0) ||
  //     (number && number.length > 0)
  //   ) {
  //     // const timestamp = firebase.firestore.FieldValue.serverTimestamp();
  //     // const data = {
  //     //   name: holder,
  //     //   cvv: cvv,
  //     //   date: expiry,
  //     //   card: number,
  //     //   createdAt: timestamp,
  //     // };
  //     // cardRef.add(data);
  //   }
  //   console.log(firebase);
  //   addDoc(collection('cardDetails', firebase, 'LA'), {
  //     name: holder,
  //     Cvv: cvv,
  //     date: expiry,
  //     card: number,
  //   })
  //     .then(res => {
  //       console.log('success', res);
  //     })
  //     .catch(err => {
  //       console.log('error', err);
  //     });
  // };
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
  return (
    <SafeAreaProvider style={[Styles.SafeAreaContainer, styles.container]}>
      <Header hasGoBack centerTitle={'Add New Cards'} />
      <View>
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
              onChangeText={Cvv => setIsCvv(Cvv)}
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
            <AppButton
              onClick={() => ''}
              text="Save Card"
              style={styles.btnContainer}
            />
          </View>
        </View>
      </View>
    </SafeAreaProvider>
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
export default File;
