import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../utils/colors';
import {Bookmark, Home, Search} from 'lucide-react-native';

const BottomNavigator = ({
  state,
  navigation,
}: {
  state: any;
  navigation: any;
  descriptors: any;
}) => {
  return (
    // @ts-ignore
    <View style={styles.rootContainer}>
      {state.routes.map((route: any, index: any) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const setIconTabMenu = () => {
          switch (route.name.toLowerCase()) {
            case 'berita':
              return (
                <Home color={isFocused ? colors.flat : colors.gray} size={20} />
              );
            case 'cari':
              return (
                <Search
                  color={isFocused ? colors.flat : colors.gray}
                  size={20}
                />
              );

            case 'bookmarks':
            default:
              return (
                <Bookmark
                  color={isFocused ? colors.flat : colors.gray}
                  size={20}
                />
              );
          }
        };

        return (
          <TouchableOpacity
            key={route.name}
            // @ts-ignore
            style={styles.container}
            onLongPress={onLongPress}
            onPress={onPress}>
            {/* @ts-ignore */}
            <View style={styles.tabMenu({isFocused})}>
              {setIconTabMenu()}
              {isFocused && (
                // @ts-ignore
                <Text style={styles.tabTitle({isFocused})}>{route.name}</Text>
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    backgroundColor: colors.flat,
    paddingVertical: 6,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  container: {
    paddingHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flex: 1,
    maxHeight: 60,
    height: 40,
  },
  // @ts-ignore
  tabMenu: ({isFocused}: {isFocused: boolean}) => ({
    width: '100%',
    backgroundColor: isFocused ? colors.primary : 'white',
    paddingHorizontal: 18,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    borderRadius: 20,
  }),
  // @ts-ignore
  tabTitle: ({isFocused}) => ({
    color: isFocused ? colors.flat : colors.black,
    fontSize: 12,
  }),
});
