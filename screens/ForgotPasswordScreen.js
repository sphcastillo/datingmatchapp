import { View, Text, StyleSheet, SafeAreaView, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');
    return (
        <SafeAreaView>
            <View style={styles.root}>
                <Image 
                    style={styles.logo}
                    resizeMode="contain"
                    source={require("../assets/logo.png")}
                    />
            </View>
            <Text>Reset Password</Text>
            <Text>To reset your password, we first need your email address.</Text>
            <View>
                <TextInput 
                    value={email}
                    setValue={setEmail}
                    placeholder="Enter your email address"
                />
            </View>
        </SafeAreaView>
    )
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        paddingTop: 150
    },
    logo: {
        maxWidth: 300,
        height: 100,
        width: "60%"
    },
})