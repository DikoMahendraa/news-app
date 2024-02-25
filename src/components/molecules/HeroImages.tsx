import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import AtomChip from '../atoms/Chip';

interface MoleHeroImagesProps {
  uri: string;
  title: string;
}

const MoleHeroImages: React.FC<MoleHeroImagesProps> = ({uri, title}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: uri}} style={styles.heroImage} />
      <View style={styles.overlay}>
        <View style={{maxWidth: 80, marginBottom: 12}}>
          <AtomChip text="Sports" />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.source}>{'CNN Indonesia'}</Text>
            <Text style={styles.date}>{'6 hours ago'}</Text>
          </View>
          <Text style={styles.bigTitle}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
    justifyContent: 'flex-end',
  },
  textContainer: {
    marginBottom: 12,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  source: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
    marginRight: 12,
  },
  date: {
    color: colors.white,
    fontSize: 12,
  },
  bigTitle: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '600',
    width: '70%',
  },
});

export default MoleHeroImages;
