import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen=(props)=> {

    return (
        <View style={{ ...styles, flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 40 }}>Profile Screen</Text>
            <Text style={{ fontSize: 20 }}>Welcome to the Profile screen</Text>
        </View>
    );
}
export default ProfileScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});