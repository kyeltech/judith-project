//import liraries
import React from 'react';
import {View} from 'react-native';
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
