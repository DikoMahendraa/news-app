import React from 'react';
import {View, Text, StyleSheet, TextStyle} from 'react-native';
import {colors} from '../../utils/colors';

interface AtomChipProps {
  text: string;
  style?: TextStyle;
}

const AtomChip: React.FC<AtomChipProps> = ({text, style}) => {
  return (
    <View style={[styles.chip, style]}>
      <Text style={styles.textChip}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chip: {
    borderRadius: 12,
    backgroundColor: colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  textChip: {
    textAlign: 'center',
    fontWeight: '500',
    color: colors.flat,
    fontSize: 12,
  },
});

export default AtomChip;
