import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import AtomChip from '../atoms/Chip';

export default function MoleHeroImages({uri, title}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: uri}} style={styles.heroImage} />
      <AtomChip text="Sports" />
      <View style={styles.containerContain}>
        <View style={styles.containRow}>
          <Text style={styles.containRowSrc}>CNN Indonesia</Text>
          <Text style={styles.containRowDate}>6 hours ago</Text>
        </View>
        <Text style={styles.bigTitle}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'red',
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 12,
  },
  containerContain: {
    position: 'absolute',
    bottom: 14,
    left: 24,
    width: '100%',
  },
  containRow: {flexDirection: 'row', alignItems: 'center', gap: 12},
  containRowSrc: {color: colors.flat, fontSize: 16, fontWeight: '500'},
  containRowDate: {color: colors.flat, fontSize: 12},
  bigTitle: {
    color: colors.flat,
    fontSize: 20,
    fontWeight: '600',
    width: '70%',
  },
});
