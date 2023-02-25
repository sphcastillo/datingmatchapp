import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'

const ModalScreen = () => {
    // const { user } = useAuth();

    const [image, setImage] = useState(null);
    const [occupation, setOccupation] = useState(null);
    const [age, setAge] = useState(null);

    const incompleteForm = !image || !occupation || !age;

    const navigation= useNavigation();

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //       headerShown: false,
    //     })
    //   }, [])

    return (
            <View style={styles.modalWrapper}>
                <Image 
                    resizeMode="contain"
                    style={{ width: "100%", height: 50 }}
                    source={{ uri: 'https://links.papareact.com/2pf'}}
                />
                <Text style={styles.displayGreeting}>Welcome</Text>

                <Text style={styles.steps}>Step 1: Profile Picture</Text>
                <TextInput 
                    value={image}
                    onChangeText={text => setImage(text)}
                    style={styles.input}
                    placeholder="Enter a Profile Image URL"
                />

                <Text style={styles.steps}>Step 2: Occupation</Text>
                <TextInput 
                    value={occupation}
                    onChangeText={text => setOccupation(text)}
                    style={styles.input}
                    placeholder="Enter your occupation"
                />

                <Text style={styles.steps}>Step 3: Age</Text>
                <TextInput 
                    value={age}
                    onChangeText={text => setAge(text)}
                    style={styles.input}
                    placeholder="Enter your age"
                />

                <TouchableOpacity style={styles.updateProfileWrapper}>
                    <Text style={styles.updateProfileButton}>Update Profile</Text>
                </TouchableOpacity>
            </View>
    )
}

export default ModalScreen;

const styles = StyleSheet.create({
    modalWrapper: {
        flex: 1,
        alignItems: "center",
        paddingTop: 10
    },
    displayGreeting: {
        color: "gray",
        fontSize: 19,
        fontWeight: "bold",
        padding: 10,
        paddingBottom: 20
    },
    steps: {
        textAlign: "center",
        color: "#FF7F7F",
        padding: 20,
        fontWeight: "bold",
        fontSize: 16
    },
    input: {
        textAlign: "center",
        fontSize: 20,
        paddingBottom: 20,
        color: "#FF7F7F",
    },
    updateProfileWrapper: {
        width: 210,
        borderRadius: "8px",
        padding: 10,
        position: "absolute",
        bottom: 40,
        backgroundColor: "#FF7F7F",

    },
    updateProfileButton:  {
        color: "white",
        textAlign: "center",
        fontSize: 17
    }
})