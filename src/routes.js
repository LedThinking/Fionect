import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './pages/Main/index';
import StartPage from './pages/StartPage/index';
import LoginOrRegister from './pages/LoginOrRegister/index';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="SplashScreen" component={StartPage} />
        <AppStack.Screen name="LoginOrRegister" component={LoginOrRegister} />
        <AppStack.Screen name="Main" component={Main} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
