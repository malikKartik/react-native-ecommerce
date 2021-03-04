import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import BestBuys from '../../../components/BestBuys';
import CategorieIcon from '../../../components/CategorieIcon';
import OfferCard from '../../../components/OfferCard';
import PickedProduct from '../../../components/PickedProducts';
import {CATEGORIES} from '../../../stubs/categories';
import {OFFERS} from '../../../stubs/offers';
import {PICKEDPRODUCTS} from '../../../stubs/pickedProducts';

const Landing = () => {
  return (
    <ScrollView>
      <FlatList
        data={CATEGORIES}
        horizontal
        decelerationRate={'fast'}
        renderItem={({item}) => {
          return <CategorieIcon title={item.name} uri={item.icon} />;
        }}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.CategoriesHorizontalList}
      />
      <Text style={styles.headings}>OFFERS</Text>
      <FlatList
        data={OFFERS}
        horizontal
        decelerationRate={'fast'}
        renderItem={({item}) => {
          return <OfferCard title={item.title} uri={item.icon} />;
        }}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.OffersHorizontalList}
      />
      <Text style={styles.headings}>BEST BUYS</Text>
      <BestBuys />
      <Text style={styles.headings}>PICKS FOR YOU</Text>
      <FlatList
        data={PICKEDPRODUCTS}
        horizontal
        decelerationRate={'fast'}
        renderItem={({item}) => {
          return <PickedProduct item={item} />;
        }}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.PickedProductsList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  CategoriesHorizontalList: {
    paddingBottom: 10,
    borderBottomColor: 'rgba(200,200,200,1)',
    borderWidth: 1,
  },
  headings: {
    fontSize: 14,
    marginTop: 20,
    marginLeft: 10,
    fontWeight: '800',
  },
  PickedProductsList: {
    marginTop: 5,
  },
});

export default Landing;
