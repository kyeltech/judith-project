//import liraries
import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RootStack from './RootStack';
import UserInactivity from 'react-native-user-inactivity';
// import {AuthContext} from './AuthProvider';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import AuthStacks from './AuthStack';
import {navigationContainerRef} from '../app/utils/navigation';
// create a component
const Router = () => {
  const [active, setActive] = useState(true);
  const [timer, setTimer] = useState(5 * 60 * 100);
  // const {user, setUser} = useContext(AuthContext);

  // const onAuthStateChanged = user => {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // };

  // React.useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // });

  const handleSessionTimeout = () => {
    const routes = navigationContainerRef.current?.getRootState();
    const currentRoute = routes?.routes?.[routes?.routes?.length - 1];
    if (!['Auth'].includes(currentRoute?.name)) {
      navigationContainerRef.current?.reset({
        index: 0,
        routes: [{name: 'Auth', screen: 'Login'}],
      });
      // checkAuth();
    }
  };

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <UserInactivity
        isActive={active}
        timeForInactivity={timer}
        onAction={isActive => {
          setActive(isActive);
          if (isActive === false) {
            handleSessionTimeout();
          }
        }}>
        <RootStack />
      </UserInactivity>
    </SafeAreaProvider>
  );
};

//make this component available to the app
export default Router;
