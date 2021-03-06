import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const Instruction = ({children, center}) => {
  return (
    <Text
      style={{...styles.instruction, textAlign: center ? 'center' : 'left'}}>
      {children}
    </Text>
  );
};

export const Bold = ({children}) => {
  return <Text style={styles.bold}>{children}</Text>;
};

export const CenterHeading = ({children}) => {
  return <Text style={styles.centerHeading}>{children}</Text>;
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
  centerHeading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
});
