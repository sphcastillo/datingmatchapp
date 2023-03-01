import { View, Text, StyleSheet, SafeAreaView, Pressable ,Image, TextInput } from 'react-native'
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
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.explaination}>To reset your password, we first need your email address.</Text>
            <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        value={email}
                        setValue={setEmail}
                        placeholder="Enter your email address"
                    />
                </View>
                <Pressable style={styles.submitButtonContainer}>
                    <Text style={styles.submitButton}>Send</Text>
                </Pressable>
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 20,
        textAlign: 'center'
    },
    explaination: {
        fontSize: 14,
        paddingTop: 13,
        textAlign: 'center'
    },
    inputWrapper: {
        alignItems: 'center',
        paddingTop: 10
    },
    inputContainer: {
        borderColor:"#e8e8e8",
        borderWidth: 4,
        borderRadius: 5,
        width: 260,
        padding: 10,
        marginVertical: 10,
        paddingHorizontal: 10
    },
    submitButtonContainer: {
        marginTop: 10
    },
    submitButton: {
        backgroundColor: "#FF5864",
        color: "white",
        alignItems: 'center',
        paddingLeft: 23,
        paddingRight: 23,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 16
    }
})