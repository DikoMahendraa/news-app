import React from 'react';
import {View, StyleSheet} from 'react-native';

interface AtomSpacesProps {
  width?: number;
  height?: number;
}

const AtomSpaces: React.FC<AtomSpacesProps> = ({width, height}) => {
  return <View style={[styles.spaces, {width, height}]} />;
};

const styles = StyleSheet.create({
  spaces: {
    // add default styles here if needed
  },
});

export default AtomSpaces;
