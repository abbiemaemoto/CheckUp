import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Image,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import paper from "../assets/paper.jpeg";
import apple from "../assets/apple.png";
import outlook from "../assets/outlook.png";
import gcal from "../assets/gcal.png";

export default function SyncCalendar() {
  const backArrow = require("../assets/backarrow.png");
  const navigation = useNavigation();
  const [outlookSuccess, setOutlookSuccess] = useState(false);
  const [appleSuccess, setAppleSuccess] = useState(false);
  const [gcalSuccess, setGcalSuccess] = useState(false);

  const handleSyncPress = (syncType) => {
    // Logic to handle sync button press and set success state
    switch (syncType) {
      case "outlook":
        setOutlookSuccess(true);
        break;
      case "apple":
        setAppleSuccess(true);
        break;
      case "gcal":
        setGcalSuccess(true);
        break;
      // Add other cases for different sync types if needed
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={backArrow} style={styles.backArrow} />
        </Pressable>
        <Text style={styles.headerText}>Calendar</Text>
        <Text style={styles.bodyText}>Sync your calendar.</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.box}>
          <Image source={outlook} style={styles.image} />
          <Pressable
            style={[styles.button, outlookSuccess && styles.successButton]}
            onPress={() => handleSyncPress("outlook")}
          >
            <Text
              style={[styles.buttonText, outlookSuccess && styles.successText]}
            >
              {outlookSuccess ? "Success!" : "Sync Outlook"}
            </Text>
          </Pressable>
        </View>
        <View style={styles.box}>
          <Image source={apple} style={styles.image} />
          <Pressable
            style={[styles.button, appleSuccess && styles.successButton]}
            onPress={() => handleSyncPress("apple")}
          >
            <Text
              style={[styles.buttonText, appleSuccess && styles.successText]}
            >
              {appleSuccess ? "Success!" : "Sync Apple Cal"}
            </Text>
          </Pressable>
        </View>
        <View style={styles.box}>
          <Image source={gcal} style={styles.image} />
          <Pressable
            style={[styles.button, gcalSuccess && styles.successButton]}
            onPress={() => handleSyncPress("gcal")}
          >
            <Text
              style={[styles.buttonText, gcalSuccess && styles.successText]}
            >
              {gcalSuccess ? "Success!" : "Sync GCal"}
            </Text>
          </Pressable>
        </View>
        <View style={styles.box}>
          <Image source={paper} style={styles.image} />
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("CameraCalendar")}
          >
            <Text style={styles.buttonText}>Scan Paper Cal</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.footer}>
        {outlookSuccess || appleSuccess || gcalSuccess ? (
          <Pressable style={styles.button} onPress={() => navigation.navigate("Preferences")}>
            <Text style={styles.buttonText}>Next</Text>
          </Pressable>
        ) : (
          <Pressable style={styles.button} onPress={() => navigation.navigate("Preferences")}>
            <Text style={styles.buttonText}>Skip</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
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
  header: {
    flex: 0.75,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  body: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 0.75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  headerText: {
    fontFamily: "AvenirNext-DemiBold",
    fontSize: 50,
    marginTop: 20,
  },
  bodyText: {
    fontFamily: "AvenirNext-Regular",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0000",
    borderRadius: 10,
    padding: 10,
    width: 150,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000000",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontFamily: "AvenirNext-DemiBold",
  },
  successButton: {
    backgroundColor: "#23ab51",
    borderColor: "green",
  },
  successText: {
    fontFamily: "AvenirNext-Regular",
    color: "white",
    fontSize: 16,
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: "contain",
  },
  box: {
    flex: 0.25,
    width: "75%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
