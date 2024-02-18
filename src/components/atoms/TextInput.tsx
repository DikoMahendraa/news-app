import {View, Text, TextInput} from 'react-native';
import React from 'react';

export default function AtomTextInput({
  label,
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: () => void;
  label: string;
}) {
  return (
    <View>
      {Boolean(label) && <Text>{label}</Text>}

      <TextInput placeholder={placeholder} onChange={onChange} />
    </View>
  );
}
