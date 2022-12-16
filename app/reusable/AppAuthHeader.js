//import liraries
import React, {useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icons} from '../../assets/Image/Icons';
import AppAvatar from './AppAvatar';
import AppText from './AppText';
import {Grey800Color, Grey900Color, PrimaryDarkColor} from './Constants';
import {Styles} from './GlobalStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

// create a component
const AppAuthHeader = ({firstName, lastName, source, navigation}) => {
  const initials = firstName && lastName ? `${'Ezekiel'} ${'Damien'}` : '';
  const gotoPersonalDetails = useCallback(() => {
    navigation.navigate('PersonalDetails');
  }, [navigation]);
  return (
    <View style={Styles.AppContainer}>
      <View style={[Styles.relative, Styles.alignCenter, Styles.justifyCenter]}>
        {/* <AppAvatar
          source={source}
          text={initials}
          onPress={gotoPersonalDetails}
        /> */}
      </View>

      <View style={styles.AuthContainer}>
        <AppText
          color="darkgrey"
          weight="med"
          size="sm"
          style={Styles.transformFirstName}>
          Hi Judith,
        </AppText>
        <Ionicons name="lock-closed" color={PrimaryDarkColor} size={30} />
      </View>
      {false && (
        <View style={{flex: 1}}>
          <Ionicons name="search-outline" size={25} style={styles.icons} />
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  icons: {
    color: Grey900Color,
    textAlign: 'center',
  },
  AuthContainer: {
    flex: 6,
    marginLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});

//make this component available to the app
export default AppAuthHeader;
