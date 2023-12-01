import { Text, StyleSheet, Image, View, SafeAreaView, Dimensions, Pressable, ScrollView, Header, FlatList, StatusBar} from "react-native";
import React, { useState, useEffect } from 'react';
import { useNavigation, StackActions } from "@react-navigation/native";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const backArrow = require("../assets/backarrow.png");


export default function Confirmation({ route }) {   
    const navigation = useNavigation();
    const { date, time, doctor } = route.params;
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#8CB9EF" />
            <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image source={backArrow} style={styles.backArrow} />
        </Pressable>
            <View style={{flex: 0.5}}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../assets/accept.png')} style={styles.check}/>
            </View>
            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                <Text style={styles.regularText}>Your appointment on</Text>
                <View style={styles.lineContainer}>
                    <View style={{width: '120%', flexDirection: 'row',justifyContent:'center', alignItems:'center'}}>
                        <Text style={styles.pinkText}>{date}</Text>
                        <Text style={styles.regularText}> at</Text>
                    </View>
                    <Text style={styles.pinkText}>{time}</Text>
                </View>
                <View style={styles.lineContainer2}>
                    <Text style={styles.regularText}>with</Text>
                    <Text style={styles.doctorText}>{doctor}</Text>
                </View>
                <Text style={styles.regularText}>has been confirmed!</Text>
            </View>
            <View style={styles.characterBox}>
                <Image source={require('../assets/penguin.png')} style={styles.character}/>
            </View>
            <Pressable style={styles.select} onPress={() => navigation.dispatch(StackActions.popToTop())}>
                <Text style={{fontSize: 16, fontWeight: '500', margin: 5}}>Done</Text>
            </Pressable>
{/* 
            <View style={styles.footer}>
                <Pressable style={styles.homeButton} onPress={() => navigation.dispatch(StackActions.popToTop())}>
                    <Image source={require('../assets/homebutton.png')} style={styles.home}/>
                </Pressable> */}
            {/* </View> */}
        </View>
        
    );
};

const styles = StyleSheet.create({
    
    home: {
        width: '80%',
        height:'80%',
        resizeMode: 'contain',
    },

    check: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        padding: 10,
        margin: 55,
    },

    characterBox: {
        flex: 1,
        width: '75%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    character: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },

    
    container: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    lineContainer: {
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems:'center',
        width: '90%',
    },

    lineContainer2: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        width: '75%',
    },

    regularText: {
        color: 'black',
        fontSize: 36,
        fontWeight: '600',
        fontFamily: 'AvenirNext-DemiBold',
        // textAlign: 'center',
    },

    doctorText: {
        color: 'black',
        fontSize: 36,
        fontWeight: '700',
        fontFamily: 'AvenirNext-DemiBold',
        textAlign: 'center',
    },

    pinkText: {
        color: 'pink',
        fontSize: 36,
        fontFamily: 'AvenirNext-DemiBold',
        fontWeight: '700',
        // textAlign: 'center',        
    },

    select: {
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 2,
        padding: 10,
        margin: 25,
    },
        
    footer: {
        backgroundColor: '#8CB9EF',
        width: '100%',
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.8,
        
    },

    homeButton: {
        borderColor: 'transparent',
        borderRadius: 5,
        borderWidth: 2,
        padding: 1,
        backgroundColor: 'transparent',
        width: windowWidth, 
        justifyContent: 'center',
        alignItems: 'center',
        top: -10,
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
