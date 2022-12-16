import React, {useState} from 'react';
import {View} from 'react-native';
import {Snackbar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as appColors from '../reusable/Constants';

const useToastAlert = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [toastMessage, setToastMessage] = React.useState('');

  const showToast = message => {
    setIsOpen(true);
    setToastMessage(message);
  };

  const hideToast = () => setIsOpen(false);
  const renderToast = () => (
    <View style={{width: '100%'}}>
      <Snackbar
        visible={isOpen}
        onDismiss={hideToast}
        // style={{ left:5, right:5, backgroundColor: 'green', marginBottom: 20 }}
        action={{
          ...(showLabel && {label: 'X'}),
          ...(showIcon && {
            icon: () => (
              <Ionicons
                size={25}
                color={appColors.WhiteColor}
                name={'ios-close-outline'}
              />
            ),
          }),
          onPress: hideToast,
        }}>
        {toastMessage}
      </Snackbar>
    </View>
  );

  return {
    showToast,
    hideToast,
    renderToast,
    isOpen,
  };
};

export default useToastAlert;
