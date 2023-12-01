import {
  Text,
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  Dimensions,
  Pressable,
  ScrollView,
  Header,
  TextInput,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, StackActions } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const backArrow = require("../assets/backarrow.png");

export default function Search() {
  const [text, onChangeText] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#8CB9EF" />
      <View style={styles.blueBox}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={backArrow} style={styles.backArrow} />
        </Pressable>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.greeting}>CheckUp</Text>
          <Text style={styles.greetingText}>Status: Scheduling an Appointment</Text>
        </View>
      </View>
      <View style={{ flex: 0.2 }} />

      <View style={{ flex: 0.1, marginBottom: 20 }}>
        <Text style={styles.midText}>
          Tell CheckUp what you are looking for.
        </Text>
      </View>

      <View style={styles.characterBox}>
        <Image
          source={require("../assets/penguin.png")}
          style={styles.character}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder={""}
        onChangeText={onChangeText}
        value={text}
      />

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Pressable
          style={styles.select}
          onPress={() => navigation.navigate("Loading")}
        >
          <Text>Go</Text>
        </Pressable>
      </View>
      <View style={{ flex: 0.2 }} />

      <View style={styles.footer}>
        <Pressable style={styles.homeButton}>
          <Image
            source={require("../assets/homebutton.png")}
            style={styles.home}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  image: {
    width: "95%",
    height: "95%",
    resizeMode: "contain",
  },
  home: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
    top: -15,
  },
  container: {
    flex: 1,
    height: "115%",
    position: "absolute",
    backgroundColor: "white",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center",
  },
  backgroundContainer: {
    width: 400,
    height: 300,
  },
  blueBox: {
    width: windowWidth,
    height: 130,
    backgroundColor: "#8CB9EF",
    justifyContent: "center",
    alignItems: 'center',
  },
  greeting: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: "AvenirNext-DemiBold",

  },
  greetingText: {
    fontSize: 16,
    color: '#fff',
    fontFamily: "AvenirNext-Regular",
    marginBottom: 0, // Space below the status text
  },

  nameText: {
    color: "white",
    fontSize: 32,
    fontFamily: "Inter",
    fontWeight: "700",
    textAlign: "center",
  },
  midText: {
    color: "black",
    fontSize: 20,
    fontFamily: "AvenirNext-DemiBold",
    fontWeight: "600",
    textAlign: "center",
  },
  nextText: {
    color: "black",
    fontSize: 14,
    fontFamily: "AvenirNext-DemiBold",
    fontWeight: "400",
    textAlign: "center",
  },

  sub: {
    color: "white",
    fontSize: 18,
    fontFamily: "AvenirNext-DemiBold",
    fontWeight: "500",
    textAlign: "center",
  },

  pinkBoxWrapper: {
    width: windowWidth,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 2,
  },

  pinkBox: {
    width: 110,
    height: 80,
    backgroundColor: "pink",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  dateText: {
    fontFamily: "AvenirNext-DemiBold",
    fontWeight: "700",
  },
  time: {
    fontStyle: "italic",
    fontFamily: "AvenirNext-Regular",
  },

  select: {
    width: "25%",
    // height: '%',
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 2,
    padding: 6,
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  homeButton: {
    borderColor: "transparent",
    borderRadius: 5,
    borderWidth: 2,
    padding: 1,
    backgroundColor: "transparent",
    width: 100,
    top: -30,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  footer: {
    backgroundColor: "#8CB9EF",
    width: windowWidth,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 0.3,
  },

  character: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },

  characterBox: {
    flex: 0.2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
  },
  backArrow: {
    width: 24,
    height: 24,
  },
});
