import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../modules/auth/Login';
import Signup from '../modules/auth/Signup';
import { HomeScreen } from './MainTabScreen';
import NotificationsScreen from '../NotificationsScreen';
import DrawerNavig from './DrawerNavig';
import TabAScreen from '../modules/Home/TabAScreen'
import TabBScreen from '../modules/Home/TabBScreen';


const Stack = createStackNavigator();


const StackNavigation = () => {
  return (
    <Stack.Navigator>
         <Stack.Screen name="Home" component={DrawerNavig} options={{headerShown:false}}/>
         <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
         <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
         <Stack.Screen name="Notifications" component={NotificationsScreen}/>
         {/* <Stack.Screen name="TabA" component={TabAScreen} options={{headerShown:false}}/> */}
         {/* <Stack.Screen name="TabA" component={TabAScreen} options={{headerShown:false}}/> */}



      </Stack.Navigator>
  )
}

export default StackNavigation