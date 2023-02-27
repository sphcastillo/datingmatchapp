import { View, Text } from 'react-native'
import React, { useState } from 'react'
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModalScreen from './screens/ModalScreen';
import AuthScreen from './screens/AuthScreen';
import RegisterScreen from './screens/RegisterScreen';
import SignInScreen from './screens/SignInScreen';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    const user = false;
    console.log("user: ", user)

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {user ? (
                <>
                    <Stack.Group>
                        <Stack.Screen name="Home" component={HomeScreen}/>
                        <Stack.Screen name="Chat" component={ChatScreen}/>
                    </Stack.Group>
                    <Stack.Group screenOptions={{ presentation: 'modal' }}>
                        <Stack.Screen name='Modal' component={ModalScreen}/>
                    </Stack.Group>

                </>

            ) : (
                <Stack.Group>
                    <Stack.Screen 
                        name="Auth" 
                        component={AuthScreen}
                        // options={{ headerShown: false}}
                    />
                    <Stack.Screen name="SignIn" component={SignInScreen}/>
                    <Stack.Screen name="Register" component={RegisterScreen}/>
                </Stack.Group>

            )}

            
        </Stack.Navigator>
    )
}

export default StackNavigator