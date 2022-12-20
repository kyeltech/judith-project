//import liraries
import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {PrimaryDarkColor, WhiteColor} from '../../reusable/Constants';
import FetchedSocials from './FetchedSocials';
import AppText from '../../reusable/AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useGetSocials} from '../../services/queries/useFetch';
import {Styles} from '../../reusable/GlobalStyle';
import AppSpacer from '../../reusable/AppSpacer';
import Header from '../../reusable/Header';
// create a component
const Password = ({navigation}) => {
  return (
    <>
      <View style={styles.containerIcon}>
        <Header
          hasGoBack
          centerTitle="Add New Socials"
          contentStyle={{color: WhiteColor}}
          backIconColor={WhiteColor}
        />

        <TouchableOpacity
          style={styles.content}
          onPress={() => navigation.navigate('PortfolioStack')}>
          <Ionicons name="add-outline" size={20} color={WhiteColor} />
          <AppText color="white">Add New Socials</AppText>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <FetchedSocials />
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
export default Password;
