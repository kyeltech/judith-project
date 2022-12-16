//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppText from '../reusable/AppText';
import {PrimaryDarkColor, WhiteColor} from '../reusable/Constants';
import {Styles} from '../reusable/GlobalStyle';
import Header from '../reusable/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        <Text>No Card Added yet</Text>
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
