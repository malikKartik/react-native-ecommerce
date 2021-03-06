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

export const Heading = ({children}) => {
  return <Text style={styles.heading}>{children}</Text>;
};

export const LeftInfo = ({children}) => {
  return <Text style={styles.leftInfo}>{children}</Text>;
};

const styles = StyleSheet.create({
  instruction: {
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 16,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  bold: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  centerHeading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
  },
  leftInfo: {
    marginTop: 5,
    marginRight: 5,
    fontWeight: '300',
    textAlign: 'right',
    fontSize: 12,
    lineHeight: 16,
    color: 'rgba(120, 120, 240, 1)',
  },
});
