//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Title = ({title}) => {
  return (
    <View style={styles.titleContainer}>
      <Text testID="title" style={styles.text}>
        {title}
      </Text>
    </View>
  );
};

//make this component available to the app

const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: 20,
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
  },
});
export default Title;
