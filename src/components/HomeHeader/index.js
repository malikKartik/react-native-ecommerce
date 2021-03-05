import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
const windowWidth = Dimensions.get('window').width;

const HomeHeader = ({navigation}) => {
  return (
    <View style={styles.header}>
      <IonIcons name={'chevron-back'} size={24} onPress={navigation.goBack} />
      <IonIcons
        name={'cart-outline'}
        size={24}
        onPress={() => navigation.navigate('Cart')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: windowWidth,
    height: 50,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});

export default HomeHeader;
