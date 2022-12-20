//import liraries
import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import AppSpacer from '../../reusable/AppSpacer';
import AppText from '../../reusable/AppText';
import {Styles} from '../../reusable/GlobalStyle';
import {useGetSocials} from '../../services/queries/useFetch';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppSeparator from '../../reusable/AppSelector';
import {ActivityIndicator} from 'react-native-paper';
import AppEmptyMessage from '../../reusable/AppEmptyMessage';
import {Base64} from 'js-base64';

import {useNavigation} from '@react-navigation/native';

// create a component
const MyComponent = () => {
  const navigation = useNavigation();
  const [encPwd, setEncPwd] = useState();
  const [decPwd, setDevPwd] = useState();
  const {
    data: socials = [],
    isLoading: isLoadingSocials,
    isFetching: isFetchingProductSocial,
    refetch: refetchSocial,
    isRefetching: isRefetchingSocial,
    isError,
  } = useGetSocials();

  const gotoTransactionDetails = React.useCallback(
    item => () => {
      navigation.navigate('applist', {
        item,
        // socials,
      });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}) => (
      <View>
        <View
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
                {item.socialEmail}
              </AppText>
              <AppText style={[Styles.body3, styles.description]}>
                {item.createdAt}
              </AppText>
            </View>
          </TouchableOpacity>
          <AppSpacer />
          <View style={Styles.alignEnd}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <AppText> Access_Code:</AppText>
              {/* <AppText>{item?.socialPassword}</AppText> */}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Ionicons
                size={30}
                name={decPwd ? 'eye-outline' : 'eye-off-outline'}
                onPress={() => setDevPwd(!decPwd)}
                style={{paddingRight: 20}}
              />
              <AppText style={[Styles.body3, styles.description]}>
                {decPwd
                  ? item?.socialPassword
                  : Base64.decode(item?.socialPassword)}
              </AppText>
            </View>
          </View>
        </View>
      </View>
    ),
    [decPwd, navigation],
  );

  if (isLoadingSocials || isFetchingProductSocial) {
    return <ActivityIndicator />;
  }
  if (isError) {
    return (
      <AppEmptyMessage
        showIcon={false}
        description="Something went wrong while getting your transactions, please try again"
      />
    );
  }

  if (!socials.length && !isLoadingSocials) {
    return (
      <AppEmptyMessage description="Your recent transactions will appear here. You have none at the moment" />
    );
  }
  return (
    (!isLoadingSocials || !isFetchingProductSocial) && (
      <FlatList
        data={socials}
        renderItem={renderItem}
        refreshing={isRefetchingSocial}
        onRefresh={refetchSocial}
        keyExtractor={_index => _index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.contentContainerStyle]}
        ItemSeparatorComponent={() => <AppSeparator vertical={false} />}
      />
    )
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerCard: {
    marginTop: 30,
    maeginRight: 50,
  },
});

//make this component available to the app
export default MyComponent;
