//import liraries
import React, {createContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import useToastAlert from '../app/reusable/useToastAlert';

// create a component

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const {showToast, renderToast} = useToastAlert();

  const [user, setUser] = useState(null);
  return (
    <>
      <AuthContext.Provider
        value={{
          user,
          setUser,
          login: async (email, password) => {
            try {
              await auth()
                .signInWithEmailAndPassword(email, password)
                .then(res => {
                  showToast('success', res);
                  console.log('success: ', res);
                })
                .catch(error => {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log(errorCode, errorMessage);
                });
            } catch (e) {
              showToast('Error', e);

              console.log(e);
            }
          },
          register: async (displayName, email, password) => {
            try {
              await auth()
                .createUserWithEmailAndPassword(email, password, displayName)
                .then(res => {
                  showToast('success', res?.user);
                  console.log('success: ', res);
                })
                .catch(error => {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log('user:', errorCode, errorMessage);
                  showToast(auth);
                });
            } catch (err) {
              showToast('Error', err);
              console.log('signUp:', err);
            }
          },

          logout: async () => {
            try {
              await auth().signOut();
            } catch (e) {
              console.log();
            }
          },
        }}>
        {children}
      </AuthContext.Provider>
      {renderToast()}
    </>
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
export default AuthProvider;
