import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import Button from '../../../../components/Button';
import FileUpload from '../../../../components/FileUpload';
import {Bold, Instruction} from '../../../../components/Text';

const windowWidth = Dimensions.get('window').width;

const Step2 = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Bold>Basic Information</Bold>
      <Instruction>
        Let buyers know what your products look like. You may check out this
        link to see how to take pictures of your products
      </Instruction>
      <View style={styles.files}>
        <FileUpload />
      </View>
      <Button
        title="Enter Pricing Information"
        onPress={() => navigation.navigate('Step 3')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: windowWidth,
    paddingHorizontal: 20,
  },
  files: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Step2;
