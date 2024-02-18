import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

export default function AtomChip({text}: {text: string}) {
  return (
    <View style={styles.chip}>
      <Text style={styles.textChip}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    position: 'absolute',
    top: 24,
    borderRadius: 12,
    left: 12,
    backgroundColor: colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  textChip: {
    fontWeight: '500',
    color: colors.flat,
    fontSize: 12,
  },
});
