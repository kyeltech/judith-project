//import liraries
import React, {Component} from 'react';
import {Image, StyleSheet, ImageBackground, View} from 'react-native';
import Headers from '../../assets/Image/Header.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Grey900Color, PrimaryColor} from './Constants';
import {useNavigation} from '@react-navigation/native';
import AppText from './AppText';
import {Styles} from './GlobalStyle';
// create a component
const Header = ({
  hasImage,
  rightComponent,
  backIconName,
  centerTitle,
  backIcon,
  onGoBack,
  titleStyle,
  subtitleStyle,
  contentStyle,
  hasGoBack,
  headerStyle,
  backIconColor,
  ...props
}) => {
  const navigation = useNavigation();
  return (
    <>
      {hasImage && (
        <Image source={Headers} style={styles.image} resizeMode="cover" />
      )}
      {hasGoBack && (
        <View style={headerStyle}>
          <View style={styles.topHeader}>
            {backIcon ? (
              backIcon
            ) : (
              <Ionicons
                size={25}
                color={backIconColor || Grey900Color}
                name={backIconName || 'arrow-back'}
                style={styles.backIcon}
                onPress={onGoBack ? onGoBack : () => navigation.goBack()}
              />
            )}
            {centerTitle && (
              <AppText weight="med" color="darkgrey" size="sm">
                {centerTitle}
              </AppText>
            )}
            {rightComponent ? (
              rightComponent
            ) : centerTitle ? (
              <View style={{flex: 0.3}} />
            ) : null}
          </View>
          <View style={[styles.headerContent, contentStyle]}>
            {props.title && (
              <AppText
                weight="bold"
                color="darkgrey"
                size="md"
                style={[Styles.h2, titleStyle]}>
                {props.title}
                {''}
              </AppText>
            )}
            {props.lighTitle && (
              <AppText color="darkgrey" size="md" style={Styles.h4}>
                {props.lighTitle}
              </AppText>
            )}

            {props.subtitle && (
              <AppText
                weight="reg"
                color="lightgrey"
                size="sm"
                style={[Styles.body2, {marginTop: 8}, subtitleStyle]}>
                {props.subtitle}
                {''}
              </AppText>
            )}
          </View>
        </View>
      )}
    </>

    // {/* <Ionicons name="arrow-back" color={PrimaryColor} /> */}
  );
};
// define your styles
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '30%',
  },
  headerContent: {
    // flex: 1,
    paddingVertical: 16,
    // justifyContent: 'center'
  },
  backIcon: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 0.3,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
  },
});

//make this component available to the app
export default Header;
