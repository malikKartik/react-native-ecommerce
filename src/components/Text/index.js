import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const Instruction = ({children}) => {
  return <Text style={styles.instruction}>{children}</Text>;
};

export const Bold = ({children}) => {
  return <Text style={styles.bold}>{children}</Text>;
};

const styles = StyleSheet.create({
  instruction: {
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 16,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  bold: {
    fontWeight: 'bold',
  },
});
