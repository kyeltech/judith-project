//import liraries
import {Platform, StyleSheet} from 'react-native';
import {colors} from './Theme';
import {
  Grey900Color,
  OptiFlexDarkColor,
  OptiLockDarkColor,
  SecondaryColor,
  WhiteColor,
} from './Constants';
import {fontConfig} from './Theme';

// define your styles
export const Styles = StyleSheet.create({
  SafeAreaContainerTopLevel: {
    flex: 1,
    // backgroundColor: '#ffffff',
    paddingBottom: 20,
    marginBottom: Platform.select({android: -20, ios: -40, default: 5}),
  },
  SafeAreaContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingBottom: 20,
  },
  SafeAreaContainerDashbaord: {
    flex: 1,
    backgroundColor: WhiteColor,
  },
  inputcontainer: {
    flex: 7,
    paddingVertical: 24,
  },
  inputcontainerScroll: {
    // flex: 1,
    flexGrow: 1,
    justifyContent: 'space-between',
    // paddingBottom:50,
  },
  AppContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  topLevelScreenContainer: {
    paddingBottom: Platform.select({ios: 50, android: 50}),
    marginBottom: Platform.select({ios: -10, android: 0}),
  },
  // GlobalStyles: {
  //   backgroundColor: WhiteColor,
  // },
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowDirection: {
    flexDirection: 'row',
  },
  flexRow: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  columnCenter: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textCapitalize: {
    textTransform: 'capitalize',
  },
  bgWhite: {
    backgroundColor: WhiteColor,
  },
  bgGrey: {
    backgroundColor: colors.background,
  },
  textUpperCase: {
    textTransform: 'uppercase',
  },
  flexible: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
  },
  relative: {position: 'relative'},
  alignEnd: {alignItems: 'flex-end'},
  alignStart: {alignItems: 'flex-start'},
  alignCenter: {alignItems: 'center'},
  alignSelf: {alignSelf: 'center'},
  icons: {
    padding: 5,
    width: 28,
    height: 30,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'white',
  },
  textAlignJustify: {
    textAlign: 'justify',
  },
  navbar: {
    padding: 5,
    width: 25,
    height: 25,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: SecondaryColor,
  },
  thundericon: {
    width: 30,
    height: 35,
    marginVertical: 10,
    textAlign: 'center',
    justifyContent: 'center',
  },
  countryCodeLabel: {
    fontSize: 14,
    lineHeight: 18,
    ...fontConfig.medium,
    fontWeight: '500',
    color: Grey900Color,
  },
  subtitle1: {
    fontSize: 16,
    lineHeight: 20,
    ...fontConfig.medium,
  },
  subtitle2: {
    fontSize: 14,
    lineHeight: 18,
    ...fontConfig.medium,
  },
  subtitle3: {
    fontSize: 12,
    lineHeight: 16,
    ...fontConfig.semiBold,
  },
  h2: {
    fontSize: 24,
    lineHeight: 30,
    ...fontConfig.semiBold,
  },
  h3: {
    fontSize: 20,
    lineHeight: 30,
    ...fontConfig.regular,
  },
  h4: {
    fontSize: 24,
    lineHeight: 26,
    ...fontConfig.medium,
  },
  body1: {
    fontSize: 16,
    lineHeight: 22,
    ...fontConfig.regular,
  },
  body2: {
    fontSize: 14,
    lineHeight: 20,
    ...fontConfig.regular,
  },
  body3: {
    fontSize: 12,
    lineHeight: 16,
    ...fontConfig.regular,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    ...fontConfig.regular,
  },
  overline: {
    fontSize: 10,
    lineHeight: 12,
    ...fontConfig.regular,
  },
  tag: {
    fontSize: 11,
    lineHeight: 11,
    ...fontConfig.medium,
  },
  helpIcon: {
    width: 50,
    height: 100,
    paddingHorizontal: 10,
  },
  iconList: {
    marginTop: 10,
  },
  optiFlexButtonStyle: {
    backgroundColor: OptiFlexDarkColor,
    borderRadius: 4,
  },
  optiFlexTextStyle: {
    color: WhiteColor,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
  },
  optiLockButtonStyle: {
    backgroundColor: OptiLockDarkColor,
    borderRadius: 4,
  },
  optiLockTextStyle: {
    color: WhiteColor,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
  },
  HeaderContent: {
    marginVertical: 7,
  },
  modalContentContainer: {
    paddingHorizontal: 16,
    paddingBottom: Platform.select({android: 18, default: 0}),
  },
  lottie: {
    width: 100,
    height: 100,
  },
  lottieMed: {
    width: 50,
    height: 50,
    // bottom: 2,
  },
  scrollView: {
    flex: 1,
    justifyContent: 'space-between',
    // paddingBottom: 15,
  },
  transformFirstName: {
    textTransform: 'capitalize',
  },
  productWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  header: {
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 30,
  },
  subTitle: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // icon:{
  //   border

  // }
});
