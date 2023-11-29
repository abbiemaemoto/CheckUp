import React, { useState, useEffect } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { supabase } from './supabase';

// const Stack = createStackNavigator();

export default () => {

  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      {session ? (
        <>
          <HomeScreen/>
        </>
      ) : (
        <>
          <LoginScreen />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  });
