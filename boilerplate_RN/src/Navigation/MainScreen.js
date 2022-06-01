import React from 'react';
import { StyleSheet } from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/';

import  DetailsScreen  from './DetailsScreen';
import  HomeScreen  from './HomeScreen';
import Root from './Roots';
const Tab = createMaterialBottomTabNavigator();

 const MainScreen=()=> {


    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName = "ios-home";

                    if(route.name === 'HomeScreen') {
                    }
                    else if (route.name === 'Details') {
                        iconName = 'ios-list';
                    } else if (route.name === 'Contact') {
                        iconName = 'ios-call';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
                

            })}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="Details" component={DetailsScreen} />
            <Tab.Screen name="Root" component={Root} />
        </Tab.Navigator>

    );
}
export default MainScreen