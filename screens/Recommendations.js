import {
  Text,
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  Dimensions,
  Pressable,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, StackActions } from "@react-navigation/native";
import {useAppointments} from "../AppointmentContext.js"

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const backArrow = require("../assets/backarrow.png");

export default function Recommendations({ route }) {
  const navigation = useNavigation();
  const { date, time } = route.params;
  const { firstName } = useAppointments();

  const handlePress = (date, time, doctor, image) => {
    navigation.navigate('PreConfirm', { date, time, doctor, image });
  };
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
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>{firstName}'s</Text>
          <Text style={styles.greetingText}>Appointment</Text>
        </View>
      </View>

      <View style={styles.notification}>
        <Text style={styles.dateText}>{date}</Text>
        <Text style={styles.time}>{time}</Text>
        <View style={styles.decor} />
        <Text style={styles.description}>
          You do not currently have a primary dentist.
        </Text>
      </View>

      <View style={{ flex: 0.2, marginBottom: -10 }}>
        <Text style={styles.nextText}>
          Select a dentist for your upcoming appointment.
        </Text>
        <Text style={styles.midText}>Recommended for You:</Text>
      </View>

      <View style={styles.tinyBoxWrapper}>
        <View style={styles.tinyBox}>
          <Text style={styles.boldText}>Closest</Text>
        </View>
        <View style={styles.tinyBox}>
          <Text style={styles.boldText}>Top Pick</Text>
        </View>
        <View style={styles.tinyBox}>
          <Text style={styles.boldText}>Top Rated</Text>
        </View>
      </View>

      <View style={styles.pinkBoxWrapper}>
        <View style={styles.pinkBox}>
          <Text style={styles.boldText}>Dr. Adams</Text>
          <Image source={require("../assets/doctor2.png")} style={styles.doc} />
          <Text style={styles.titles}>Location: </Text>
          <Text style={styles.smallerTime}>Menlo Park</Text>
          <Text style={styles.titles}>Specialty: </Text>
          <Text style={styles.smallerTime}>Dentistry</Text>
          <Text style={styles.titles}>In-Network?: </Text>
          <Text style={styles.smallerTime}>Yes</Text>
          <Text style={styles.titles}>Practice: 5 yrs.</Text>
          <Text style={styles.titles}>Review:</Text>
          <Image
            source={require("../assets/3stars.png")}
            style={styles.reviews}
          />
          <Pressable style={styles.select} onPress={() => handlePress(date, time, "Dr. Adams", "doctor2")}>
            <Text>select</Text>
          </Pressable>
        </View>
        <View style={styles.pinkBox}>
          <Text style={styles.boldText}>Dr. Barnes</Text>
          <Image source={require("../assets/doctor1.png")} style={styles.doc} />
          <Text style={styles.titles}>Location: </Text>
          <Text style={styles.smallerTime}>San Jose</Text>
          <Text style={styles.titles}>Specialty: </Text>
          <Text style={styles.smallerTime}>Dentistry</Text>
          <Text style={styles.titles}>In-Network?: </Text>
          <Text style={styles.smallerTime}>Yes</Text>
          <Text style={styles.titles}>Practice: 10 yrs.</Text>
          <Text style={styles.titles}>Review:</Text>
          <Image
            source={require("../assets/5stars.png")}
            style={styles.reviews}
          />
          <Pressable style={styles.select} onPress={() => handlePress(date, time, "Dr. Barnes", "doctor1")}>
            <Text>select</Text>
          </Pressable>
        </View>
        <View style={styles.pinkBox}>
          <Text style={styles.boldText}>Dr. Lee</Text>
          <Image source={require("../assets/doctor3.png")} style={styles.doc} />
          <Text style={styles.titles}>Location: </Text>
          <Text style={styles.smallerTime}>Menlo Park</Text>
          <Text style={styles.titles}>Specialty: </Text>
          <Text style={styles.smallerTime}>Dentistry</Text>
          <Text style={styles.titles}>In-Network?: </Text>
          <Text style={styles.smallerTime}>Yes</Text>
          <Text style={styles.titles}>Practice: 5 yrs.</Text>
          <Text style={styles.titles}>Review:</Text>
          <Image
            source={require("../assets/5stars.png")}
            style={styles.reviews}
          />
          <Pressable style={styles.select} onPress={() => handlePress(date, time, "Dr. Lee", "doctor3")}>
            <Text>select</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable style={styles.homeButton} onPress={() => navigation.dispatch(StackActions.popToTop())}>
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
  image: {
    width: "95%",
    height: "95%",
    resizeMode: "contain",
  },
  home: {
    width: 70,
    height: "80%",
    resizeMode: "contain",
    top: -20,
  },
  doc: {
    width: "80%",
    height: "80%",
    resizeMode: "contain",
    flex: 0.75,
  },
  reviews: {
    width: "90%",
    height: "90%",
    resizeMode: "cover",
    flex: 0.2,
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
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundContainer: {
    width: 400,
    height: 300,
  },
  blueBox: {
    width: windowWidth,
    height: 125,
    backgroundColor: "#8CB9EF",
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: {
    top: 22,
    alignItems: "center",
    justifyContent: "center",
  },

  greetingText: {
    color: "white",
    fontSize: 24,
    fontFamily: "AvenirNext-DemiBold",
    fontWeight: "700",
    textAlign: "center",
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
    fontWeight: 600,
    textAlign: "center",
  },
  nextText: {
    color: "black",
    fontSize: 14,
    fontFamily: "AvenirNext-DemiBold",
    fontWeight: "400",
    textAlign: "center",
  },

  pinkBoxWrapper: {
    width: windowWidth,
    height: "5%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    flex: 1.2,
    marginBottom: 10,
  },

  tinyBoxWrapper: {
    width: windowWidth,
    height: "5%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor: 'purple',
  },

  pinkBox: {
    width: 120,
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  tinyBox: {
    width: 110,
    height: "60%",
    backgroundColor: "transparent",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  notification: {
    width: "85%",
    height: "13%",
    backgroundColor: "transparent",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    padding: 5,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  dateText: {
    fontFamily: "AvenirNext-DemiBold",
    fontWeight: "600",
    fontSize: 24,
    padding: 2,
  },

  boldText: {
    fontFamily: "AvenirNext-DemiBold",
    fontWeight: "600",
    fontSize: 16,
    padding: 2,
  },

  time: {
    fontStyle: "italic",
    fontFamily: "AvenirNext-Regular",
    fontSize: 24,
    fontWeight: 500,
  },

  smallerTime: {
    fontStyle: "italic",
    fontFamily: "AvenirNext-Regular",
    fontSize: 14,
    fontWeight: 500,
  },

  titles: {
    color: "black",
    fontSize: 14,
    fontFamily: "AvenirNext-DemiBold",
    fontWeight: "600",
    textAlign: "center",
  },

  description: {
    fontStyle: "italic",
    fontFamily: "AvenirNext-Regular",
    fontSize: 14,
    fontWeight: 500,
  },
  select: {
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 2,
    padding: 2,
    backgroundColor: "white",
  },

  footer: {
    backgroundColor: "#8CB9EF",
    width: windowWidth,
    height: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 0.6,
  },

  homeButton: {
    backgroundColor: "transparent",
    width: windowWidth,
    justifyContent: "flex-start",
    alignItems: "center",
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
