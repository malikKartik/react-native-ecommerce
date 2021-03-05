import React from 'react';
import {Text, View} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Step1 from './patials/Step1';
import Step2 from './patials/Step2';
import Step3 from './patials/Step3';
import Header from './patials/Header';
import Button from '../../../components/Button';

const Stack = createStackNavigator();

const Add = ({navigation: tabNavigation, isLoggedIn}) => {
  return (
    <>
      {!isLoggedIn ? (
        <>
          <Text>You need to login First</Text>
          <Button
            title="Login"
            onPress={() => tabNavigation.navigate('Profile')}
          />
        </>
      ) : (
        <Stack.Navigator
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle: {
              borderBottomWidth: 0,
              elevation: 0,
            },
            header: ({scene, previous, navigation}) => {
              const {options} = scene.descriptor;

              const title =
                options.headerTitle !== undefined
                  ? options.headerTitle
                  : options.title !== undefined
                  ? options.title
                  : scene.route.name;
              return (
                <Header
                  title={title}
                  navigation={navigation}
                  style={options.headerStyle}
                />
              );
            },
          }}
          headerMode="float">
          <Stack.Screen name="Step 1" component={Step1} />
          <Stack.Screen name="Step 2" component={Step2} />
          <Stack.Screen name="Step 3" component={Step3} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default Add;
