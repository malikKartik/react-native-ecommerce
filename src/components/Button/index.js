import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.Button} onPress={onPress}>
      <Text style={styles.ButtonFont}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Button: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#FF2D55',
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  ButtonFont: {
    color: 'white',
    fontSize: 18,
  },
});

export default Button;
