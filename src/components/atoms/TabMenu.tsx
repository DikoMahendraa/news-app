import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {colors} from '../../utils/colors';

interface TabMenuProps {
  tabs: string[];
  setState: (tab: string) => void;
  isActive?: string | false;
}

const TabMenu: React.FC<TabMenuProps> = ({
  tabs,
  setState,
  isActive = false,
}) => {
  const tabStyle = (paramsIsActive: boolean): StyleProp<ViewStyle> => ({
    backgroundColor: paramsIsActive ? colors.blue : colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 4,
    borderWidth: 1,
    borderColor: colors.gray,
  });

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {tabs.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setState(item)}
          style={tabStyle(isActive === item)}>
          <Text
            style={[
              styles.tabText,
              {color: isActive === item ? colors.white : colors.gray},
            ]}>
            {item.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 40,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  tabText: {
    fontSize: 14,
    fontWeight: 'normal',
    textTransform: 'capitalize',
  },
});

export default TabMenu;
