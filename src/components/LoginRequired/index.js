import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Button from '../Button';
import {CenterHeading, Instruction} from '../Text';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginRequired = ({tabNavigation}) => {
  const goToProfilePage = () => {
    tabNavigation.navigate('Profile');
  };
  return (
    <View style={styles.container}>
      <CenterHeading>Go to login page</CenterHeading>
      <Button title="Login" onPress={goToProfilePage} />
      <Instruction center>
        You must be logged in to access this feature
      </Instruction>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: windowWidth,
    height: windowHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginRequired;
