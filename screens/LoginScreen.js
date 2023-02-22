import { View, Text } from 'react-native';
import useAuth from '../hooks/useAuth';
import React from 'react'

const LoginScreen = () => {
    const { user } = useAuth();

    console.log("user: ", user);
    return (
        <View>
        <Text>Let's get you logged in</Text>
        </View>
    )
}

export default LoginScreen