//import liraries
import React, {useCallback, useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useGetSavedCard} from '../services/queries/useFetch';
import AppSeparator from '../reusable/AppSelector';
import AppSpacer from '../reusable/AppSpacer';
import AppTransactionLoader from '../reusable/AppTransactionLoader';
import AppEmptyMessage from '../reusable/AppEmptyMessage';
import AppText from '../reusable/AppText';
import {Styles} from '../reusable/GlobalStyle';
import {ActivityIndicator} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
// create a component
const FetchedCards = () => {
  const navigation = useNavigation();

  const [decPwd, setDevPwd] = useState();
  const {
    data: cards = [],
    isLoading: isLoadingProducts,
    isFetching: isFetchingProductCards,
    refetch: refetchCard,
    isRefetching: isRefetchingCards,
    isError,
  } = useGetSavedCard();

  // React.useEffect(() => {
  //   console.log(cards);
  // }, [cards]);

  const gotoTransactionDetails = React.useCallback(
    item => () => {
      navigation.navigate('TransactionDetails', {
        ...item,
      });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({item}) => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('applist', {
            item,
            routeType: 'cards',
            // socials,
          })
        }>
        <View
          style={[Styles.flexRow, Styles.spaceBetween, styles.containerCard]}>
          <View
            style={[Styles.flexRow, Styles.spaceBetween, Styles.alignCenter]}>
            <View style={styles.text}>
              <AppText
                style={[
                  Styles.textCapitalize,
                  Styles.subtitle2,
                  styles.fontWeight,
                ]}>
                {item.cardHolder}
              </AppText>
              <AppText style={[Styles.body3, styles.description]}>
                {item?.cardExpiry}
              </AppText>
            </View>
          </View>
          <AppSpacer />
          <View style={Styles.alignEnd}>
            <Ionicons name="arrow-forward-outline" />
            <AppText style={[Styles.body3, styles.description]}>
              {item.createdAt}
            </AppText>
          </View>
        </View>
      </TouchableOpacity>
    ),
    [navigation],
  );

  if (isLoadingProducts || isFetchingProductCards) {
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

  if (!cards.length && !isLoadingProducts) {
    return (
      <AppEmptyMessage description="Your recent transactions will appear here. You have none at the moment" />
    );
  }
  return (
    (!isLoadingProducts || !isFetchingProductCards) && (
      <FlatList
        vertical
        data={cards}
        renderItem={renderItem}
        refreshing={isRefetchingCards}
        onRefresh={refetchCard}
        showsVerticalScrollIndicator
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
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
  containerCard: {
    marginTop: 30,
    maeginRight: 50,
  },
});

//make this component available to the app
export default FetchedCards;
