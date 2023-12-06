import React, { useState, useEffect } from 'react';
import { AppointmentsProvider } from './AppointmentContext';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AuthenticationStack from './screens/AuthenticationScreen';
import { supabase } from './supabase';
import { NavigationContainer, useNavigation } from "@react-navigation/native";


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
    <AppointmentsProvider>
      <NavigationContainer>
        <AuthenticationStack />
      </NavigationContainer>
      {/* <CameraInsurance /> */}
      {/* <HomeScreen /> */}
    </AppointmentsProvider>
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
