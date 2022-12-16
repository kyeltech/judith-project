import {DefaultTheme as RNavigationDefaultTheme} from '@react-navigation/native';
import {merge} from 'lodash';
import {
  configureFonts,
  DefaultTheme as RNPaperDefaultTheme,
} from 'react-native-paper';
import * as appColors from './Constants';

const combinedDefaultTheme = merge(
  {},
  RNPaperDefaultTheme,
  RNavigationDefaultTheme,
  {
    colors: {
      primary: appColors.PrimaryColor,

      title: appColors.Grey900Color,
      primaryText: appColors.Grey900Color,
      label: appColors.Grey800Color,
      secondaryText: appColors.Grey800Color,
      disable: appColors.Grey800Color,
      placeholder: appColors.Grey800Color,
      icon: appColors.Grey900Color,
      border: appColors.Grey300Color,
      divider: appColors.Grey200Color,
      background: appColors.Grey100Color,

      button: appColors.PrimaryColor,
      links: appColors.PrimaryColor,
      errorText: appColors.Red500Color,
      errorIcon: appColors.Red100Color,
      errorBackground: appColors.Red100Color,
      warningText: appColors.Orange800Color,
      warningIcon: appColors.Orange500Color,
      warningBackground: appColors.Orange100Color,
      successText: appColors.Green800Color,
      successIcon: appColors.Green500Color,
      successBackground: appColors.Green100Color,
    },
  },
);

const fontConfig = {
  regular: {
    fontFamily: 'Manrope-Regular',
    fontWeight: 'normal',
  },
  light: {
    fontFamily: 'Manrope-Light',
    fontWeight: 'normal',
  },
  extraLight: {
    fontFamily: 'Manrope-ExtraLight',
    fontWeight: 'normal',
  },
  medium: {
    fontFamily: 'Manrope-Medium',
    fontWeight: 'bold',
  },
  semiBold: {
    fontFamily: 'Manrope-SemiBold',
    fontWeight: 'bold',
  },
  extraBold: {
    fontFamily: 'Manrope-ExtraBold',
    fontWeight: 'bold',
  },
  thin: {
    fontFamily: 'InterThin',
    fontWeight: 'normal',
  },
};

export const {colors} = combinedDefaultTheme;
export {fontConfig};
const theme = {
  ...combinedDefaultTheme,
  fonts: configureFonts({default: fontConfig}),
};

export default theme;
