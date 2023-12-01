import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  Pressable,
  Text,
  SafeAreaView,
} from "react-native";
import { supabase } from "../supabase";
import { Button, Input } from "react-native-elements";

export default function SignUpScreen() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);
  
    // Sign up the user
    const { data: { session }, error: signUpError } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
  
    // Handle sign-up error
    if (signUpError) {
      Alert.alert("SIGN UP ALERT: " + signUpError.message);
      setLoading(false);
      return;
    }
  
    // Insert user profile
    const { data, error: profileError } = await supabase
      .from("profiles_test")
      .upsert(
        [
          {
            user_id: user.id,
            first_name: firstName,
            last_name: lastName,
          },
        ],
        { onConflict: ['user_id'] }
      );
  
    // Handle profile insert error
    if (profileError) {
      Alert.alert(profileError.message);
    }

    Alert.alert("Check Your Email for Verification!")
  
    setLoading(false);
  }
  

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titletext}>Sign Up</Text>
        <View style={styles.verticallySpaced}>
          <Input
            label="Name"
            onChangeText={(text) => setfirstName(text)}
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
          <Pressable style={styles.button} onPress={() => signUpWithEmail()} disabled={loading}>
            <Text style={styles.buttontext}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
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
});
