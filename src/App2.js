import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Animated from 'react-native-reanimated';
import Home from './screens/application/Home';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function Header({scene, previous, navigation}) {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <View
      title={title}
      leftButton={previous ? <Button onPress={navigation.goBack} /> : undefined}
      style={options.headerStyle}
    />
  );
}

const App = () => {
  return (
    <>
      <Home />
      {/* <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            gestureEnabled: true,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            header: ({navigation}) => {
              return (
                <View>
                  <Button title="go back" onPress={navigation.goBack} />
                </View>
              );
            },
          }}
          headerMode="float"
          headerStyle={{height: 80}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Details"
            component={(props) => <DetailsScreen {...props} />}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'rgba(40,40,40,0.3)',
  },
});

export default App;
