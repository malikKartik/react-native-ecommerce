import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const OfferCard = ({uri, title}) => {
  return (
    <View>
      <View style={styles.cardContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 150,
    width: 200,
    borderColor: 'rgba(10,10,10,0.4)',
    overflow: 'hidden',
    borderWidth: 1,
    margin: 5,
    marginVertical: 5,
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 30,
  },
});

export default OfferCard;
