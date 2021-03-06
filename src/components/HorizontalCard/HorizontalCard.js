import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Br from '../Br';
import Bullet from '../Bullet';
import {Bold, Instruction} from '../Text';

const HorizontalCard = () => {
  return (
    <View style={styles.card}>
      <View>
        <Image source={require('../../../public/p2.png')} style={styles.img} />
      </View>
      <View style={styles.container}>
        <Bold />
        <Bold>Product Title</Bold>
        <Instruction>Product Category</Instruction>
        <Bold>699</Bold>
      </View>
      <View style={styles.bulletContainer}>
        <Bullet />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    elevation: 5,
    margin: 2.5,
    marginVertical: 5,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  img: {
    height: 100,
    width: 100,
    marginLeft: 10,
  },
  container: {
    paddingHorizontal: 20,
  },
  bulletContainer: {
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HorizontalCard;
