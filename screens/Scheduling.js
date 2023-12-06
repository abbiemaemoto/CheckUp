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
  FlatList,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, StackActions } from "@react-navigation/native";
import { useAppointments } from "../AppointmentContext.js"

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const backArrow = require('../assets/backarrow.png');


const data = [
  { date: "Nov 6, 2023", time: "2:30-4:30 pm" },
  { date: "Nov 10, 2023", time: "10:00-11:00 am" },
  { date: "Nov 15, 2023", time: "9:00-10:00am" },
];

export default function Scheduling() {
  const navigation = useNavigation();
  const handlePress = (date, time) => {
    navigation.navigate('Recommendations', { date, time });
  };
  const { firstName } = useAppointments();


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
          <Text style={styles.greetingText}>{firstName}'s Calendar</Text>
        </View>
      </View>
      <View style={{ flex: 4, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../assets/calendar.png")}
          style={styles.image}
        />
      </View>
      <View
        style={{
          flex: 0.7,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.midText}>Suggested Appointment Times</Text>
        <Text style={styles.nextText}>
          Based on mutual availability with physician
        </Text>
      </View>
      <View style={styles.pinkBoxWrapper}>
        {data.map((item, index) => (
          <View style={styles.pinkBox} key={index}>
            <Text style={styles.dateText}>{item.date}</Text>
            <Text style={styles.time}>{item.time}</Text>
            <Pressable style={styles.select} onPress={() => handlePress(item.date, item.time)}>
              <Text>select</Text>
            </Pressable>
          </View>
        ))}
      </View>
      <View style={{ flex: 0.5 }} />
      <View style={styles.footer}>
        <Pressable
          style={styles.homeButton}
          onPress={() => navigation.dispatch(StackActions.popToTop())}
        >
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
    width: "80%",
    height: "75%",
    resizeMode: "contain",
    top: -10,
  },
  container: {
    flex: 1,
    height: "110%",
    position: "absolute",
    backgroundColor: "white",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  backgroundContainer: {
    width: 400,
    height: 300,
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
  blueBox: {
    width: windowWidth,
    height: 125,
    backgroundColor: "#8CB9EF",
    justifyContent: "center",
    alignItems: "center",
  },
  greeting: {
    top: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  greetingText: {
    color: "white",
    fontSize: 28,
    fontFamily: "AvenirNext-DemiBold",
    fontWeight: "700",
    textAlign: "center",
  },
  nameText: {
    color: "white",
    fontSize: 32,
    fontFamily: "AvenirNext-DemiBold",
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

  pinkBoxWrapper: {
    width: windowWidth,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },

  pinkBox: {
    width: 120,
    height: 80,
    backgroundColor: "#FCE4EC",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
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
    borderColor: "black",
    borderRadius: 5,
    borderWidth: 2,
    padding: 2,
    backgroundColor: "white",
  },

  homeButton: {
    borderColor: "transparent",
    borderRadius: 5,
    borderWidth: 2,
    padding: 1,
    backgroundColor: "transparent",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    top: -30,
  },

  footer: {
    backgroundColor: "#8CB9EF",
    width: windowWidth,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 1.5,
  },
});
