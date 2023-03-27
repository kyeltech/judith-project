import React, {useMemo} from 'react';
import {View} from 'react-native';

const AppSeparator = ({size = 16, vertical = true}) => {
  const containerStyle = useMemo(
    () => [vertical && {width: size}, !vertical && {height: size}],
    [size, vertical],
  );

  return <View style={containerStyle} />;
};

export default AppSeparator;
