//import liraries
import React, {useRef, useState, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Animated,
  Platform,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppText from './AppText';
// create a component
const AppInput = ({
  autoFocus = false,
  multiline,
  numberOfLines,
  type = 'input',
  textInputStyle,
  label,
  isFloatingLabel = true,
  labelStyle,
  onChangeText,
  LeftIcon,
  onFocus,
  onBlur,
  RightIcon,
  valid,
  error,
  inputStyle,
  borderColor,
  hint,
  labelValue,
  ...props
}) => {
  const textInputRef = useRef();
  const [showPass, setShowPass] = useState(true);
  const [localValue, setLocalValue] = useState('');
  const [focused, setFocused] = React.useState(false);
  const {
    roundness,
    colors: {primary, text},
  } = useTheme();
  const animatedIsFocused = React.useRef(
    new Animated.Value(props.value ? 1 : 0),
  ).current;

  React.useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: focused || props.value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [focused, animatedIsFocused, props.value]);

  const floatLabelStyle = {
    ...styles.label,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 0],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [12, 11],
    }),
    lineHeight: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [12, 20],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: ['#111E27', '#D1D5DB'],
    }),
  };

  const _onChangeText = e => {
    let text_ = e;
    if (type === 'amount') {
      text_;
    }
    onChangeText?.(text_);
  };

  const _onBlur = e => {
    if (type === 'amount') {
    }
    onBlur?.(e);
    setFocused(false);
  };

  const _onFocus = e => {
    onFocus?.(e);
    setFocused(true);
  };

  const borderColorStyle = useMemo(() => {
    if (borderColor) {
      return borderColor;
    }
    return '#117ACA';
  }, [borderColor]);

  const newProps = {
    ...props,
    onChangeText: _onChangeText,
    onBlur: _onBlur,
    onFocus: _onFocus,
    placeholder: isFloatingLabel ? undefined : props.placeholder,
  };
  return (
    <View style={styles.container}>
      <>
        <TouchableWithoutFeedback>
          <View
            style={[
              styles.inputContainer,
              {
                borderRadius: 5,
                borderColor: focused ? borderColorStyle : 'transparent',
                backgroundColor: focused ? '#F6F8FA' : '#ffffff',
              },
              error && styles.error,
              inputStyle,
            ]}>
            {LeftIcon && (
              <View style={styles.leftIcon}>
                <LeftIcon />
              </View>
            )}
            <View style={{minWidth: '70%'}}>
              {isFloatingLabel && (
                <Animated.Text style={[floatLabelStyle, labelStyle]}>
                  {label}
                </Animated.Text>
              )}
              <TextInput
                style={[
                  styles.textField,
                  label
                    ? {
                        paddingVertical: 0,
                        paddingBottom: 0,
                      }
                    : {},
                  {color: text},
                  textInputStyle,
                ]}
                hitSlop={{top: 10, bottom: 10, left: 40, right: 40}}
                ref={textInputRef}
                value={labelValue}
                autoFocus={autoFocus}
                returnKeyType="done"
                multiline={multiline}
                numberOfLines={numberOfLines}
                secureTextEntry={type === 'password' && showPass}
                {...props}
                {...newProps}
              />
            </View>
            {type === 'password' && (
              <View style={styles.rightIcon}>
                <Ionicons
                  name={showPass ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color={'#111E27'}
                  onPress={() => setShowPass(!showPass)}
                />
              </View>
            )}

            {type !== 'password' && (
              <View style={styles.rightIcon}>
                {valid === true && (
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={20}
                    color={'#dddddd'}
                  />
                )}
              </View>
            )}
            {RightIcon && (
              <View style={styles.rightIcon}>
                <RightIcon />
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </>
      {!!hint &&
        (typeof hint === 'string' ? (
          <AppText color="primary" weight="reg" font="sm">
            {hint}
          </AppText>
        ) : undefined)}
      {!!error &&
        (typeof error === 'string' ? (
          <AppText
            color="grey"
            weight="light"
            font="sm"
            style={{color: 'red', marginTop: 5}}>
            {error}
          </AppText>
        ) : undefined)}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    justifyContent: 'center',
  },
  textField: {
    fontSize: 14,
    lineHeight: 18,
    color: '#F6F8FA',
    paddingVertical: 10,
  },
  label: {
    fontSize: 12,
    lineHeight: 12,
    color: '#4E637A',
  },
  rightIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    height: '100%',
    marginLeft: 'auto',
  },
  leftIcon: {
    // borderRightWidth: 1,
    borderRightColor: '#F6F8FA',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 20,
    paddingLeft: 10,
    height: '100%',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingVertical: Platform.OS === 'android' ? 15 : 0,
    paddingHorizontal: 10,
    backgroundColor: '#dddddd',
  },
});

//make this component available to the app
export default AppInput;
