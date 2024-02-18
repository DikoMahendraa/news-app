import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default function AtomButton({title}: {title: string}) {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
