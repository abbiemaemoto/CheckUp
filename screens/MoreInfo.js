import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";
import { useAppointments } from "../AppointmentContext";

import penguinImage from "../assets/penguin.png"
import mapImage from "../assets/map.jpeg"

const windowWidth = Dimensions.get("window").width;
const backArrow = require("../assets/backarrow.png");

const DetailLine = ({ label, value }) => (
  <Text style={styles.detailText}>
    <Text style={styles.boldText}>{label}</Text>{value}
  </Text>
);

export default function MoreInfo({ route }) {
  const navigation = useNavigation();
  const { date, time, doctor, id } = route.params;
  const { state, dispatch } = useAppointments();

  const handleReschedulePress = (id, doctor) => {
    navigation.navigate("RescheduleCalendar", { id, doctor });
  };

  const handleCancelPress = (date, time, id) => {
    dispatch({ type: "REMOVE_APPOINTMENT", payload: { id } });
    navigation.navigate("CancelConfirm", { date, time });
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
          <Text style={styles.greetingText}>Your</Text>
          <Text style={styles.greetingText}>Appointment</Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        
      </View>
      <View style={styles.appointmentContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Yearly Check Up!</Text>
          <Image source={penguinImage} style={styles.penguinImage} />
        </View>
        <DetailLine label="Physician: " value={doctor} />
        <DetailLine label="Date: " value={date} />
        <DetailLine label="Time: " value={time} />
        <DetailLine
          label="Address: "
          value="459 Laguna Drive, Stanford, California, 94305, Office 2B"
        />
        <Image source={mapImage} style={styles.mapImage} />
        <DetailLine
          label="Reason for Visit: "
          value="CheckUp scheduled this appointment so that you could receive your annual check-up from your primary doctor."
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleReschedulePress(id, doctor)}>
          <Text style={styles.buttonText}>Reschedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCancelPress(date, time, id)}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:0.5}}/>

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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
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
    justifyContent: "space-evenly",
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
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 2.5,
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
  appointmentContainer: {
    width: '90%',
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 182, 193, 0.3)',
  },
  penguinImage: {
    width: 60,
    height: 60,
  },
  mapImage: {
    width: '100%',
    height: 150, // Adjust as necessary
    marginVertical: 10,
  },
  reasonText: {
    fontSize: 16,
    marginVertical: 10,
  },
  detailText: {
    fontSize: 18, 
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  titleContainer: {
    flexDirection: 'row', // Lay out the children in a row
    alignItems: 'flex-start', // Align items vertically
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: "#0000",
    borderRadius: 10,
    padding: 10,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000000",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontFamily: "AvenirNext-DemiBold"
  },
  buttonContainer: {
    marginTop: 20,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 2,
    // backgroundColor: 'red',
  }
});
