import React from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView } from 'react-native';



const HomeScreen=(props)=> {

    return (
        <View style={{ ...styles, flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text style={{ fontSize: 40 }}>Home Screen</Text>
            <Text style={{ fontSize: 20 }}>Welcome to the Home screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    props.navigation.navigate('Details', {
                        userId: 1,
                        userName: 'Awesome User',
                    });
                }
                }
            />
        </View>
    )
}
export default HomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
