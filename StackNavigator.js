import { View, Text } from 'react-native'
import React, { useState } from 'react'
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import LoginScreen from './screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModalScreen from './screens/ModalScreen';
import LoadingScreen from "./screens/LoadingScreen"

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    const user = true;
    console.log("user: ", user)
    const [loading, setLoading] = useState(true);

    // if(state.isLoading){
    //     return <LoadingScreen />
    // }

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