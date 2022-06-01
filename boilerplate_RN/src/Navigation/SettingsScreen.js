import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const SettingsScreen=(props)=> {

    return (
        <View style={{ ...styles, flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 40 }}>Settings Screen</Text>
            <Text style={{ fontSize: 20 }}>Welcome to the Settings screen</Text>
        </View>
    );
}
export default SettingsScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});