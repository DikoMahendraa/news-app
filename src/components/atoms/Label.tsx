import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

interface AtomLabelProps {
  title: string;
  subtitle: string;
  rootStyle?: any;
}

const AtomLabel: React.FC<AtomLabelProps> = ({title, subtitle, rootStyle}) => {
  return (
    <View style={[styles.container, rootStyle]}>
      <Text style={styles.label}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  subtitle: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
});

export default AtomLabel;
