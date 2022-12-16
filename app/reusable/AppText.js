import React, {useState} from 'react';
import {Text} from 'react-native';
import {
  BlackColor,
  Grey100Color,
  Grey300Color,
  Grey800Color,
  Grey900Color,
  LightBlue,
  PrimaryColor,
  SecondaryColor,
  SuccessColor,
  WhiteColor,
} from './Constants.js';

const AppText = ({size, color, weight, style, children, ...props}) => {
  const [isVisible, setisVisible] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setisVisible( true);
  //   }, 2000);

  // });
  // here i add to comment out the effect

  //  import and use
  const fontS =
    size === 'xsm'
      ? 14
      : size === 'xxsm'
      ? 12
      : size === 'sm'
      ? 18
      : size === 'md'
      ? 25
      : size === 'lg'
      ? 30
      : size === 'small'
      ? 16
      : size === 'med'
      ? 20
      : 13;
  const colorX =
    color === 'secondary'
      ? SecondaryColor
      : color === 'grey'
      ? Grey100Color
      : color === 'primary'
      ? PrimaryColor
      : color === 'black'
      ? BlackColor
      : color === 'darkgrey'
      ? Grey900Color
      : color === 'white'
      ? WhiteColor
      : color === 'blue'
      ? LightBlue
      : color === 'lightgrey'
      ? Grey800Color
      : color === 'grey300'
      ? Grey300Color
      : color === 'success'
      ? SuccessColor
      : Grey900Color;
  const fontW =
    weight === 'extralight'
      ? 'Manrope-ExtraLight'
      : weight === 'light'
      ? 'Manrope-Light'
      : weight === 'reg'
      ? 'Manrope-Regular'
      : weight === 'med'
      ? 'Manrope-Medium'
      : weight === 'bold'
      ? 'Manrope-Bold'
      : weight === 'semibold'
      ? 'Manrope-SemiBold'
      : weight === 'extrabold'
      ? 'Manrope-ExtraBold'
      : 'Manrope-ExtraBold';

  return (
    // <Shimmer autoRun= {false} visible={isVisible}>

    <Text
      style={[
        {
          fontSize: fontS,
          color: colorX,
          fontFamily: fontW,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
    // </Shimmer>
  );
};
export default AppText;
