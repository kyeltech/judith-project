import React, {useCallback, useMemo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import AppText from './AppText';
import {Grey800Color, Grey900Color, WhiteColor} from './Constants';
import {colors} from './Theme';

const AppTab = ({
  items,
  index,
  onChange,
  scrollable = false,
  hideIndicator = false,
  round = false,
  renderTabBarItem,
  style,
  roundTabItemStyle,
}) => {
  const canScroll = useMemo(() => scrollable || round, [round, scrollable]);

  const routes = useMemo(
    () =>
      items.map(item => ({
        key: item.key,
        title: item.title,
      })),
    [items],
  );

  const renderScene = useMemo(
    () =>
      items.reduce(
        (scene, item) => ({
          ...scene,
          [item.key]: item.component,
        }),
        {},
      ),
    [items],
  );

  const renderIndicator = useMemo(
    () => (hideIndicator || round ? () => null : undefined),
    [hideIndicator, round],
  );

  const renderRoundTabBarItem = useCallback(
    ({
      navigationState,
      route,
      key,
      style: roundTabBarItemStyle,
      ...otherProps
    }) => {
      const tabItemIndex = navigationState.routes.indexOf(route);
      const isFocused = navigationState.index === tabItemIndex;

      return (
        <TouchableOpacity
          key={key}
          {...otherProps}
          style={[roundTabBarItemStyle]}>
          <View
            pointerEvents="none"
            style={[
              styles.roundTabItem,
              isFocused
                ? styles.activeRoundTabItem
                : styles.inactiveRoundTabItem,
              tabItemIndex === items.length - 1 && styles.resetMarginRight,
              roundTabItemStyle,
            ]}>
            <AppText
              style={[
                styles.subtitle,
                isFocused
                  ? styles.activeRoundTabItemText
                  : styles.inactiveRoundTabItemText,
              ]}>
              {route.title}
            </AppText>
          </View>
        </TouchableOpacity>
      );
    },
    [items.length, roundTabItemStyle],
  );

  const renderDefaultTabBar = useCallback(
    props => (
      <TabBar
        {...props}
        activeColor={colors.primary}
        inactiveColor={colors.gray}
        scrollEnabled={canScroll}
        indicatorStyle={styles.indicator}
        style={[styles.tabbar, round && styles.roundTab, style]}
        tabStyle={[canScroll && styles.tab]}
        labelStyle={styles.label}
        renderTabBarItem={round ? renderRoundTabBarItem : renderTabBarItem}
        renderIndicator={renderIndicator}
      />
    ),
    [
      renderIndicator,
      renderRoundTabBarItem,
      renderTabBarItem,
      round,
      canScroll,
      style,
    ],
  );

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={SceneMap(renderScene)}
      onIndexChange={onChange}
      renderTabBar={renderDefaultTabBar}
    />
  );
};

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#00000',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    elevation: 0,
  },
  tab: {
    width: 'auto',
    alignItems: 'center',
  },
  indicator: {
    backgroundColor: colors.primary,
  },
  label: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 12,
    color: colors.gray,
    textTransform: 'none',
  },
  roundTab: {
    elevation: 0,
    borderBottomWidth: 0,
    marginBottom: 20,
    shadowOffset: {height: 0, width: 0},
    shadowColor: 'transparent',
    shadowOpacity: 0,
    backgroundColor: colors.background,
    width: 200,
  },
  activeRoundTabItem: {
    backgroundColor: WhiteColor,
    borderColor: WhiteColor,
  },
  inactiveRoundTabItem: {
    backgroundColor: colors.background,
    borderColor: colors.background,
  },
  activeRoundTabItemText: {
    color: Grey900Color,
  },
  inactiveRoundTabItemText: {
    color: Grey800Color,
  },
  subtitle: {
    fontWeight: '500',
    color: Grey800Color,
    lineHeight: 18,
    fontSize: 14,
  },
  roundTabItem: {
    borderRadius: 8,
    borderColor: Grey900Color,
    borderWidth: 1,
    paddingVertical: 7,
    paddingHorizontal: 8,
    marginRight: 10,
  },
  resetMarginRight: {
    marginRight: 0,
  },
});

export default AppTab;
