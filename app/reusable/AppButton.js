import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';
import AppText from './AppText';
import {Styles} from './GlobalStyle';

// create a component
const AppButton = ({
  text,
  style,
  textStyle,
  Icon,
  onClick,
  type = 'primary', //primary|secondary|link
  loading = false,
  disabled = false,
  loadingColor,
  loadingText,
}) => {
  const bgColor =
    type === 'primary'
      ? '#117ACA'
      : type === 'secondary'
      ? '#E7F4FF'
      : type === 'link'
      ? 'transparent'
      : 'red';

  //TODO: inspect the change
  const textColor = type === 'primary' ? '#ffffff' : '#E7F4FF';
  // const textColor = type === 'primary' ? WhiteColor : type === 'link' ? CoralRed :  PrimaryColor;
  return (
    <View style={{opacity: disabled ? 0.3 : 1}}>
      <TouchableOpacity
        disabled={loading}
        onPress={disabled ? undefined : () => onClick?.()}
        activeOpacity={0.7}
        style={[styles.container, {backgroundColor: bgColor}, style]}>
        {loading ? (
          <View style={[Styles.rowDirection, Styles.rowDirection]}>
            <ActivityIndicator
              animating={true}
              color={loadingColor ? loadingColor : Colors.white}
            />
            {loadingText && (
              <AppText
                size="xsm"
                weight="extrabold"
                color="blue"
                style={[
                  {
                    color: textColor,
                  },
                  {marginLeft: 10},
                  textStyle,
                ]}>
                {loadingText}
              </AppText>
            )}
          </View>
        ) : (
          <>
            {Icon && <Icon />}
            <AppText
              size="xsm"
              weight="extrabold"
              color="blue"
              style={[
                {
                  color: textColor,
                },
                {marginLeft: Icon && 10},
                textStyle,
              ]}>
              {text}
            </AppText>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 4,
    backgroundColor: '#E7F4FF',
  },
});

//make this component available to the app
export default AppButton;
