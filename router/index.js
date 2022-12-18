//import liraries
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RootStack from './RootStack';
// import {AuthContext} from './AuthProvider';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import AuthStacks from './AuthStack';
// create a component
const Router = () => {
  // const {user, setUser} = useContext(AuthContext);

  // const onAuthStateChanged = user => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };

  // React.useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // });

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <RootStack />
    </SafeAreaProvider>
  );
};

//make this component available to the app
export default Router;
