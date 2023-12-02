import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Text from './text';
import Icons from './Icons';
function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.containerStyle}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const {tabBarLabel, title, tabBarAccessibilityLabel, tabBarTestID} =
          options;
        const label =
          tabBarLabel !== undefined
            ? tabBarLabel
            : title !== undefined
            ? title
            : route.name;

        const isFocused = state.index === index;
        // get focused label

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const getTabBarIcon = (focused, name) => {
          const iconMapping = {
            Home: 'BottomHome',
            Surfing: 'BottomSurfing',
            Hula: 'BottomHula',
            Vulcano: 'BottomVulcano',
          };

          const iconName = iconMapping[name] || 'BottomSurfing';

          return <Icons name={focused ? `${iconName}Selected` : iconName} />;
        };

        return (
          <TouchableOpacity
            style={styles.touchable}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={tabBarAccessibilityLabel}
            testID={tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={styles.navigationItemStyle}>
              {getTabBarIcon(isFocused, label)}
              <Text style={isFocused ? styles.textSelected : styles.text}>
                {label}
              </Text>
            </View>
            {isFocused && <View style={styles.selectedBar} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: theme.white,
    justifyContent: 'space-around',
    height: 72,
    shadowColor: theme.green,
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    elevation: 5,
    width: '100%',
  },
  navigationItemStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  text: {
    color: theme.dark,
    textAlign: 'center',
    fontOptions: fontOptions('600'),
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 16,
  },
  textSelected: {
    color: theme.green,
    textAlign: 'center',
    fontOptions: fontOptions('600'),
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 10,
    lineHeight: 16,
  },
  selectedBar: {
    bottom: 0,
    position: 'absolute',
    height: 5,
    backgroundColor: theme.green,
    width: '100%',
  },
  touchable: {
    flex: 1,
  },
});
