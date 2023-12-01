import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AuthenticationScreen from './screens/AuthenticationScreen';
import SchedulingScreen from './screens/Scheduling';
import CameraScreen from './screens/CameraScreen';
import ChatbotScreen from './screens/Chatbot';
import { supabase } from './supabase';


export default function App() {

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
    <HomeScreen />
    // <CameraScreen />
    // <SafeAreaView style={{ flex: 1, position: "relative" }}>
    //   {session ? (
    //     <>
    //       <HomeScreen/>
    //     </>
    //   ) : (
    //     <>
    //       <AuthenticationScreen />
    //     </>
    //   )}
    // </SafeAreaView>
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
