import {View} from 'react-native';
import React from 'react';

export default function AtomSpaces({
  width,
  height,
}: Partial<{
  width: number;
  height: number;
}>) {
  return <View style={{width: width, height: height}} />;
}
