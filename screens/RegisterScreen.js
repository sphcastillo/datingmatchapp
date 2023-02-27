import { 
    View, 
    Text, 
    SafeAreaView, 
    Image, 
    StyleSheet, 
    TextInput,
    Pressable, 
} from 'react-native'
import React, { useState } from 'react'

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
            <Text>Register</Text>
            <View style={styles.inputContainer}>
                <View>
                    <TextInput 
                        value={email}
                        setValue={setEmail}
                        style={styles.input}
                        placeholder="Enter your first name"
                    />
                </View>
                <View>
                    <TextInput 
                        value={email}
                        setValue={setEmail}
                        style={styles.input}
                        placeholder="Enter your last name"
                    />
                </View>
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
        </SafeAreaView>
    )
}

export default RegisterScreen;

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