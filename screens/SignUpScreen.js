import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  Pressable,
  Text,
  SafeAreaView,
  Dimensions, 
  Image
} from "react-native";
import { supabase } from "../supabase";
import { Button, Input } from "react-native-elements";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useAppointments } from "../AppointmentContext";

const windowWidth = Dimensions.get("window").width;
const backArrow = require("../assets/backarrow.png");

export default function SignUpScreen() {
  const { setFirstName } = useAppointments();
  const [lastName, setlastName] = useState("");
  const [firstName, setFirstNameLocal] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    setFirstName(firstName);
    navigation.navigate("CameraInsurance")
  }
  

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.blueBox}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={backArrow} style={styles.backArrow} />
        </Pressable>
      </View>
      <View style={styles.container}>
        <Text style={styles.titletext}>Sign Up</Text>
        <View style={styles.verticallySpaced}>
          <Input
            label="First Name"
            onChangeText={(text) => setFirstNameLocal(text)}
            value={firstName}
            placeholder="First Name"
            autoCapitalize={"none"}
            labelStyle={{ color: "#15273F" }}
          />
          <Input
            label="Last Name"
            onChangeText={(text) => setlastName(text)}
            value={lastName}
            placeholder="Name"
            autoCapitalize={"none"}
            labelStyle={{ color: "#15273F" }}
          />
          <Input
            label="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="email@address.com"
            autoCapitalize={"none"}
            labelStyle={{ color: "#15273F" }}
          />
          <Input
            label="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize={"none"}
            labelStyle={{ color: "#15273F" }}
          />
        </View>
        <View style={[styles.signupbox, styles.mt20]}>
          <Pressable style={styles.button} onPress={() => handlePress(firstName)} disabled={loading}>
            <Text style={styles.buttontext}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titletext: {
    fontSize: 40,
    fontFamily: "AvenirNext-DemiBold",
    color: "#15273F",
    marginBottom: 20,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
    padding: "10%",
  },
  mt20: {
    marginTop: 20,
  },
  signupbox: {
    paddingTop: 4,
    paddingBottom: 4,
    padding: "10%",
  },
  button: {
    color: "#15273F",
    marginBottom: 20,
    padding: 10,
    width: 150,
    borderWidth: 2,
    borderColor: "#15273F",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    fontSize: 25,
    color: "#15273F",
    fontFamily: "AvenirNext-DemiBold",
    padding: 0,
    margin: 0,
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
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
