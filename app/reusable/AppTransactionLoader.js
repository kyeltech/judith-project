import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icons} from '../../assets/Image/Icons';

const AppTransactionLoader = ({count = 1}) => (
  <View style={styles.container}>
    {Array(count)
      .fill('')
      .map((_, index) => (
        <Icons.TransactionLoaderIcon key={`_${index.toString()}`} />
      ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppTransactionLoader;
