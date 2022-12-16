//import liraries
import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../../router/AuthProvider';
import AppButton from '../../reusable/AppButton';
// create a component
const Profile = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <AppButton text={'logout'} onClick={() => logout()} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 70,
    borderRadius: 50,
  },
});

//make this component available to the app
export default Profile;
