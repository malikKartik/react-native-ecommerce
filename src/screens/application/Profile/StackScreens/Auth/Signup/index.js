import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from '../../../../../../components/Button';
import TextInput from '../../../../../../components/TextInput';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Signup = ({navigation, setIsLoggedIn}) => {
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
      <View style={styles.twoTextFields}>
        <View style={styles.halfWidthTextField}>
          <TextInput placeholder="First Name" marginHorizontal={5} />
        </View>
        <View style={styles.halfWidthTextField}>
          <TextInput placeholder="Last Name" marginHorizontal={5} />
        </View>
      </View>
      <TextInput placeholder="Email" marginHorizontal={5} />
      <TextInput placeholder="Phone Number" marginHorizontal={5} />
      <TextInput placeholder="Password" marginHorizontal={5} />
      <Button onPress={() => setItem('isLoggedIn', true)} title="Get OTP" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    width: windowWidth,
    height: windowHeight,
    display: 'flex',
  },
  twoTextFields: {
    display: 'flex',
    flexDirection: 'row',
  },
  halfWidthTextField: {
    width: '50%',
  },
});

export default Signup;
