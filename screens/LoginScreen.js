import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const image = { uri: "https://tinder.com/static/tinder.png" }

const LoginScreen = () => {


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
                <TouchableOpacity style={styles.touchButton}>
                    <Text style={styles.text}>Sign in & get swiping</Text>
                </TouchableOpacity>
            </ImageBackground>

        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
    },
    touchButton: {
        position: "absolute",
        width: 52,
        bottom: 40,
        backgroundColor: "white",
        padding: 4,
        marginHorizontal: "25%",
        borderRadius: "25px",
    },
    text: {
      color: "#FF5864",
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });