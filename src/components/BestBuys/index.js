import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const imgWidth = windowWidth / 2 - 20;

const BestBuys = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={require('../../../public/p3.png')} />
      </View>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={require('../../../public/p4.png')} />
      </View>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={require('../../../public/p5.png')} />
      </View>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={require('../../../public/p6.png')} />
      </View>
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
  img: {
    width: '100%',
    height: '100%',
  },
  imgContainer: {
    width: imgWidth,
    height: 120,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default BestBuys;
