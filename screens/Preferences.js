import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const ToggleButton = ({ label, state, onPress }) => (
  <Pressable
    style={[
      styles.selection,
      state && styles.successButton,
      !state && label === "No preferences" && styles.noPreferencesButton,
    ]}
    onPress={() => {
      if (label === "No preferences") {
        onPress(!state); // Toggle the state directly
      } else {
        onPress(); // For other buttons, use the original onPress
      }
    }}
  >
    <Text
      style={[
        state && styles.successText,
        !state && label === "No preferences" && styles.noPreferencesText,
      ]}
    >
      {label}
    </Text>
  </Pressable>
);

export default function Preferences() {
  const backArrow = require("../assets/backarrow.png");
  const navigation = useNavigation();

  const [genderPreferences, setGenderPreferences] = useState({
    noPreferences: false,
    male: false,
    female: false,
    transgender: false,
    otherGender: false,
  });

  const [languagePreferences, setLanguagePreferences] = useState({
    noPreferences: false,
    english: false,
    spanish: false,
    chinese: false,
    otherLanguage: false,
  });

  const [racePreferences, setRacePreferences] = useState({
    noPreferences: false,
    white: false,
    asian: false,
    hispanic: false,
    black: false,
    native: false,
    otherRace: false,
  });

  const isNextButtonEnabled =
    Object.values(genderPreferences).some((value) => value) &&
    Object.values(languagePreferences).some((value) => value) &&
    Object.values(racePreferences).some((value) => value);

  const handleNextButtonPress = () => {
    navigation.navigate("ProfileDone");
    setTimeout(() => {
      // Automatically navigate to another screen after 2 seconds
      navigation.navigate("HomeStack");
    }, 1500);
  };

  const renderToggleButton = (label, state, onPress) => (
    <ToggleButton label={label} state={state} onPress={onPress} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={backArrow} style={styles.backArrow} />
        </Pressable>
        <Text style={styles.headerText}>Care</Text>
        <Text style={styles.headerText}>Preferences</Text>
        <Text style={styles.bodyText}>Select your preferences for care.</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.box}>
          <View style={styles.line1}>
            <Text style={styles.boxHeader}>Gender</Text>
            {renderToggleButton(
              "No preferences",
              genderPreferences.noPreferences,
              () =>
                setGenderPreferences({
                  noPreferences: !genderPreferences.noPreferences,
                  male: false,
                  female: false,
                  transgender: false,
                  otherGender: false,
                })
            )}
          </View>
          <View style={styles.line2}>
            {renderToggleButton("Male", genderPreferences.male, () =>
              setGenderPreferences({
                noPreferences: false,
                male: !genderPreferences.male,
                female: false,
                transgender: false,
                otherGender: false,
              })
            )}
            {renderToggleButton("Female", genderPreferences.female, () =>
              setGenderPreferences({
                noPreferences: false,
                male: false,
                female: !genderPreferences.female,
                transgender: false,
                otherGender: false,
              })
            )}
            {renderToggleButton(
              "Transgender",
              genderPreferences.transgender,
              () =>
                setGenderPreferences({
                  noPreferences: false,
                  male: false,
                  female: false,
                  transgender: !genderPreferences.transgender,
                  otherGender: false,
                })
            )}
            {renderToggleButton("Other", genderPreferences.otherGender, () =>
              setGenderPreferences({
                noPreferences: false,
                male: false,
                female: false,
                transgender: false,
                otherGender: !genderPreferences.otherGender,
              })
            )}
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.line1}>
            <Text style={styles.boxHeader}>Language</Text>
            {renderToggleButton(
              "No preferences",
              languagePreferences.noPreferences,
              () =>
                setLanguagePreferences({
                  noPreferences: !languagePreferences.noPreferences,
                  english: false,
                  spanish: false,
                  chinese: false,
                  otherLanguage: false,
                })
            )}
          </View>
          <View style={styles.line2}>
            {renderToggleButton("English", languagePreferences.english, () =>
              setLanguagePreferences({
                noPreferences: false,
                english: !languagePreferences.english,
                spanish: false,
                chinese: false,
                otherLanguage: false,
              })
            )}
            {renderToggleButton("Spanish", languagePreferences.spanish, () =>
              setLanguagePreferences({
                noPreferences: false,
                english: false,
                spanish: !languagePreferences.spanish,
                chinese: false,
                otherLanguage: false,
              })
            )}
            {renderToggleButton("Chinese", languagePreferences.chinese, () =>
              setLanguagePreferences({
                noPreferences: false,
                english: false,
                spanish: false,
                chinese: !languagePreferences.chinese,
                otherLanguage: false,
              })
            )}
            {renderToggleButton(
              "Other",
              languagePreferences.otherLanguage,
              () =>
                setLanguagePreferences({
                  noPreferences: false,
                  english: false,
                  spanish: false,
                  chinese: false,
                  otherLanguage: !languagePreferences.otherLanguage,
                })
            )}
          </View>
        </View>
        <View style={[styles.box, {flex: 0.30}]}>
          <View style={styles.line1}>
            <Text style={styles.boxHeader}>Race</Text>
            {renderToggleButton(
              "No preferences",
              racePreferences.noPreferences,
              () =>
                setRacePreferences({
                  noPreferences: !racePreferences.noPreferences,
                  white: false,
                  asian: false,
                  black: false,
                  hispanic: false,
                  native: false,
                  otherRace: false,
                })
            )}
          </View>
          <View style={styles.line2}>
            {renderToggleButton("White", racePreferences.white, () =>
              setRacePreferences({
                noPreferences: false,
                white: !racePreferences.white,
                asian: false,
                black: false,
                hispanic: false,
                native: false,
                otherRace: false,
              })
            )}
            {renderToggleButton("Asian", racePreferences.asian, () =>
              setRacePreferences({
                noPreferences: false,
                white: false,
                asian: !racePreferences.noPreferences,
                black: false,
                hispanic: false,
                native: false,
                otherRace: false,
              })
            )}
            {renderToggleButton("Black", racePreferences.black, () =>
              setRacePreferences({
                noPreferences: false,
                white: false,
                asian: false,
                black: !racePreferences.noPreferences,
                hispanic: false,
                native: false,
                otherRace: false,
              })
            )}
            {renderToggleButton("Hispanic", racePreferences.hispanic, () =>
              setRacePreferences({
                noPreferences: false,
                white: false,
                asian: false,
                black: false,
                hispanic: !racePreferences.hispanic,
                native: false,
                otherRace: false,
              })
            )}
          </View>
          <View style={styles.line2}>
            {renderToggleButton("Native", racePreferences.native, () =>
              setRacePreferences({
                noPreferences: false,
                white: false,
                asian: false,
                black: false,
                hispanic: false,
                native: !racePreferences.native,
                otherRace: false,
              })
            )}
            {renderToggleButton("Other", racePreferences.otherRace, () =>
              setRacePreferences({
                noPreferences: false,
                white: false,
                asian: false,
                black: false,
                hispanic: false,
                native: false,
                otherRace: !racePreferences.otherRace,
              })
            )}
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable
          style={[styles.button, !isNextButtonEnabled && styles.buttonDisabled]}
          onPress={handleNextButtonPress}
        >
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
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
  header: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  body: {
    marginTop: 15,
    flex: 2.5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  footer: {
    flex: 0.75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  headerText: {
    fontFamily: "AvenirNext-DemiBold",
    fontSize: 40,
  },
  bodyText: {
    fontFamily: "AvenirNext-Regular",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#0000",
    borderRadius: 10,
    padding: 10,
    width: 150,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000000",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontFamily: "AvenirNext-DemiBold",
  },
  successButton: {
    backgroundColor: "#23ab51",
    borderColor: "green",
  },
  successText: {
    fontFamily: "AvenirNext-Regular",
    color: "white",
    fontSize: 16,
  },
  image: {
    width: 75,
    height: 75,
    resizeMode: "contain",
  },
  box: {
    flex: 0.25,
    width: "90%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  line1: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  line2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  line2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  selection: {
    backgroundColor: "#0000",
    borderRadius: 10,
    padding: 8,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000000",
  },
  preference: {
    backgroundColor: "#0000",
    borderRadius: 10,
    padding: 8,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#9c9d9e",
  },
  preferenceText: {
    color: "#9c9d9e",
  },
  boxHeader: {
    fontFamily: "AvenirNext-DemiBold",
    fontSize: 20,
  },
  successButton: {
    backgroundColor: "#23ab51",
    borderColor: "green",
  },
  successText: {
    fontFamily: "AvenirNext-Regular",
    color: "white",
    fontSize: 16,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  noPreferencesButton: {
    borderColor: "#9C9D9E"
  },
  noPreferencesText: {
    color: "#9C9D9E",
  }
});
