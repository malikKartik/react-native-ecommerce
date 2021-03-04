import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const CategorieIcon = ({uri, title}) => {
  return (
    <View>
      <View style={styles.imgContainer}>
        <Image
          source={require('../../images/jumpsuit.png')}
          style={styles.icon}
        />
      </View>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    height: 50,
    borderColor: 'rgba(10,10,10,0.4)',
    overflow: 'hidden',
    borderWidth: 1,
    margin: 20,
    borderRadius: 25,
    marginBottom: 5,
  },
  icon: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    borderRadius: 20,
    margin: 5,
  },
  titleText: {
    textAlign: 'center',
  },
});

export default CategorieIcon;
