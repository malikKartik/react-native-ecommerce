import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const imgWidth = windowWidth / 2 - 20;

const BestBuys = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}></View>
      <View style={styles.imgContainer}></View>
      <View style={styles.imgContainer}></View>
      <View style={styles.imgContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  imgContainer: {
    width: imgWidth,
    height: 120,
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: 'rgba(10,10,10,1)',
    borderWidth: 1,
  },
});

export default BestBuys;
