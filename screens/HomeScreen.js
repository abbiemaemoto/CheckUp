import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useAppointments } from "../AppointmentContext";
import HeartIcon from "../assets/pinkheart.png";
import DiamondIcon from "../assets/whitediamond.png";
import LoadingScreen from "./LoadingScreen";
import ChatbotScreen from "./Chatbot";
import RecommendationScreen from "./Recommendations";
import SchedulingScreen from "./Scheduling";
import Confirmation from "./Confirmation";
import Selection from "./ScheduleQuestionScreen";
import Search from "./Search";
import Rescheduling from "./ReschedulingHome";
import CancelConfirm from "./CancelConfirmation";
import RescheduleConfirm from "./RescheduleConfirmation";
import PreConfirm from "./PreConfirmation";
import RescheduleCalendar from "./RescheduleCalendar";
import MoreInfo from "./MoreInfo";

const windowWidth = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  const onPress = (screen) => {
    navigation.navigate(screen);
  };
  const { state, dispatch } = useAppointments();
  const { firstName } = useAppointments();


  const handleMoreInfoPress = (date, time, doctor, id) => {
    navigation.navigate('MoreInfo', { date, time, doctor, id });
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Hello,</Text>
            <Text style={styles.greetingName}>{firstName}!</Text>
          </View>
          <View style={styles.iconsContainer}>
            <Image source={DiamondIcon} style={styles.diamondIcon} />
            <Image source={HeartIcon} style={styles.heartIcon} />
          </View>
        </View>
        <View style={{ flex: 1, top: -50 }}>
          <Text style={styles.titleText}>Welcome to CheckUp!</Text>
        </View>
        <View style={styles.reminderContainer}>
          <View style={styles.reminderImageContainer}>
            <Image
              source={require("../assets/penguin.png")}
              style={styles.penguinIcon}
            />
            <Image
              source={require("../assets/exclamation.png")}
              style={styles.exclamationIcon}
            />
          </View>
          <View style={styles.reminderTextContainer}>
            <Text style={styles.reminderText}>
              It’s been <Text style={styles.boldBlueText}>1 year</Text>
              {"\n"}since your last{" "}
              <Text style={styles.boldBlueText}>eye doctor</Text>
              {"\n"}appointment
            </Text>
          </View>
        </View>
        <Text style={styles.appointmentsHeader}>
          Your Upcoming Appointments
        </Text>
        <View style={styles.pinkBoxWrapper}>
          {state.appointments.slice(0, 2).map((appointment) => (
            <View style={styles.pinkBox} key={appointment.id}>
              <View style={styles.line1}>
                <Text style={styles.appointmentTitle}>
                  Appointment with {appointment.doctor}
                </Text>
                <Text style={styles.bodyText}>{appointment.date}</Text>
                <Text style={styles.time}>{appointment.time}</Text>
              </View>
              <View style={{flexDirection: 'column', justifyContent: 'flex-end', height: 60}}>
                <Pressable style={styles.moreInfoButton} onPress={() => handleMoreInfoPress(appointment.date, appointment.time, appointment.doctor, appointment.id)}>
                  <Text style={styles.moreInfoButtonText}>More info</Text>
                </Pressable>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.button} onPress={() => onPress("Selection")}>
            <Text style={styles.buttonText}>Schedule Appointment</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => onPress("Rescheduling")}
          >
            <Text style={styles.buttonText}>View Appointments</Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Image
            source={require("../assets/homebutton.png")}
            style={styles.footerIcon}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Selection"
          component={Selection}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chatbot"
          component={ChatbotScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Scheduling"
          component={SchedulingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Recommendations"
          component={RecommendationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirmation"
          component={Confirmation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Rescheduling"
          component={Rescheduling}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CancelConfirm"
          component={CancelConfirm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RescheduleConfirm"
          component={RescheduleConfirm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PreConfirm"
          component={PreConfirm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RescheduleCalendar"
          component={RescheduleCalendar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoreInfo"
          component={MoreInfo}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  reminderContainer: {
    flex: 2,
    top: -40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 10,
    marginHorizontal: 20,
  },
  reminderImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 25,
  },
  reminderText: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 16,
    textAlign: "center",
    color: "#000",
    fontFamily: "AvenirNext-DemiBold",
  },
  boldBlueText: {
    fontWeight: "bold",
    color: "#8CB9EF",
  },
  titleText: {
    fontFamily: "AvenirNext-DemiBold",
    fontSize: 24,
  },
  header: {
    width: "100%",
    height: 150,
    backgroundColor: "#8CB9EF",
    alignItems: "center",
    justifyContent: "center",
    top: -60,
  },
  exclamationIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginLeft: -30,
    top: 22,
  },
  penguinIcon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  greetingContainer: {
    top: 48,
    left: -110,
  },
  greeting: {
    fontSize: 26,
    color: "white",
    fontFamily: "AvenirNext-DemiBold",
  },
  greetingName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
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
  buttonsContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flex: 2,
    width: "80%",
    top: 30,
  },
  button: {
    color: "#15273F",
    marginBottom: 20,
    padding: 10,
    width: 300,
    height: 45,
    borderWidth: 2,
    borderColor: "#15273F",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#15273F",
  },
  appointmentsContainer: {
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
    flex: 9,
    top: -20,
  },
  appointmentsHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  appointmentTitle: {
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "normal",
  },
  moreInfoButton: {
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  moreInfoButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  footer: {
    backgroundColor: "#8CB9EF",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    bottom: -60,
    flex: 1.2,
    padding: 20,
  },
  footerIcon: {
    width: 70,
    height: 70,
    top: -10,
  },
  line1: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    // backgroundColor: 'purple',
  },
  pinkBoxWrapper: {
    width: windowWidth,
    height: 250,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: 'red'
    // flex: 1,
  },

  pinkBox: {
    width: "90%",
    height: 80,
    backgroundColor: "#FCE4EC",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
  },

  dateText: {
    fontFamily: "AvenirNext-DemiBold",
    fontWeight: "700",
  },
  time: {
    fontStyle: "italic",
    fontFamily: "AvenirNext-Regular",
  },
  bodyText: {
    color: "black",
    fontSize: 14,
    fontFamily: "AvenirNext-Regular",
    fontWeight: "400",
    textAlign: "center",
  },
});
