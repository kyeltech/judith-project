//import liraries
import React, {useMemo, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppCards from '../reusable/AppCards';
import AppText from '../reusable/AppText';
import {Grey800Color, PrimaryColor} from '../reusable/Constants';
import AppSpacer from '../reusable/AppSpacer';
import {Styles} from '../reusable/GlobalStyle';
import Header from '../reusable/Header';
import {Base64} from 'js-base64';
import {TouchableRipple} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
// create a component
const AppList = ({route: {params: item}, navigation}) => {
  const [encPwd, setEncPwd] = useState();
  const [decPwd, setDevPwd] = useState();
  React.useEffect(() => {
    console.log('deta', item?.item);
  }, [item]);

  const securityCheck = () => {
    if (item?.item.socialPassword.includes('')) {
      <Ionicons name="arrow-back" />;
      // Base64.encode(item?.item.socialPassword);
    } else {
      Base64.decode(item?.item.socialPassword);
    }
  };

  const items = useMemo(() => {
    return item?.routeType === 'fetched'
      ? {
          Account_Title: item?.item.socialTitle,
          Account_Name: item?.item.socialEmail,
          Account_Access: Base64.encode(item?.item.socialPassword),
          Created: item?.item.createdAt,
          Account_id: item?.item.userId,
        }
      : item?.routeType === 'cards'
      ? {
          Account_Title: item?.item.cardHolder,
          Account_Number: item?.item.cardNumber,
          Account_cvv: item?.item.cardCvv,
          Account_expiry: item?.item.cardExpiry,
          Account_id: item?.item.cardId,
          Account_user_id: item?.item.userId,
          createdAt: item?.item.createdAt,
          updatedAt: item?.item.updatedAt,
        }
      : {
          Account_Title: 'Network Error',
          Account_Name: 'Network Error',
          Account_Access: 'Network Error',
          Account_CreatedAt: 'Network Error',
          Account_id: 'Network Error',
        };
  }, [
    item?.item.socialEmail,
    item?.item.createdAt,
    item?.item.socialPassword,
    item?.item.socialTitle,
    item?.item.userId,
    item?.routeType,
  ]);

  return (
    <SafeAreaView style={Styles.SafeAreaContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: 50,
          paddingTop: 30,
          paddingHorizontal: 20,
        }}>
        <Ionicons
          size={20}
          name="arrow-back"
          onPress={() => navigation.goBack()}
        />
        <AppText>{item?.item.socialTitle || 'Added Cards'}</AppText>
        {/* <Header
          backIcon
          backIconColor={PrimaryColor}
          hasGoBack
          centerTitle={item?.item.socialTitle || 'Added Cards'}
        /> */}
      </View>
      <AppCards style={styles.card}>
        {Object.entries(items).map(([title, value], index, arr) => (
          <View key={title} style={[Styles.row, styles.detailsItem]}>
            <AppText style={[Styles.subtitle2, styles.title]}>{title}</AppText>
            <AppSpacer />

            <TouchableRipple onPress={() => securityCheck}>
              <AppText style={[Styles.subtitle2, styles.description]}>
                {value}
              </AppText>
            </TouchableRipple>
          </View>
        ))}
      </AppCards>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 16,
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 32,
  },
  detailsItem: {
    paddingVertical: 13,
    paddingHorizontal: 16,
    paddingBottom: 22,
  },
  title: {
    color: Grey800Color,
    fontWeight: '500',
  },
});

//make this component available to the app
export default AppList;
