import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Signup = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>Signup</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: windowWidth,
    height: windowHeight,
    display: 'flex',
  },
});

export default Signup;
