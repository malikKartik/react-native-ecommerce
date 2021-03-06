import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from './screens/application/Home';
import Profile from './screens/application/Profile';
import Add from './screens/application/Add';

const Tab = createBottomTabNavigator();

const App = () => {
  const AddScreen = ({navigation}) => {
    return <Add navigation={navigation} isLoggedIn={false} />;
  };
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
              iconName = focused ? 'md-search' : 'md-search-outline';
              return <IconIcons name={iconName} size={size} color={color} />;
            } else if (route.name === 'Add') {
              iconName = focused
                ? 'md-add-circle-sharp'
                : 'md-add-circle-outline';
              return <IconIcons name={iconName} size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FF2D55',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={Profile} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
