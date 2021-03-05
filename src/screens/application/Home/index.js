import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../Landing';
import ProductList from '../ProductList';
import Product from '../Product';
import Cart from '../Cart';
import HomeHeader from '../../../components/HomeHeader';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Stack = createStackNavigator();

function Home(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
            elevation: 0,
          },
          header: ({scene, previous, navigation}) => {
            const {options} = scene.descriptor;

            const title =
              options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name;
            return (
              <HomeHeader
                title={title}
                navigation={navigation}
                style={options.headerStyle}
              />
            );
          },
        }}
      />
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
