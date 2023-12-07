import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function CameraCalendar() {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);
  const backArrow = require("../assets/backarrow.png");
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo);
    }
  };

  const retakePicture = () => {
    setPhoto(null);
  };

  const continueToNextPage = () => {
    navigation.navigate("Preferences");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={backArrow} style={styles.backArrow} />
        </Pressable>
        <Text style={styles.headerText}>Calendar</Text>
        <Text style={styles.bodyText}>Scan your paper calendar.</Text>
      </View>

      {photo ? (
        <View style={styles.previewContainer}>
          <Text style={styles.greenText}>Scan Successful!</Text>
          <Image source={{ uri: photo.uri }} style={styles.previewImage} />
          <View
            style={{
              flex: 0.5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button} onPress={retakePicture}>
                <Text style={styles.text}>Retake</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={continueToNextPage}>
                <Text style={styles.text}>Next</Text>
              </Pressable>
            </View>
          </View>
        </View>
      ) : (
        <View style={{ flex: 2.25, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
          <Camera style={styles.camera} type={type} ref={cameraRef} />
          <View
            style={{
              flex: 0.5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button} onPress={takePicture}>
                <Text style={styles.text}>Take Picture</Text>
              </Pressable>
            </View>
          </View>
        </View>
      )}

      <View
        style={{
          flex: 0.5,
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Pressable style={styles.button} onPress={continueToNextPage}>
          <Text style={styles.text}>Skip</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  previewContainer: {
    flex: 2.25,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  previewImage: {
    width: "100%",
    flex: 1,
    resizeMode: "contain",
  },
  header: {
    flex: 0.75,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  headerText: {
    fontFamily: "AvenirNext-DemiBold",
    fontSize: 50,
    marginTop: 20,
  },
  bodyText: {
    fontFamily: "AvenirNext-Regular",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
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
  text: {
    color: "black",
    fontSize: 16,
    fontFamily: "AvenirNext-DemiBold",
  },

  greenText: {
    color: "green",
    fontSize: 20,
    fontFamily: "AvenirNext-DemiBold",
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
});
