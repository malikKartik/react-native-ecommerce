import React from 'react';
import {StyleSheet, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Rating = ({rating}) => {
  let arr = [0, 0, 0, 0, 0];
  return (
    <View style={styles.rating}>
      {arr.map((star, index) => {
        return (
          <FontAwesome
            name={
              index + 1 <= rating
                ? 'star'
                : rating <= index + 1 && rating > index
                ? 'star-half-empty'
                : 'star-o'
            }
            size={16}
            color="black"
            style={styles.ratingStar}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  ratingStar: {
    marginHorizontal: 2,
  },
});

export default Rating;
