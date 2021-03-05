import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const TextInputComponent = ({
  value,
  onChangeText,
  placeholder,
  textarea,
  marginHorizontal,
}) => {
  return (
    <TextInput
      multiline={textarea}
      numberOfLines={textarea && textarea === true ? 4 : textarea}
      style={{
        ...styles.input,
        marginHorizontal: marginHorizontal ? marginHorizontal : 0,
      }}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 20,
    backgroundColor: '#F2F2F2',
  },
});

export default TextInputComponent;
