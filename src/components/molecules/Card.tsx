import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function MoleculesCard({
  onPress,
  title,
  time,
  description,
}: {
  onPress: () => void;
  title: string;
  time: string;
  description: string;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{flexDirection: 'row', marginTop: 6}}
      key={String(new Date())}>
      <View style={{height: 60, width: 60, backgroundColor: 'yellow'}} />
      <View style={{marginLeft: 6}}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 16,
            flexWrap: 'wrap',
            width: '90%',
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 12,
            color: 'gray',
            marginTop: 4,
          }}>
          {time}
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 14,
            color: 'gray',
            marginTop: 4,
          }}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
