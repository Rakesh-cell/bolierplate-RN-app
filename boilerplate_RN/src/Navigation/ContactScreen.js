import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import  ContactAScreen  from './ContactAScreen';
import  ContactBScreen  from './ContactBScreen';
const Stack = createStackNavigator();

const ContactScreen=(props)=> {


    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Contact A"
                component={ContactAScreen} />
            <Stack.Screen
                name="Contact B"
                component={ContactBScreen} />
        </Stack.Navigator>
    );
}
export default ContactScreen;