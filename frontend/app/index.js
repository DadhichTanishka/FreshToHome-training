import React from 'react';
import Home from './Home';
import MainPage from './mainpage';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MainPage" component={MainPage} />
    </Stack.Navigator>
  );
};

export default App;
