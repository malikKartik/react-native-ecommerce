import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import Br from '../../../../../../components/Br';
import Button from '../../../../../../components/Button';
import HorizontalCard from '../../../../../../components/HorizontalCard/HorizontalCard';
import {
  Bold,
  Heading,
  Instruction,
  LeftInfo,
} from '../../../../../../components/Text';
import {MYPRODUCTS} from '../../../../../../stubs/myProducts';

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
      <View style={styles.userBasicInfo}>
        <View style={styles.DPContainer}>
          <View style={styles.DP}>{/* <Image /> */}</View>
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Instruction>
              <Bold>Name:</Bold> Kartik Malik
            </Instruction>
            <Instruction>
              <Bold>Email:</Bold> kartikmalik019@gmail.com
            </Instruction>
            <Instruction>
              <Bold>Phone:</Bold> 878472536
            </Instruction>
          </View>
        </View>
      </View>
      <Heading>My Products</Heading>
      <View style={{width: windowWidth - 45}}>
        {MYPRODUCTS.map((product) => {
          return <HorizontalCard />;
        })}
      </View>
      <LeftInfo>View All</LeftInfo>
      <Br />
      <Heading>My Orders</Heading>
      <View style={{width: windowWidth - 45}}>
        {MYPRODUCTS.map((product) => {
          return <HorizontalCard />;
        })}
      </View>
      <LeftInfo>View All</LeftInfo>
      <Br />
      <Button onPress={() => setItem('isLoggedIn', false)} title="Logout" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    width: windowWidth,
    height: windowHeight,
    display: 'flex',
  },
  userBasicInfo: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: windowWidth,
    height: 120,
  },
  DP: {
    borderRadius: 50,
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'grey',
    overflow: 'hidden',
  },
  DPContainer: {
    width: 100,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    height: '100%',
    paddingLeft: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UserDetails;
