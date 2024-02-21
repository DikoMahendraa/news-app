import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {ScrollView} from 'react-native-gesture-handler';

export default function TabMenu({tabs, setState, isActive = false}) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {tabs.map(item => {
        return (
          <TouchableOpacity
            onPress={() => setState(item)}
            key={item}
            style={styles.tab({isActive: isActive === item})}>
            <Text
              style={{
                color: isActive === item ? colors.flat : colors.gray,
                textTransform: 'capitalize',
              }}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: ({isActive}: {isActive: boolean}) => ({
    backgroundColor: isActive ? colors.primary : colors.disabled,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 4,
    borderWidth: 1,
    borderColor: colors.gray,
  }),
});
