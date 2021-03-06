import React, {useState} from 'react';
import {ScrollView, StyleSheet, Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import Button from '../../../components/Button';
import UserDetails from './StackScreens/Profile/UserDetails/UserDetails';
import MyOrders from './StackScreens/Profile/MyOrders/MyOrders';
import Login from './StackScreens/Auth/Login';
import Signup from './StackScreens/Auth/Signup';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Stack = createStackNavigator();

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState('false');
  useFocusEffect(
    React.useCallback(() => {
      const checkIfLoggedIn = async () => {
        const val = await AsyncStorage.getItem('isLoggedIn');
        setIsLoggedIn(val);
      };
      checkIfLoggedIn();
    }, []),
  );

  const setItem = async (key, value) => {
    try {
      console.log(key, value);
      await AsyncStorage.setItem(key, `${value}`);
      setIsLoggedIn(`${value}`);
    } catch (e) {
      console.log(e);
    }
  };

  const UserDetailsScreen = ({navigation}) => {
    return (
      <UserDetails navigation={navigation} setIsLoggedIn={setIsLoggedIn} />
    );
  };

  const LoginScreen = ({navigation}) => {
    return <Login navigation={navigation} setIsLoggedIn={setIsLoggedIn} />;
  };
  const SignupScreen = ({navigation}) => {
    return <Signup navigation={navigation} setIsLoggedIn={setIsLoggedIn} />;
  };
  return (
    <>
      {isLoggedIn === 'true' ? (
        <Stack.Navigator>
          <Stack.Screen name="User Details" component={UserDetailsScreen} />
          <Stack.Screen name="My Orders" component={MyOrders} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      )}
    </>
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

export default Profile;
