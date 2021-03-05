import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import Button from '../../../../components/Button';
import {Bold, Instruction} from '../../../../components/Text';
import TextInput from '../../../../components/TextInput';

const windowWidth = Dimensions.get('window').width;

const Step3 = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <TextInput placeholder="Sizing" />
      <Instruction>
        Please provide the dimensions of your product. (Width/Shoulder Lenght
        etc.)
      </Instruction>
      <TextInput placeholder="Original Product Link" />
      <Instruction>
        If you have the original link of where you originally bought the product
        from, please provide it here.
      </Instruction>
      <Bold />
      <Bold>Selling Information</Bold>
      <View style={styles.textFields}>
        <View style={styles.textField}>
          <TextInput placeholder="Selling Price" marginHorizontal={5} />
        </View>
        <View style={styles.textField}>
          <TextInput placeholder="Your Zipcode" marginHorizontal={5} />
        </View>
      </View>
      <Bold />
      <Bold />
      <Button
        title="Create Product"
        onPress={() => navigation.navigate('Step 2')}
      />
      <Instruction>
        Please note that it may take 4-5 hours before your product is verified
        and displayed for sale.
      </Instruction>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: windowWidth,
    paddingHorizontal: 20,
  },
  textFields: {
    display: 'flex',
    flexDirection: 'row',
  },
  textField: {
    width: '50%',
  },
});

export default Step3;
