import {View} from 'react-native';
import React from 'react';

export default function AtomSpaces({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return <View style={{width: width, height: height}} />;
}
