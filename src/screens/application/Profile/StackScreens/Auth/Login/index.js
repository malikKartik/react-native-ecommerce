import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Button from '../../../../../../components/Button';
import {Instruction} from '../../../../../../components/Text';
import TextInput from '../../../../../../components/TextInput';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({navigation, setIsLoggedIn}) => {
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
      <TextInput placeholder="Email or Phone Number" />
      <TextInput placeholder="Password" />
      <Button onPress={() => setItem('isLoggedIn', true)} title="Login" />
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Instruction center>Signup instead</Instruction>
      </TouchableOpacity>
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
});
export default Login;
