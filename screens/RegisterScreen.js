import { 
    View, 
    Text, 
    SafeAreaView, 
    Image, 
    StyleSheet, 
    TextInput,
    Pressable, 
} from 'react-native'
import React, { useState } from 'react';


const RegisterScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <SafeAreaView>
            <View style={styles.root}>
                <Image 
                style={styles.logo}
                resizeMode="contain"
                source={require("../assets/logo.png")}
                />
            </View>
            <Text style={styles.title}>Register</Text>

            <View style={styles.inputWrapper}>
                <View style={styles.inputContainer}>
                    <TextInput 
                        value={firstName}
                        onChangeText={text => setFirstName(text)}
                        style={styles.input}
                        placeholder="Enter your first name"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        value={lastName}
                        onChangeText={text => setLastName(text)}
                        style={styles.input}
                        placeholder="Enter your last name"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                        placeholder="Enter your email address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        placeholder="Enter your password"
                        secureTextEntry
                    />
                </View>
            </View>
            <Pressable 
                style={styles.buttonContainer}
            >
                <Text style={styles.signinButton}>Sign-in</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        paddingTop: 110
    },
    logo: {
        // maxWidth: 280,
        // height: 100,
        // width: "50%"
        maxWidth: 250,
        height: 100,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 20,
        textAlign: 'center'
    },
    inputWrapper: {
        alignItems: 'center',
        paddingTop: 20
    },
    inputContainer: {
        borderColor:"#e8e8e8",
        borderWidth: 4,
        borderRadius: 5,
        width: 260,
        padding: 10,
        marginVertical: 4,
        paddingHorizontal: 10
    },
    buttonContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    signinButton: {
        backgroundColor: "#FF5864",
        color: "white",
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 15,

    }
})