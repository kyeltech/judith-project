//import liraries
import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStacks from './AuthStack';
import MasterPassword from '../app/auth/masterPassword';
import Verify from '../app/auth/Verify';
import AddCard from '../app/screens/AddCard';
import Encryption from '../app/screens/Encryption';
import DashbaordTab from './Dashboard';
import AppList from '../app/screens/AppList';
import Dec from '../app/screens/Dec';
// create a component
const RootStack = () => {
  const Stacks = createNativeStackNavigator();
  return (
    <Stacks.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}>
      <Stacks.Screen component={DashbaordTab} name="dashboardTab" />
      <Stacks.Screen component={AuthStacks} name="Auth" />
      <Stacks.Screen component={MasterPassword} name="masterPassword" />
      <Stacks.Screen component={Verify} name="verify" />
      <Stacks.Screen component={AppList} name="applist" />
      <Stacks.Screen component={AddCard} name="AddCard" />
      <Stacks.Screen component={Encryption} name="encrypt" />
      <Stacks.Screen component={Dec} name="dec" />
    </Stacks.Navigator>
  );
};

// define your styles

//make this component available to the app
export default RootStack;
