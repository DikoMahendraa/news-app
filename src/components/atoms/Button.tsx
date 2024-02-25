import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface AtomButtonProps {
  title: string;
  onPress?: () => void;
  style?: any;
  textStyle?: any;
}

const AtomButton: React.FC<AtomButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AtomButton;
