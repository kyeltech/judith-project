//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppButton from '../AppButton';

// create a component
const Bottom = () => {
  const [status, setIsStatus] = useState('');
  return (
    <View style={styles.container}>
      <Text TestID="my-test">{status}</Text>

      <AppButton
        TestID="my-button"
        text={'logout'}
        onClick={() => setIsStatus('logout()')}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Bottom;
