import { Text, StyleSheet, Image, View, SafeAreaView, Dimensions, Pressable, ScrollView, Header, FlatList, StatusBar} from "react-native";
import React, { useState, useEffect } from 'react';
import { useNavigation, StackActions } from "@react-navigation/native";
import penguin from "../assets/penguin.png"

const backArrow = require("../assets/backarrow.png");


export default function ProfileDone() {   
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Pressable
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Image source={backArrow} style={styles.backArrow} />
            </Pressable>
          </View>
          <View style={{flex: 1.5, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={penguin}/>
            <Text style={styles.regularText}>Profile Complete!</Text>
          </View>
        </View>
        
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
    },
    regularText: {
        color: 'black',
        fontSize: 30,
        fontWeight: '600',
        fontFamily: 'AvenirNext-DemiBold',
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
        flex: 0.25,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
      },
    
});
