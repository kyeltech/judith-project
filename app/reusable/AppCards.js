//import liraries
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {WhiteColor} from './Constants';

// create a component
const AppCards = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: WhiteColor,
    borderRadius: 8,
    paddingTop: 18,
    paddingLeft: 18,
    paddingRight: 18,
  },
});

//make this component available to the app
export default AppCards;
