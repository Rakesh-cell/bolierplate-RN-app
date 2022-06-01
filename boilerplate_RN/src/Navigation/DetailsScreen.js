import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen=({ route, navigation })=> {

    return (
        <>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 40 }}>Details Screen</Text>
                <Text style={{ fontSize: 20 }}>Welcome to the Details screen</Text>
            </View>
        </>
    );
}
export default DetailsScreen;