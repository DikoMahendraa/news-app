import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function MoleculesCard({
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
}>) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{flexDirection: 'row'}}
      key={String(new Date())}>
      <Image
        width={100}
        height={100}
        source={{uri: uri}}
        style={{borderRadius: 6}}
      />
      <View
        style={{
          marginLeft: 6,
          justifyContent: 'space-between',
          paddingBottom: 12,
        }}>
        <Text
          style={{
            paddingTop: 6,
            fontWeight: '400',
            fontSize: 12,
            color: 'gray',
            textTransform: 'capitalize',
          }}>
          {category}
        </Text>
        <Text
          style={{
            textTransform: 'capitalize',
            fontWeight: '600',
            fontSize: 16,
            flexWrap: 'wrap',
            width: '90%',
          }}>
          {title}
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
          <Image
            width={24}
            height={24}
            source={{uri: uri}}
            style={{borderRadius: 12}}
          />
          <Text
            style={{
              textTransform: 'capitalize',
              fontWeight: '400',
              fontSize: 12,
              color: 'gray',
            }}>
            {author}
          </Text>
          <Text
            style={{
              textTransform: 'capitalize',
              fontWeight: '400',
              fontSize: 12,
              color: 'gray',
            }}>
            {time}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
