
import {createStackNavigator} from '@react-navigation/stack'
// import Login from '../modules/auth/Login'
// import Signup from '../modules/auth/Signup'
// import DrawerNavigator from './DrawerNavigator'
// import Profile from '../modules/Profile/Profile'

// import MainTabScreen from './MainTabScreen'

import React from 'react'
import MainScreen from './MainScreen'
import Root from './Roots'
const RootStack=createStackNavigator();

const RootStackScreen = (props) => {

  return (
    <RootStack.Navigator>
            
        {/* <RootStack.Screen name='Login' component={Login}/>
        <RootStack.Screen name='SignUp' component={Signup}/> */}
            
            <RootStack.Screen name="Home" component={MainScreen} />
				<RootStack.Screen name="Root" component={Root} />


    </RootStack.Navigator>
  )
}

export default RootStackScreen






