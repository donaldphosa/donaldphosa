import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import  {createNativeStackNavigator}  from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Auth from './pages/Auth';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import VerifyPin from './pages/VerifyPin'
import PhoneNumber from './pages/PhoneNumber';
import Tabs from './pages/Tabs';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Auth' screenOptions={ { headerShown: false }} >
            <Stack.Screen name='Auth' component={Auth}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='PhoneNumber' component={PhoneNumber}/>
            <Stack.Screen name='VerifyPin' component={VerifyPin}/>
            <Stack.Screen name='Tabs' component={Tabs}/>
          </Stack.Navigator>
        </NavigationContainer>
     
    
  );
}

