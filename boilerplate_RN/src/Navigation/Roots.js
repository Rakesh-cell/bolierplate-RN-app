import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import  ProfileScreen  from './ProfileScreen';
import  SettingsScreen  from './SettingsScreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



export default function Root() {
	return (
		<Drawer.Navigator initialRouteName="Profile">
			<Drawer.Screen name="Profile" component={ProfileScreen} />
			<Drawer.Screen name="Settings" component={SettingsScreen} />
		</Drawer.Navigator>

	);
}