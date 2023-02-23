import { StyleSheet, View, Text, Button, Image, SafeAreaView, TouchableOpacity } from 'react-native';
// import { Image } from "react-native-svg";
import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from 'react';
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView style={styles.homeScreenWrapper}>
      {/* Header */}
      <View style={styles.headerViewWrapper}>

        <TouchableOpacity style={styles.profileImageButton}>
          <Image source={require("../assets/sophiaProfile.png")} style={styles.profileImage}/>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image 
            source={require("../assets/logo.png")}
            style={styles.logoImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.chatIconTouch}>
          <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
        </TouchableOpacity>
      </View>
      {/* End of Header */}
      {/* <Text>I am the Homescreen</Text> */}
      {/* <Button
        title="Go to Chat"
        onPress={() => navigation.navigate("Chat")}
      /> */}
      {/* <Button title="Logout"/> */}

    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenWrapper: {
    flex: 1,
    position: "relative",
  },
  headerViewWrapper: {
    alignItems: "center", 
    position: "relative",
  },
  profileImageButton: {
    left: 5,
    top: 3,
    position: "absolute",
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 25,
  },
  logoImage: {
    width: 48,
    height: 48,
  },
  chatIconTouch: {
    position: "absolute",
    right: 5,
    top: 3
  }
});