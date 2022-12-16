//import liraries
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from '../app/screens/homeScreen/Home';
import Profile from '../app/screens/profileScreen/Profile';
import Password from '../app/screens/passwordScreen/Password';
import File from '../app/screens/fileScreen/File';
import Center from '../app/screens/Center';
import AppText from '../app/reusable/AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  BlackColor,
  PrimaryColor,
  PrimaryDarkColor,
  SecondaryColor,
  SuccessColor,
  WhiteColor,
} from '../app/reusable/Constants';
import {Styles} from '../app/reusable/GlobalStyle';
import AddCard from '../app/screens/AddCard';
const Tab = createBottomTabNavigator();
// create a component
const DashbaordTab = () => {
  return (
    <Tab.Navigator
      barStyle={{
        flex: 1,
        paddingBottom: 10,
      }}
      screenOptions={({}) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 2,
          borderColor: PrimaryDarkColor,
          paddingBottom: 5,
          backgroundColor: PrimaryDarkColor,

          transform: [{scaleY: 1}],
        },
        headerShown: false,
      })}>
      <Tab.Screen
        name="HomeStack"
        component={Home}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 1,
              }}>
              {focused ? (
                <Ionicons color={SuccessColor} size={size} name="home" />
              ) : (
                <Ionicons color={WhiteColor} size={size} name="home" />
              )}
              <AppText
                weight="med"
                color="white"
                style={{
                  textAlign: 'center',
                  fontSize: 13,
                }}>
                Home{' '}
              </AppText>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="PortfolioStack"
        component={AddCard}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 1,
              }}>
              {focused ? (
                <Ionicons
                  color={SuccessColor}
                  size={size}
                  name="document-text"
                />
              ) : (
                <Ionicons color={WhiteColor} size={size} name="document-text" />
              )}
              <AppText
                weight="med"
                color="white"
                style={{
                  textAlign: 'center',
                  fontSize: 13,
                }}>
                File{' '}
              </AppText>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="CenterStack"
        component={Center}
        options={{
          tabBarIcon: ({focused, size, color, props}) => (
            <>
              {/* <AnimatedTabBar {...props} /> */}
              {focused ? (
                <View
                  style={{
                    borderWidth: 3,
                    borderColor: BlackColor,
                    backgroundColor: BlackColor,
                    paddingHorizontal: 12,
                    borderRadius: 35,
                    width: 60,
                    height: 60,
                    marginBottom: 40,
                    zIndex: 10,
                    position: 'absolute',
                    top: -30,
                    alignSelf: 'center',
                  }}>
                  <Ionicons
                    size={size}
                    color={SuccessColor}
                    name="add"
                    style={Styles.thundericon}
                  />
                </View>
              ) : (
                <View
                  style={{
                    borderWidth: 3,
                    backgroundColor: PrimaryColor,
                    paddingHorizontal: 12,
                    borderRadius: 35,
                    width: 60,
                    height: 60,
                    marginBottom: 40,
                    zIndex: 10,
                    position: 'absolute',
                    top: -30,
                    alignSelf: 'center',
                  }}>
                  <Ionicons
                    size={size}
                    color={WhiteColor}
                    name="add"
                    style={Styles.thundericon}
                  />
                </View>
              )}
            </>
          ),
        }}
      />

      <Tab.Screen
        name="WalletStack"
        component={Password}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 1,
              }}>
              {focused ? (
                <Ionicons color={SuccessColor} size={size} name="card" />
              ) : (
                <Ionicons color={WhiteColor} size={size} name="card" />
              )}
              <AppText
                weight="med"
                color="white"
                style={{
                  textAlign: 'center',
                  fontSize: 14,
                }}>
                Password{' '}
              </AppText>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MoreStack"
        component={Profile}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 1,
              }}>
              {focused ? (
                <Ionicons name="settings" color={SuccessColor} size={size} />
              ) : (
                <Ionicons name="settings" color={WhiteColor} size={size} />
              )}
              <AppText
                weight="med"
                color="white"
                style={{
                  textAlign: 'center',
                  fontSize: 13,
                }}>
                Profile{' '}
              </AppText>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
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
export default DashbaordTab;
