import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../Landing';
import ProductList from '../ProductList';
import Product from '../Product';
import Cart from '../Cart';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Stack = createStackNavigator();

const CATEGORIES_HOME_PAGE = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Home(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
  },
});

export default Home;
