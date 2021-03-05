import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const windowWidth = Dimensions.get('window').width;

const FileUpload = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="upload" size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowWidth * 0.4,
    width: windowWidth * 0.4,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'dashed',
    borderRadius: 1,
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
  },
});

export default FileUpload;
