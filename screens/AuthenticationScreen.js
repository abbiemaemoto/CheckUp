import React, { useState } from "react";
import { Alert, StyleSheet, View, Text, Image, SafeAreaView, Pressable } from "react-native";
import { Button, Input } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';


export default function AuthenticationScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.titletext}>Welcome to...</Text>
        <Image 
          source={require('../assets/checkup-label.png')}
          style={styles.image}
        />
        <Text style={styles.titletext}>Care On Your Calendar</Text>
      </View> 
      <View style={styles.container}>
        <Pressable style={styles.button}>
          <Text style={styles.buttontext}>Log In</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttontext}>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

function AuthenticationStack() {
  return (
    <StackNavigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
    </StackNavigator>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    marginTop: 40,
    padding: 12,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  title: {
    paddingTop: 20, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titletext: {
    fontSize: 24,
    fontStyle: 'italic',
    fontFamily: 'Arial',
    color: '#15273F',
  },
  button: {
    color: '#15273F',
    marginBottom: 20,
    padding: 10,
    width: 150,
    borderWidth: 2,
    borderColor: '#15273F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext: {
    fontSize: 25,
    color:'#15273F',
    fontFamily: 'AvenirNext-DemiBold',
    padding: 0,
    margin: 0,
  },
  mt20: {
    marginTop: 20,
  },
});