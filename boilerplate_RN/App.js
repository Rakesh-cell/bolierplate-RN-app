// import 'react-native-gesture-handler'
import React,{useEffect} from 'react';
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box } from 'native-base';
import SplashScreen from 'react-native-splash-screen'
import RootStackScreen from './src/Navigation/RootStackScreen'
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  // 2. Use at the root of your app
  useEffect(() => {
    SplashScreen.hide();
  },[])
  return (
    // <NativeBaseProvider>
    //   <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
    //     <Text>Open up App.js to start working on your app!</Text>
    //   </Box>
    // </NativeBaseProvider>
    <NavigationContainer> 
      <RootStackScreen/>
    </NavigationContainer>
  );
}