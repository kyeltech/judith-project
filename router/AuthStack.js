//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../app/auth/login';
import SignUp from '../app/auth/signUp';
import OnboardingScreen from '../app/auth/onBoardingScreen';
import forgotPassword from '../app/auth/forgotPassword';
import Ionicons from 'react-native-vector-icons/Ionicons';
// create a component
const AuthStacks = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  // if (isFirstLaunch === null) {
  //   return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  // } else if (isFirstLaunch == true) {
  //   routeName = 'Login';
  // } else {
  //   routeName = 'Login';
  // }
  const Stacks = createNativeStackNavigator();
  return (
    <Stacks.Navigator
      // initialRouteName={routeName}
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stacks.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{header: () => null}}
      /> */}
      <Stacks.Screen
        component={Login}
        name="Login"
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
        })}
      />
      <Stacks.Screen
        component={SignUp}
        name="SignUp"
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
        })}
      />
    </Stacks.Navigator>
  );
};

//make this component available to the app
export default AuthStacks;
