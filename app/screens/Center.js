//import liraries
import React, {useCallback} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import AppText from '../reusable/AppText';
import {PrimaryDarkColor, WhiteColor} from '../reusable/Constants';
import Header from '../reusable/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FetchedCards from './FetchedCards';
// create a component
const Center = ({navigation}) => {
  return (
    <>
      <View style={styles.containerIcon}>
        <Header
          hasGoBack
          centerTitle="My Cards"
          contentStyle={{color: WhiteColor}}
          backIconColor={WhiteColor}
        />

        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('PortfolioStack')}>
          <Ionicons name="add-outline" size={20} color={WhiteColor} />
          <AppText color="white">Add New Card</AppText>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <FetchedCards />
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  areaContainer: {
    padding: 20,
  },
  containerIcon: {
    backgroundColor: PrimaryDarkColor,
    padding: 10,
  },
  content: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Center;
