import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

const MoleculesCard = ({
  onPress,
  title,
  time,
  uri,
  category,
  author,
}: Readonly<{
  onPress: () => void;
  title: string;
  time: string;
  author: string;
  uri: string;
  category: string;
}>) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Image source={{uri: uri}} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.bottomContainer}>
          <Image source={{uri: uri}} style={styles.authorImage} />
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 6,
  },
  contentContainer: {
    marginLeft: 6,
    justifyContent: 'space-between',
    flex: 1,
  },
  category: {
    fontWeight: '400',
    fontSize: 12,
    color: 'gray',
    textTransform: 'capitalize',
  },
  title: {
    textTransform: 'capitalize',
    fontWeight: '600',
    fontSize: 16,
    flexWrap: 'wrap',
    marginVertical: 4,
    maxWidth: 240,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  authorImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  author: {
    textTransform: 'capitalize',
    fontWeight: '400',
    fontSize: 12,
    color: 'gray',
  },
  time: {
    textTransform: 'capitalize',
    fontWeight: '400',
    fontSize: 12,
    color: 'gray',
  },
});

export default MoleculesCard;
