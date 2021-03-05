import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PickedProduct = ({item, navigation}) => {
  return (
    <View style={styles.pickedProductContainer}>
      <Image style={styles.img} source={require('../../../public/p1.png')} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Product', {data: item})}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>
          {'\u20A8'} {item.price}
        </Text>
      </TouchableOpacity>
      <View style={styles.CTAs}>
        <TouchableOpacity style={styles.CTA}>
          <EvilIcons name={'cart'} size={25} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.CTA}>
          <FontAwesome name="bookmark-o" size={20} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pickedProductContainer: {
    height: 300,
    width: 200,
    marginHorizontal: 5,
    borderColor: 'rgba(10,10,10,1)',
    borderWidth: 1,
    borderRadius: 5,
    position: 'relative',
  },
  img: {
    width: 200,
    height: 150,
    borderWidth: 1,
    borderColor: 'rgba(10,10,10,1)',
  },
  title: {
    marginLeft: 5,
    marginTop: 10,
    fontSize: 18,
    fontWeight: '800',
  },
  description: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '200',
  },
  price: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '800',
  },
  CTAs: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: 30,
    backgroundColor: 'tomato',
    display: 'flex',
    flexDirection: 'row',
  },
  CTA: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PickedProduct;
