import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactAScreen=(props)=> {

    return (
        <View style={{ ...styles, flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 40 }}>Contact A Screen</Text>
            <Text style={{ fontSize: 20 }}>Welcome to the Contact A screen</Text>
        </View>
    );
}
export default ContactAScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});