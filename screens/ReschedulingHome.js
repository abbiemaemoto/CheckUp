import {
  Text,
  StyleSheet,
  Image,
  View,
  Dimensions,
  Pressable,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, StackActions } from "@react-navigation/native";
import { useAppointments } from "../AppointmentContext";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const backArrow = require("../assets/backarrow.png");

export default function Rescheduling() {
  const [showButtons, setShowButtons] = useState(true);
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const navigation = useNavigation();
  const { firstName } = useAppointments();


  const handleCancelPress = (date, time, id) => {
    dispatch({ type: 'REMOVE_APPOINTMENT', payload: { id } });
    navigation.navigate("CancelConfirm", { date, time });
  };

  const handleReschedulePress = (id, doctor) => {
    navigation.navigate("RescheduleCalendar", {id, doctor});
  };

  const handlePressOutside = () => {
    setShowButtons(true);
    setShowConfirmButton(false);
  };

  const { state, dispatch } = useAppointments();

  return (
    <TouchableWithoutFeedback onPress={handlePressOutside}>
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
            <Text style={styles.greetingText}>{firstName}'s Appointments</Text>
          </View>
        </View>
        <View
          style={{ flex: 4, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("../assets/appointmentscalendar1.png")}
            style={styles.image}
          />
        </View>
        <View style={{ flex: 0.5 }}>
          <Text style={styles.midText}>View Upcoming Appointments</Text>
        </View>
        <ScrollView contentContainerStyle={styles.pinkBoxWrapper}>
          {state.appointments.map((appointment) => (
            <View style={styles.pinkBox} key={appointment.id}>
              <View style={styles.line1}>
                <Text style={styles.appointmentTitle}>
                  Appointment with {appointment.doctor}
                </Text>
                <Text style={styles.bodyText}>{appointment.date}</Text>
                <Text style={styles.time}>{appointment.time}</Text>
              </View>
              {showButtons && (
                <View style={styles.buttons}>
                  <Pressable
                    style={styles.select}
                    onPress={() => {
                      // Set the selected appointment when "Cancel" is clicked
                      setSelectedAppointment(appointment);
                      setShowButtons(false);
                      setShowConfirmButton(true);
                    }}
                  >
                    <Text style={styles.bodyText}>Cancel</Text>
                  </Pressable>
                  <Pressable
                    style={styles.select}
                    onPress={() =>
                      handleReschedulePress(
                        appointment.id,
                        appointment.doctor,
                      )
                    }
                  >
                    <Text style={styles.bodyText}>Reschedule</Text>
                  </Pressable>
                </View>
              )}
              {showConfirmButton && selectedAppointment === appointment && (
                <View style={styles.buttons}>
                  <Pressable
                    style={styles.select}
                    onPress={() =>
                      handleCancelPress(appointment.date, appointment.time, appointment.id)
                    }
                  >
                    <Text style={styles.bodyText}>Confirm Cancel</Text>
                  </Pressable>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
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
    </TouchableWithoutFeedback>
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
    height: "80%",
    resizeMode: "contain",
    top: -15,
  },
  container: {
    flex: 1,
    height: "110%",
    position: "absolute",
    backgroundColor: "white",
    overflow: "hidden",
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

  bodyText: {
    color: "black",
    fontSize: 14,
    fontFamily: "AvenirNext-Regular",
    fontWeight: "400",
    textAlign: "center",
  },

  pinkBoxWrapper: {
    width: windowWidth,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 250,
    backgroundColor: "red",
  },

  pinkBox: {
    width: windowWidth - 40,
    height: 80,
    backgroundColor: "#FCE4EC",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
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
    marginBottom: 5,
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

  buttons: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 60,
  },

  line1: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
