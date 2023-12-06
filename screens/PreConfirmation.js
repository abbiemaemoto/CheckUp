import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";
import HeartIcon from "../assets/pinkheart.png";
import DiamondIcon from "../assets/whitediamond.png";
import doctor1 from "../assets/doctor1.png";
import doctor2 from "../assets/doctor2.png";
import doctor3 from "../assets/doctor3.png";
import { useAppointments } from "../AppointmentContext";
import { createIdGenerator } from "../AppointmentContext";

const TextWithBoldLabel = ({ label, children }) => (
  <Text style={styles.regularText}>
    <Text style={styles.boldLabel}>{label}</Text>
    {children}
  </Text>
);
const windowWidth = Dimensions.get("window").width;
const backArrow = require("../assets/backarrow.png");

const DoctorImage = ({ image }) => {
  let selectedImage;
  switch (image) {
    case "doctor1":
      selectedImage = doctor1;
      break;
    case "doctor2":
      selectedImage = doctor2;
      break;
    case "doctor3":
      selectedImage = doctor3;
      break;
    default:
      selectedImage = doctor1; // Default to a specific image
  }
  return <Image style={styles.doctorImage} source={selectedImage} />;
};

export const addAppointment = (newAppointment) => ({
  type: "ADD_APPOINTMENT",
  payload: newAppointment,
});

export default function PreConfirmation({ route }) {
  const navigation = useNavigation();
  const { date, time, doctor, image } = route.params;
  const { state, dispatch } = useAppointments();

  const handleAppointment = () => {
    const newId =
      state.appointments.length > 0
        ? state.appointments[state.appointments.length - 1].id + 1
        : 1;

    const newAppointment = {
      id: newId,
      date: date,
      time: time,
      doctor: doctor,
      description:
        "CheckUp scheduled this appointment so that you could receive a dentist appointment from your selected doctor.",
    };

    // Dispatch the action using the action creator
    dispatch(addAppointment(newAppointment));
    navigation.navigate("Confirmation", { date, time, doctor });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.blueBox}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={backArrow} style={styles.backArrow} />
        </Pressable>
        <View style={styles.greeting}>
          <Text style={styles.greetingText}>Angela's</Text>
          <Text style={styles.greetingText}>Appointment</Text>
        </View>
      </View>
      <View style={{flex: 1}}/>
      <Text style={styles.cardTitle}>Confirm Your Appointment</Text>
      <View style={styles.card}>
        <View style={styles.greenBar} />
        <View style={styles.headerContainer}>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.doctorImageContainer}>
            <DoctorImage image={image} />
            <Text style={styles.doctorName}>{doctor}</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.regularText}>
              <Text style={styles.boldLabel}>Location:</Text> 105 Green Drive,
              Stanford, California, 94305
            </Text>
            <TextWithBoldLabel label="Speciality: ">
              Dentistry
            </TextWithBoldLabel>
            <TextWithBoldLabel label="In-Network: ">Yes</TextWithBoldLabel>
            <TextWithBoldLabel label="Years Practiced: ">6</TextWithBoldLabel>
            <Image
              style={styles.ratings}
              source={require("../assets/5stars.png")}
            />
          </View>
        </View>
      </View>
      <View style={{flex: 2}}>
        <Text style={styles.question}>
          Would you like CheckUp to book this appointment for you?
        </Text>
        <Pressable
          style={styles.confirmButton}
          onPress={() => handleAppointment(date, time, doctor)}
        >
          <Text style={styles.confirmText}>Yes, please!</Text>
        </Pressable>
      </View>

      <View style={{ flex: 2 }} />
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
  screen: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    width: windowWidth,
    height: 125,
    backgroundColor: "#8CB9EF",
    justifyContent: "center",
    alignItems: "center",
  },
  greetingContainer: {
    top: 22,
    alignItems: "center",
    justifyContent: "center",
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
  iconsContainer: {
    position: "relative",
    height: 60,
  },
  diamondIcon: {
    position: "absolute",
    top: -100,
    width: 170,
    height: 150,
    resizeMode: "contain",
    left: 30,
  },
  heartIcon: {
    position: "absolute",
    bottom: -35,
    width: 150,
    height: 150,
    resizeMode: "contain",
    left: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 16,
  },
  card: {
    margin: 16,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#000000",
    shadowColor: "#000",
    width: "85%",
    alignSelf: "center",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'space-evenly',
  },
  headerContainer: {
    paddingLeft: 16,
    width: "100%",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  boldLabel: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
  greenBar: {
    backgroundColor: "#23AB51",
    width: 10,
    position: "absolute",
    left: 5,
    top: 5,
    bottom: 5,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  contentContainer: {
    flex: 1,
    // paddingLeft: 16,
  },
  detailsContainer: {
    flexDirection: "row",
    alignItems: "space-evenly",
    paddingLeft: 16,
    paddingTop: 8,
    width: "100%",
  },
  date: {
    fontSize: 23,
    fontWeight: "bold",
  },
  regularText: {
    fontSize: 15,
    fontStyle: "italic",
  },
  time: {
    fontSize: 20,
  },
  doctorImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: -3,
  },
  doctorImageContainer: {
    alignItems: "center",
    marginRight: 16,
  },
  doctorName: {
    fontSize: 18,
    color: "black",
    marginTop: 8,
    fontWeight: "bold",
  },
  ratings: {
    height: 24,
    resizeMode: "contain",
  },
  question: {
    marginVertical: 16,
    fontSize: 22,
    textAlign: "center",
  },
  confirmButton: {
    backgroundColor: "#0000",
    borderRadius: 10,
    padding: 10,
    width: 200,
    alignItems: "center",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 13,
  },
  confirmText: {
    color: "#000",
    fontSize: 16,
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
    top: -10,
  },

  footer: {
    backgroundColor: "#8CB9EF",
    width: windowWidth,
    height: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1.25,
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
  home: {
    width: 70,
    height: "80%",
    resizeMode: "contain",
  },
});
