//import liraries
import React, {useMemo, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import AppEmptyMessage from './AppEmptyMessage';

import {useGetFollowers} from '../services/queries/useFetch';
import AppText from './AppText';
import AppSpacer from './AppSpacer';

import {PrimaryDarkColor, WhiteColor} from './Constants';
import {Styles} from './GlobalStyle';
import AppSeparator from './AppSelector';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Title from './Title';
// create a component
const Socials = ({navigation}) => {
  const {
    data: follower = [],
    isLoading: isLoadingFollowers,
    isFetching: isFetchingProductFollowers,
    refetch: refetchFollowers,
    isRefetching: isRefetchingFollowers,
    isError,
  } = useGetFollowers();

  React.useEffect(() => {
    follower;
    // .results.map(item => item.cell)
  }, [follower]);

  const renderItem = useCallback(
    ({item, index}) => (
      <View>
        <View
          testID={`follower-item-${index}`}
          key={item.uuid}
          style={[Styles.flexRow, Styles.spaceBetween, styles.containerCard]}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('applist', {
                item,
                routeType: 'fetched',
                // socials,
              })
            }
            style={[Styles.flexRow, Styles.spaceBetween, Styles.alignCenter]}>
            <View style={styles.text}>
              <AppText
                style={[
                  Styles.textCapitalize,
                  Styles.subtitle2,
                  styles.fontWeight,
                ]}>
                {item.cell}
              </AppText>
              <AppText style={[Styles.body3, styles.description]}>
                {item.email}
              </AppText>
            </View>
          </TouchableOpacity>
          <AppSpacer />
          <View style={Styles.alignEnd}>
            <AppText> Access_Code:</AppText>
            <Image source={item.large} />
          </View>
        </View>
      </View>
    ),
    [navigation],
  );

  // if (!follower.length && !isLoadingFollowers) {
  //   return (
  //     <AppEmptyMessage description="Your recent transactions will appear here. You have none at the moment" />
  //   );
  // }

  return (
    <View>
      <Title title={'See List of Followers'} />

      {(!isLoadingFollowers || !isFetchingProductFollowers) && (
        <FlatList
          data={follower.results}
          renderItem={renderItem}
          refreshing={isFetchingProductFollowers}
          onRefresh={refetchFollowers}
          keyExtractor={_index => _index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[styles.contentContainerStyle]}
          ItemSeparatorComponent={() => <AppSeparator vertical={false} />}
        />
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  walletButtonContent: {
    height: 140,
    width: 'auto',
    backgroundColor: PrimaryDarkColor,
    padding: 30,
    justifyContent: 'center',
  },
  walletBalance: {
    paddingVertical: 15,
  },
  walletButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30.5,
  },
  text: {
    color: WhiteColor,
    fontSize: 16,
    fontWeight: '900',
  },
  inputcontainer: {
    paddingVertical: 24,
    paddingHorizontal: 30,
  },
});

//make this component available to the app
export default Socials;
