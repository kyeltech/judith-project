import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Icons} from '../../assets/Image/Icons';
import AppText from './AppText';
import {WhiteColor} from './Constants';
import {Styles} from './GlobalStyle';
import {colors} from './Theme';

const AppEmptyMessage = ({
  description,
  title,
  contentStyle,
  showIcon = true,
  onRetry,
  canRetry,
  canRetryStyle,
}) => (
  <View
    style={[
      Styles.alignCenter,
      Styles.justifyCenter,
      styles.container,
      contentStyle,
    ]}>
    {showIcon && <Icons.EmptyRecordIcon />}
    {title && (
      <AppText style={[Styles.body2, {textAlign: 'center'}]}>{title}</AppText>
    )}
    <AppText style={[Styles.body2, styles.description, {textAlign: 'center'}]}>
      {description}
    </AppText>

    {canRetry && (
      <TouchableOpacity
        onPress={onRetry}
        style={[styles.retryWrapper, canRetryStyle]}>
        <AppText style={{color: colors.white, fontSize: 14}}>Try again</AppText>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 266,
    marginTop: 58,
    marginBottom: 30,
    alignSelf: 'center',
  },
  description: {
    marginTop: 16,
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    marginTop: 10,
    width: '50%',
    height: 40,
  },
  textStyle: {
    color: WhiteColor,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
  },
  retryWrapper: {
    width: 110,
    height: 40,
    backgroundColor: colors.optiLockDarkColor,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppEmptyMessage;
