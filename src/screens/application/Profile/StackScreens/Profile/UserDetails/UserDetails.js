import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import Button from '../../../../../../components/Button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const UserDetails = ({navigation, setIsLoggedIn}) => {
  const setItem = async (key, value) => {
    try {
      console.log(key, value);
      await AsyncStorage.setItem(key, `${value}`);
      setIsLoggedIn(`${value}`);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Button onPress={() => setItem('isLoggedIn', false)} title="Logout" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: windowWidth,
    height: windowHeight,
    display: 'flex',
  },
});

export default UserDetails;
