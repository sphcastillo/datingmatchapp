import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    const user = true;
    console.log("user: ", user)

    return (
        <Stack.Navigator
            defaultScreenOptions={{
                headerShown: false
            }}
        >
            {user ? (
                <>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Chat" component={ChatScreen}/>
                </>

            ) : (
                <Stack.Screen 
                    name="Login" 
                    component={LoginScreen}
                    // options={{ headerShown: false}}
                />
            )}

            
        </Stack.Navigator>
    )
}

export default StackNavigator