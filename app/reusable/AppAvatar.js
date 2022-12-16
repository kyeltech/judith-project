//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Icons} from '../../assets/Image/Icons';
import {WhiteColor} from './Constants';

// create a component
const AppAvatar = ({style, source, text = '', onPress}) => {
  return (
    <TouchableOpacity style={[styles.content, style]} onPress={onPress}>
      {source ? (
        <Image source={{uri: source}} style={styles.avatar} />
      ) : (
        <Icons.UserAvatar {...styles.avatar} />
      )}
    </TouchableOpacity>
  );
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
  content: {
    width: 50,
    height: 50,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  nameAvatar: {
    width: 60, // 40,
    height: 60, //40,
    borderRadius: 30, //20,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default AppAvatar;
