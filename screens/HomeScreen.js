import { StyleSheet, View, Text, Button, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect, useRef } from 'react';
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";


const SUITORS_DATA = [
  {
    id: 1,
    firstName: "Jason",
    lastName: "Mamoa",
    occupation: "Aquaman",
    age: 43,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Jason_Momoa_%2843055621224%29_%28cropped%29.jpg/800px-Jason_Momoa_%2843055621224%29_%28cropped%29.jpg"
  },
  {
    id: 2,
    firstName: "Prince",
    lastName: "Eric",
    occupation: "Monarch",
    age: 18,
    image:
      "https://static.wikia.nocookie.net/disney/images/f/f1/Profile_-_Prince_Eric.jpeg/revision/latest?cb=20190312045000",
  },
  {
    id: 3,
    firstName: "Robin",
    lastName: "Hood",
    occupation: "Outlaw",
    age: 32,
    image:"https://static.nationalgeographic.co.uk/files/styles/image_3200/public/14-robin-hood.jpg?w=710&h=1748"
  },
  {
    id: 4,
    firstName: "Michael",
    lastName: "Wood",
    occupation: "Senior Product Director",
    age: 38,
    image:
      "https://media.licdn.com/dms/image/C5603AQGxa0lKBmvzFA/profile-displayphoto-shrink_800_800/0/1608698871268?e=1682553600&v=beta&t=wf2jG9xhg57H9C-dsb73Q71jiQwTOTfjlCP2xmHrfQE",

  },

];

const HomeScreen = () => {

  const navigation = useNavigation();
  const swiperRef = useRef(null);

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

        <TouchableOpacity
          onPress={() => navigation.navigate("Modal")}
        >
          <Image 
            source={require("../assets/logo.png")}
            style={styles.logoImage}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.chatIconTouch}
          onPress={() => navigation.navigate("Chat")}
        >
          <Ionicons name="chatbubbles-sharp" size={30} color="#FF5864" />
        </TouchableOpacity>
      </View>
      {/* End of Header */}

      {/* Cards */}
      <View style={styles.swiperViewWrapper}>
        <Swiper 
          ref={swiperRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={SUITORS_DATA}
          stackSize={4}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          onSwipedLeft={() =>{
            console.log("Swiped PASS")
          }}
          onSwipedRight={() => {
            console.log("Swiped MATCH")
          }}
          backgroundColor={"4FD0E("}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  color: "red",
                  textAlign: "right",
                }
              }
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "#4DED30"
                }
              }
            }
          }}
          renderCard={(card)  => (
            <View key={card.id} style={styles.cardWrapper}>
              <Image 
                source={{ uri: card.image }}

                style={styles.cardImage}
              />
              <View style={styles.matchCardContent}> 
                <View>
                  <Text style={styles.matchFullName}>
                    {card.firstName} {card.lastName}
                  </Text>
                  <Text>{card.occupation}</Text>
                </View>
                <Text style={styles.matchAge}>{card.age}</Text>
              </View>
            </View>
          )}
        />
      </View>

      <View style={styles.bottomWrapper}>

        <TouchableOpacity 
          style={styles.touchNoButton}
          onPress={() => swiperRef.current.swipeLeft()}
        >
          <Entypo name="cross" size={20} color="red" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.touchYesButton}
          onPress={() => swiperRef.current.swipeRight()}
        >
          <AntDesign name="heart" size={16} color="green" />
        </TouchableOpacity>
      </View>

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
    width: 42,
    height: 42,
  },
  chatIconTouch: {
    position: "absolute",
    right: 5,
    top: 3
  },
  swiperViewWrapper: {
    flex: 1,
    marginTop: -30,
  },
  cardWrapper: {
    height: 600,
    backgroundColor: "#FF5864",
    borderRadius: "25px",
  },
  cardImage: {
    borderRadius: "25px",
    width: "100%",
    height: "100%",
    top: 0,
    position: "absolute",

  },
  matchCardContent: {
    backgroundColor: "white",
    width: "100%",
    height: 75,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "items-center",
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 10,
    paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2
  },
  matchFullName:  {
    fontSize: 18,
    fontWeight: "bold",
  },
  matchAge: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomWrapper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  touchNoButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: "#FF7F7F",
  },
  touchYesButton: {
    width: 42,
    height: 42,
    alignItems: "center", 
    backgroundColor: "#99FF99",
    borderRadius: 25,
    justifyContent: "center",
  }
});