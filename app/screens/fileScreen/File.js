import React, {useMemo, useEffect, useCallback, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PrimaryDarkColor, WhiteColor} from '../../reusable/Constants';
import {Styles} from '../../reusable/GlobalStyle';
import Header from '../../reusable/Header';
import AppTab from '../../reusable/AppTab';
import Socials from '../../reusable/Socials';
import Cards from '../../reusable/Cards';
import AppText from '../../reusable/AppText';
// create a component
const File = ({navigation}) => {
  const [tabIndex, setTabIndex] = useState(0);

  // const tabs = useMemo(
  //   () => [
  //     {
  //       component: tabProps => <Cards {...tabProps} />,
  //       key: 'NGN',
  //       title: 'Add Cards',
  //     },
  //     {
  //       component: tabProps => <Socials {...tabProps} />,
  //       key: 'card',
  //       title: 'Add Socials',
  //     },
  //   ],
  //   [],
  // );

  return (
    <SafeAreaProvider style={[Styles.SafeAreaContainer, styles.container]}>
      <Header hasGoBack centerTitle={'Add New Cards'} />

      <View>
        <AppText>Hello</AppText>
      </View>
      {/*       
      <AppTab
        items={tabs}
        index={tabIndex}
        onChange={setTabIndex}
        round
        roundTabItemStyle={styles.tabItemStyle}
      /> */}
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
