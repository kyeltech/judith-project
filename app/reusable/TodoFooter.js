//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppText from './AppText';

// create a component
const TodoFooter = ({numberOfIncompletedTasks}) => {
  return (
    <View>
      <AppText testID="para">
        {numberOfIncompletedTasks}
        {numberOfIncompletedTasks === 1 ? ' task left' : ' tasks left'}
      </AppText>
    </View>
  );
};

//make this component available to the app
export default TodoFooter;
