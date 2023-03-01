import { View, Text, Image, StyleSheet, TextInput, Pressable, SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

  return (
    <SafeAreaView>
        <View style={styles.root}>
            <Image 
            style={styles.logo}
            resizeMode="contain"
            source={require("../assets/logo.png")}
            />
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputContainer}>
                <View style={styles.emailInputContainer}>
                    <TextInput 
                        value={email}
                        setValue={setEmail}
                        style={styles.input}
                        placeholder="Enter your email address"
                    />
                </View>
                <View style={styles.passwordInputContainer}>
                    <TextInput 
                        value={password}
                        setValue={setPassword}
                        style={styles.input}
                        placeholder="Enter your password"
                        secureTextEntry
                    />
                </View>
            </View>
            <Pressable style={styles.loginButtonContainer}>
                <Text style={styles.loginButton}>Sign-in</Text>
            </Pressable>
            <Pressable 
                style={styles.forgotButtonContainer}
                onPress={() => navigation.navigate("ForgotPassword")}
            >
                <Text style={styles.forgotButton}>Forgot Password</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default SignInScreen

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
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        paddingTop: 15,
        textAlign: 'center'
    },
    inputContainer: {
        paddingTop: 25,
    },
    emailInputContainer: {
        borderColor:"#e8e8e8",
        borderWidth: 4,
        borderRadius: 5,
        width: 260,
        padding: 10,
        marginVertical: 5,
        paddingHorizontal: 10
    },
    passwordInputContainer: {
        borderColor:"#e8e8e8",
        borderWidth: 4,
        borderRadius: 5,
        width: 260,
        padding: 10,
        marginVertical: 5,
        paddingHorizontal: 10,
        marginTop: 12,
        fontSize: 17
    },
    loginButtonContainer: {
        backgroundColor: "#FF5864",
        marginTop: 15,
        // width: "100%",
        width: 100,
        padding: 12,
        marginVertical: 5,
        alignItems: "center",
        borderRadius: 5
    },
    loginButton: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16
    },
    forgotButtonContainer: {
        marginTop: 15,
    },
    forgotButton : {
        fontWeight: "bold",
        fontSize: 16
    }
})