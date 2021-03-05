import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Banner = () => {
  return <View style={styles.banner}></View>;
};

const styles = StyleSheet.create({
  banner: {
    width: windowWidth,
    height: 200,
    borderColor: 'rgba(10,10,10,1)',
    borderWidth: 1,
  },
});

export default Banner;
