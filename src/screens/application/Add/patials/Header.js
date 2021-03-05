import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;

const Header = ({title, navigation}) => {
  return (
    <View style={styles.header}>
      <IonIcons name={'chevron-back'} size={24} onPress={navigation.goBack} />
      <Text style={styles.heading}>New Product</Text>
      <View style={styles.steps}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.step,
            backgroundColor:
              title === 'Step 1' || title === 'Step 2' || title === 'Step 3'
                ? '#0FA05B'
                : '#E3E4E8',
          }}
        />
        <View // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.step,
            backgroundColor:
              title === 'Step 2' || title === 'Step 3' ? '#0FA05B' : '#E3E4E8',
          }}
        />
        <View // eslint-disable-next-line react-native/no-inline-styles
          style={{
            ...styles.step,
            backgroundColor: title === 'Step 3' ? '#0FA05B' : '#E3E4E8',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: windowWidth,
    padding: 10,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  steps: {
    width: windowWidth - 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  step: {
    width: (windowWidth - 20 - 30) / 3,
    marginVertical: 5,
    height: 8,
    borderRadius: 5,
    backgroundColor: '#E3E4E8',
  },
});

export default Header;
