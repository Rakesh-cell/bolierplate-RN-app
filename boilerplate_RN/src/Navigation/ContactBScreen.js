import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContactBScreen=(props)=> {

    return (
        <View style={{ ...styles, flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 40 }}>Contact B Screen</Text>
            <Text style={{ fontSize: 20 }}>Welcome to the Contact B screen</Text>
        </View>
    );
}
export default ContactBScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});