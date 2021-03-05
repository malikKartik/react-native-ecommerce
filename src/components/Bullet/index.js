import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Bullet = () => {
  return (
    <View style={styles.bullet}>
      <Text style={styles.text}>In stock</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bullet: {
    backgroundColor: '#169F00',
    marginHorizontal: 25,
    borderRadius: 15,
    marginTop: 15,
    height: 18,
    width: 60,
  },
  text: {
    color: 'white',
    fontWeight: '800',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Bullet;
