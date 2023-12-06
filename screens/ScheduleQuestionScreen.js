import React, { useState } from "react";
import { useNavigation, StackActions } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

// Replace with the correct path to your penguin image asset
const penguinImage = require("../assets/penguin.png");
const backArrow = require("../assets/backarrow.png");

export default function Selection() {
  // State to manage button selection, etc.
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation();

  return (
    <View
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={backArrow} style={styles.backArrow} />
        </Pressable>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.headerTitle}>CheckUp</Text>
          <Text style={styles.headerStatus}>
            Status: Scheduling an Appointment...
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={{alignItems: 'center'}}>
          <Image source={penguinImage} style={styles.penguinImage} />
          <Text style={styles.questionTitle}>
            Do you know what kind of{"\n"}care you're seeking?
          </Text>
          <Text style={styles.questionSubtitle}>
            CheckUp can recommend what kind{"\n"}of doctor you should see based on
            a{"\n"}description of your symptoms
          </Text>
        </View>
        {/* <View style={{flex: 0.8}} /> */}
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Search")}
          >
            <Text style={styles.buttonText}>
              <Text style={styles.yesColor}>Yes,</Text> I know what I'm looking
              for
            </Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Chatbot")}
          >
            <Text style={styles.buttonText}>
              <Text style={styles.noColor}>No,</Text> I have more questions
            </Text>
          </Pressable>
        </View>
      </View>
      {/* <View style={{flex: 1}}/> */}
      <View style={styles.footer}>
        <Pressable
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
          <Image
            source={require("../assets/homebutton.png")}
            style={styles.footerIcon}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: "#8CB9EF",
    paddingTop: Platform.OS === "android" ? 25 : 45, // Adjust this value to match the status bar height
    // paddingHorizontal: 0, // This ensures the header spans the entire width
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 12, // Space under the text in the header
  },
  headerTitle: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "AvenirNext-DemiBold",
  },
  headerStatus: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10, // Space below the status text
    fontFamily: "AvenirNext-DemiBold",
  },
  content: {
    flex: 2,
    alignItems: "center",
    padding: 20,
    paddingTop: 30, // Space below the header
  },
  penguinImage: {
    width: 160, // Adjust the size as needed
    height: 160, // Adjust the size as needed
    resizeMode: "contain",
    marginVertical: 20, // Increased space around the image
  },
  questionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "AvenirNext-DemiBold",
    textAlign: "center",
    marginTop: 20, // Space above the title
    marginBottom: 16, // Space below the title

  },
  questionSubtitle: {
    fontSize: 18,
    fontFamily: "AvenirNext-Regular",
    color: "#8CB9EF",
    textAlign: "center",
    marginBottom: 30, // Increased space below the subtitle
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20, // Increased space below the buttons
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
  },
  buttonText: {
    // fontWeight: "bold",
    fontFamily: "AvenirNext-Regular",
    fontSize: 16,
    color: "#000", // Default color for the rest of the text
  },
  yesColor: {
    color: "#8CB9EF", // This will be the color for "Yes"
    fontWeight: 'bold',
  },
  noColor: {
    color: "#FFB6C1", // This will be the color for "No"
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: "#8CB9EF",
    height: '150%',
    justifyContent: "flex-start",
    alignItems: "center",
    bottom: -50,
    flex: 0.45,
  },
  footerIcon: {
    width: 70,
    height: 70,
    top: 10,
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
