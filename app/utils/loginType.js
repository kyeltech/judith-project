import AsyncStorage from '@react-native-async-storage/async-storage';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {LOGIN_EMAIL, LOGIN_WITH_BIOMETRIC, LOGIN_WITH_PIN} from './constants';

export const setPIN = value => {
  if (value === null) {
    return AsyncStorage.removeItem(LOGIN_WITH_PIN);
  }

  return AsyncStorage.setItem(LOGIN_WITH_PIN, value);
};

export const getPIN = () => {
  return AsyncStorage.getItem(LOGIN_WITH_PIN);
};

//TODO: Refactor
export const setLoginEmail = value => {
  if (value === null) {
    return AsyncStorage.removeItem(LOGIN_EMAIL);
  }

  return AsyncStorage.setItem(LOGIN_EMAIL, value);
};

export const getLoginEmail = () => {
  return AsyncStorage.getItem(LOGIN_EMAIL);
};

export const setBiometric = value => {
  if (value === null) {
    return AsyncStorage.removeItem(LOGIN_WITH_BIOMETRIC);
  }

  return AsyncStorage.setItem(LOGIN_WITH_BIOMETRIC, value);
};

export const getBiometric = () => {
  return AsyncStorage.getItem(LOGIN_WITH_BIOMETRIC);
};

export const isBiometricEnabled = async () => {
  const rnBiometrics = new ReactNativeBiometrics();
  let result = {
    isSupported: false,
    biometryType: undefined,
    isEnabled: false, //true, false, null
  };

  let {available, biometryType, error} = await rnBiometrics.isSensorAvailable();
  result.biometryType = biometryType;
  result.isSupported = available;
  console.log('Biometrics is supported?', biometryType, available, error);
  if (available && biometryType === BiometryTypes.TouchID) {
    //TODO:
    console.log('TouchID is supported', biometryType);
  } else if (available && biometryType === BiometryTypes.FaceID) {
    //TODO:
  } else if (available && biometryType === BiometryTypes.Biometrics) {
    //TODO:
  } else {
    result.biometryType = undefined;
    result.isSupported = false;
  }
  const enabled = await getBiometric();
  result.isEnabled = enabled;
  return result;
};

export const promptBiometrics = async (type, message, callback) => {
  const rnBiometrics = new ReactNativeBiometrics();
  let {success, error} = await rnBiometrics.simplePrompt({
    promptMessage: message || 'Sign in with ' + type,
    cancelButtonText: 'CANCEL',
  });
  console.log({success, error});
  if (success) {
    callback?.();
  }
};
