import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Bullet from '../../../components/Bullet';
import PickedProduct from '../../../components/PickedProducts';
import Rating from '../../../components/Rating';
import {PICKEDPRODUCTS} from '../../../stubs/pickedProducts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Product = ({route}) => {
  return (
    <View style={styles.productContainer}>
      <ScrollView
        style={{
          backgroundColor: 'white',
          position: 'relative',
          height: windowHeight - 180,
        }}>
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
          {'\n'}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.boldText}>Size: </Text>
          {route.params.data.size}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.boldText}>Color: </Text>
          {route.params.data.color}
          {'\n'}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.boldText}>Original Product</Text>
        </Text>
        <Text style={styles.text}>
          Product Name: Some cool title Product{'\n'}
          Type: T shirt Product{'\n'}
          Code: CSJ8200{'\n'}
          {'\n'}
          The original product can be viewed{' '}
          <Text style={{color: 'blue'}}>Here</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.heading}>{'\n'}Related products</Text>
        </Text>
        <FlatList
          data={PICKEDPRODUCTS}
          horizontal
          decelerationRate={'fast'}
          renderItem={({item}) => {
            return (
              <PickedProduct item={item} navigation={route.params.navigation} />
            );
          }}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          style={styles.PickedProductsList}
        />
      </ScrollView>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonFont}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: windowHeight - 130,
  },
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
  PickedProductsList: {
    marginTop: 5,
    marginLeft: 10,
    marginBottom: 20,
  },
  checkoutButton: {
    width: windowWidth - 40,
    marginHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#FF2D55',
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  checkoutButtonFont: {
    color: 'white',
    fontSize: 18,
  },
});

export default Product;
