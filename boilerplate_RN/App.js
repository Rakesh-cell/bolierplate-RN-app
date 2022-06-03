// import 'react-native-gesture-handler'
import React,{useEffect} from 'react';
// 1. import `NativeBaseProvider` component
import SplashScreen from 'react-native-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {SafeAreaView} from 'react-native'
import { NativeBaseProvider } from 'native-base';

import RootNavigation from './src/Navigation/RootNavigation'

// const Stack = createStackNavigator();
// function TabAScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="TabA Home" component={TabADetailsScreen} />
//       <Stack.Screen name="TabA Details" component={Details} />
//     </Stack.Navigator>
//   );
// }



export default function App() {
  useEffect(() => {
        SplashScreen.hide();
      },[])


  return (
      <SafeAreaView style={{ flex: 1}}> 
  <NativeBaseProvider> 

    <RootNavigation/>
  </NativeBaseProvider>

    </SafeAreaView>
  )
}

// export default function App() {
//   // 2. Use at the root of your app
//   useEffect(() => {
//     SplashScreen.hide();
//   },[])
//   return (
//     // <NativeBaseProvider>
//     //   <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
//     //     <Text>Open up App.js to start working on your app!</Text>
//     //   </Box>
//     // </NativeBaseProvider>
//     <NavigationContainer> 
//       <RootStackScreen/>
//     </NavigationContainer>
//   );
// }