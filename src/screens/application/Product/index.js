import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Bullet from '../../../components/Bullet';
import Rating from '../../../components/Rating';

const Product = ({route}) => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../../../public/p6.png')}
          style={styles.img}
        />
        <View style={styles.imgCover}>
          <Bullet />
        </View>
      </View>
      <Text style={styles.heading}>{route.params.data.name}</Text>
      <Rating rating={2} />
      <Text style={styles.text}>
        <Text style={styles.boldText}>Description: </Text>
        {route.params.data.description}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.boldText}>Size: </Text>
        {route.params.data.size}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.boldText}>Color: </Text>
        {route.params.data.color}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 250,
  },
  imgContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  imgCover: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    height: 35,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
    elevation: 24,
  },
  heading: {
    fontSize: 24,
    fontWeight: '800',
    margin: 20,
  },
  text: {
    marginHorizontal: 20,
    fontSize: 14,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default Product;
