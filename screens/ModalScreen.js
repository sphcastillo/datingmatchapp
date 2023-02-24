import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

const ModalScreen = () => {
    const navigation= useNavigation();

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //       headerShown: false,
    //     })
    //   }, [])

    return (
        <View style={styles.modalWrapper}>
        <Text>This is the Modal Screen</Text>
        </View>
    )
}

export default ModalScreen;

const styles = StyleSheet.create({
    modalWrapper: {
        flex: 1,
        alignItems: "center",
        paddingTop: 10
    }
})