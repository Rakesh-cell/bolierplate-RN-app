import React, { Component } from 'react'
import {View,Button,StyleSheet, } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'

// import {
//     Avatar,
//     Title,
//     Caption,
//     Drawer,
// } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export function DrawerContent(props){



    // const userPicture = "https://quiet-harbor-07900.herokuapp.com"+userData.user.UserLogin.profile
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    {/* <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row',marginTop:15}}>
                            <Avatar.Image
                                source={require('../assets/employee_avatar.png')}
                                size={50}
                                />
                                <View style={{marginLeft:15,flexDirection: 'column'}} >
                                    <Title style={styles.title}>{userName}</Title>
                                    <Caption style={styles.caption}>{userEmail}</Caption>
                                </View>
                        </View>
                    </View> */}
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size})=>(
                                <Icon name='home-outline'
                                color={color}
                                size={size}
                                />
                            )}
                            label='Home'
                            onPress={()=>{props.navigation.navigate('HomeScreen')}}
                        
                        />
                        <DrawerItem
                            icon={({color, size})=>(
                                <Icon name='account-outline'
                                color={color}
                                size={size}
                                />
                            )}
                            label='Feedback'
                            onPress={()=>{props.navigation.navigate('Members')}}
                        
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size})=>(
                        <Icon name='exit-to-app'
                        color={color}
                        size={size}
                        />
                    )}
                    label='Sign out'
                    // onPress={()=>props.logOutUser(props.navigation)}
                    // onPress={() => this.props.navigation.navigate('Login')}
                    onPress={() => props.navigation.navigate('Login')}
                />
            </Drawer.Section>
            
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    
  });
 