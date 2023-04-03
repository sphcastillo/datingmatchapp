import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import useAuth from '../hooks/useAuth';

const image = { uri: "https://tinder.com/static/tinder.png" }

const AuthScreen = () => {

    const { user } = useAuth;

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={image} 
                style={styles.image}
                resizeMode="cover"
            >
                <TouchableOpacity 
                    style={styles.touchButton}
                    onPress={() => navigation.navigate("SignIn")}
                >
                    <Text style={styles.text}>Sign in & start SWIPING</Text>
                </TouchableOpacity>
                

                <TouchableOpacity 
                    style={styles.touchRegisterButton}
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text style={styles.registerButton}>Register here</Text>
                </TouchableOpacity>
            </ImageBackground>

        </View>
    )
}

export default AuthScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
    },
    touchButton: {
        position: "absolute",
        width: 212,
        bottom: 150,
        backgroundColor: "white",
        padding: 8,
        marginHorizontal: "25%",
        borderRadius: "25px",
    },
    text: {
      color: "#FF5864",
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    touchRegisterButton: {
        position: "absolute",
        width: 212,
        bottom: 70,
        padding: 10,
        marginHorizontal: "25%",
        borderRadius: "25px",
        borderColor: "white",
        borderWidth: 3
    },
    registerButton: {
        color: "white",
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        // fontStyle: "italic"
    }
  });