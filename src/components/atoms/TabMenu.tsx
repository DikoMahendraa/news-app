import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

export default function TabMenu() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <Text style={{color: colors.flat}}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={{color: colors.gray}}>Politic</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={{color: colors.gray}}>Sport</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={{color: colors.gray}}>Education</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 40,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    backgroundColor: colors.disabled,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 4,
    borderWidth: 1,
    borderColor: colors.gray,
  },
});
