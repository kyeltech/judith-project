//import liraries
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RootStack from './RootStack';
import {AuthContext} from './AuthProvider';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import AuthStacks from './AuthStack';
import DashbaordTab from './Dashboard';
// create a component
const Router = () => {
  const [initializing, setInitializing] = React.useState(true);
  const {user, setUser} = useContext(AuthContext);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  if (initializing) return null;
  return (
    <SafeAreaProvider initialWindowMetrics={initialWindowMetrics}>
      {user ? <DashbaordTab /> : <AuthStacks />}
    </SafeAreaProvider>
  );
};

//make this component available to the app
export default Router;
