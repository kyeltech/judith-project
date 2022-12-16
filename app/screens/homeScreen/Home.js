//import liraries
import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppAuthHeader from '../../reusable/AppAuthHeader';
import AppCards from '../../reusable/AppCards';
import AppText from '../../reusable/AppText';
import {
  BlackColor,
  Grey900Color,
  PrimaryDarkColor,
} from '../../reusable/Constants';
import {Styles} from '../../reusable/GlobalStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
// create a component
const Home = () => {
  const EncryptedItem = useMemo(
    () => [
      {
        value: 0,
        title: 'Files',
      },
      {
        value: 0,
        title: 'Passwords',
      },
      {
        value: 0,
        title: 'Cards',
      },
    ],
    [],
  );
  return (
    <SafeAreaView style={Styles.SafeAreaContainer}>
      <AppAuthHeader />

      <AppCards style={styles.overContainer}>
        <Ionicons name="lock-closed" size={45} style={styles.icons} />
        <AppText style={styles.CardTitle}>No Security Threats</AppText>
        <View style={styles.cardContent}>
          {EncryptedItem.map((item, index) => (
            <View style={styles.innerContent} key={index}>
              <AppText style={styles.text}>{item.title}</AppText>

              <AppText style={styles.count}>{item.value}</AppText>
            </View>
          ))}
        </View>
      </AppCards>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardTitle: {
    fontSize: 25,
    fontWeight: '900',
    color: PrimaryDarkColor,
    textAlign: 'center',
  },
  cardContent: {
    marginTop: 10,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  innerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  icons: {
    color: Grey900Color,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: PrimaryDarkColor,
  },
  count: {
    fontSize: 20,
    fontWeight: '900',
    color: BlackColor,
  },
});

//make this component available to the app
export default Home;
