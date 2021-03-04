import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from './screens/application/Home';
import Profile from './screens/application/Profile';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
              return <IconIcons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user-o';
              return <FontAwesome name={iconName} size={size} color={color} />;
            } else if (route.name === 'Explore') {
              iconName = 'search';
              return <FontAwesome name={iconName} size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FF2D55',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={Profile} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'rgba(40,40,40,0.3)',
  },
});

export default App;
