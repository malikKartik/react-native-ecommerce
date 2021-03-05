import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from '../../../../components/Button';
import {Bold, Instruction} from '../../../../components/Text';
import TextInput from '../../../../components/TextInput';

const windowWidth = Dimensions.get('window').width;

const Step1 = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Bold>Basic Information</Bold>
      <TextInput placeholder="Title" />
      <Instruction>
        Provide a short title to describe the product you are selling. Ex: Zara
        White Linen Shirt
      </Instruction>

      <TextInput placeholder="Category" />
      <Instruction>
        Pick a category for your product from the exisiting options.
      </Instruction>

      <TextInput placeholder="Description" textarea />
      <Instruction>
        Provide a brief description to describe the product in more detail. You
        may mention the condition, texture, material, and so on.
      </Instruction>
      <Button title="Proceed" onPress={() => navigation.navigate('Step 2')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: windowWidth,
    paddingHorizontal: 20,
  },
});

export default Step1;
