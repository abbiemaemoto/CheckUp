import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Login from "../screens/LoginScreen";
import SignUp from "../screens/SignUpScreen";

const AuthenticationScreen = ({navigation})=> {
  const onPress = (screen) => {
    navigation.navigate(screen);
  };

  return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.titletext}>Welcome to...</Text>
          <Image
            source={require("../assets/checkup-label.png")}
            style={styles.image}
          />
          <Text style={styles.titletext}>Care On Your Calendar</Text>
        </View>
        <View style={styles.container}>
          <Pressable style={styles.button} onPress={() => onPress("Login")}>
            <Text style={styles.buttontext}>Log In</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => onPress("SignUp")}>
            <Text style={styles.buttontext}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
  );
}

const Stack = createStackNavigator();

export default function AuthenticationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Authentication" component={AuthenticationScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerBackTitle: 'Back', headerTintColor: '#15273F', headerTitle:'', headerStyle: {
            backgroundColor: '#ffffff',
          },}} />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerBackTitle: 'Back', headerTintColor: '#15273F', headerTitle:'', headerStyle: {
            backgroundColor: '#ffffff',
          },}} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    marginTop: 40,
    padding: 12,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  title: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titletext: {
    fontSize: 24,
    fontStyle: "italic",
    fontFamily: "Arial",
    color: "#15273F",
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
  mt20: {
    marginTop: 20,
  },
});
