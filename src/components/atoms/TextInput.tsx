import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

interface AtomTextInputProps {
  label?: string;
  placeholder: string;
  onChange: (text: string) => void;
}

const AtomTextInput: React.FC<AtomTextInputProps> = ({
  label,
  placeholder,
  onChange,
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
  },
});

export default AtomTextInput;
