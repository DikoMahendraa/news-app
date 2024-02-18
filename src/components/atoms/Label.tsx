import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';

export default function AtomLabel({
  title,
  subtitle,
  rootStyle,
}: {
  rootStyle?: any;
  title: string;
  subtitle: string;
}) {
  return (
    <View style={styles.container(rootStyle)}>
      <Text style={styles.label}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (customStyle: any) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...customStyle,
  }),
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
