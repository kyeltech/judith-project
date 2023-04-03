import React, {useMemo, useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppButton from '../reusable/AppButton';
import AppCards from '../reusable/AppCards';
import AppInput from '../reusable/AppInput';
import AppText from '../reusable/AppText';
import {PrimaryDarkColor, WhiteColor} from '../reusable/Constants';
import {Styles} from '../reusable/GlobalStyle';
import Header from '../reusable/Header';
import AppTab from '../reusable/AppTab';
import Socials from '../reusable/Socials';
import Cards from '../reusable/Cards';

// create a component
const AddCard = ({navigation}) => {
  const [tabIndex, setTabIndex] = useState(0);

  // const cardRef = firebase.firestore().collection('cardDetails');
  // const cardRef2 = collection(firebase, 'cardDetails');

  // useEffect(() => {
  //   getUser();
  // }, [getUser]);

  const tabs = useMemo(
    () => [
      {
        component: tabProps => <Cards {...tabProps} />,
        key: 'cards',
        title: 'Add Todoist',
      },
      {
        component: tabProps => <Socials {...tabProps} />,
        key: 'social',
        title: 'See Followers',
      },
    ],
    [],
  );
  return (
    <SafeAreaProvider style={[Styles.SafeAreaContainer, styles.container]}>
      {/* <Header hasGoBack centerTitle={'Add New Cards'} /> */}
      <AppTab
        items={tabs}
        index={tabIndex}
        onChange={setTabIndex}
        round
        roundTabItemStyle={styles.tabItemStyle}
      />
    </SafeAreaProvider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
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
export default AddCard;
