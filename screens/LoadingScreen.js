import React from 'react';
import { View, Image, StyleSheet, Text, Pressable} from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation, StackActions } from '@react-navigation/native';

export default function LoadingScreen() {

    const navigation = useNavigation();
    const backArrow = require('../assets/backarrow.png');
    const loadingImages = [
        require('../assets/loading1.png'),
        require('../assets/loading2.png'),
        require('../assets/loading3.png'),
        require('../assets/loading4.png'),
        require('../assets/loading5.png'),
      ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Change the image every 200ms
        const intervalId = setInterval(() => {
          setCurrentImageIndex(prevIndex => (prevIndex + 1) % loadingImages.length);
        }, 100);

        const navigationTimeoutId = setTimeout(() => {
          clearInterval(intervalId); 
          navigation.navigate('Scheduling'); 
        }, 3000);
    
        return () => clearInterval(intervalId);
      }, []);
      
      
    return (
    <View style={styles.container}>
      <View style={{flex: 0.4}}/>
      <Pressable
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image source={backArrow} style={styles.backArrow} />
      </Pressable>
      <Image style={styles.checkUpLogo} source={require('../assets/logo.png')} />
      <Image style={styles.penguin} source={require('../assets/penguin.png')} />
      <Image
        style={styles.loading}
        source={loadingImages[currentImageIndex]}
      />
      <Text style={styles.findingAppointment}>
        Finding an{'\n'}Appointment{'\n'}for You...
      </Text>
      <View style={{flex: 0.2}}/>
      <View style={styles.footer}>
              <Pressable style={styles.homeButton} onPress={() => navigation.dispatch(StackActions.popToTop())}>
                  <Image source={require('../assets/homebutton.png')} style={styles.footerIcon}/>
              </Pressable> 
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backButton: {
      position: 'absolute',
      top: 40, // adjust if necessary based on your header
      left: 20, // adjust if necessary for padding
      padding: 10, // for better touch area
    },
  backArrow: {
      width: 24, // adjust as necessary
      height: 24, // adjust as necessary
    },
  container: {
    flex: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
    alignItems: 'center', 
    justifyContent: 'space-between', 
  },
  checkUpLogo: {
    width: 225,
    height: 70,
    alignSelf: 'center'
  },
  penguin: {
    width: 233,
    height: 240,
    marginVertical: 20, 
  },
  findingAppointment: {
    fontSize: 32,
    color: '#16263F',
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20, 
    // bottom: -30
  },
  loading: {
    width: 80,
    height: 80,
    marginVertical: 20, 
  },
  heart: {
    width: 77,
    height: 77,
    position: 'absolute', 
    bottom: 60, 
    alignSelf: 'center'
  },
  footer: {
    flex: 0.35,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#8CB9EF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerIcon: {
    width: 70,
    height: 70,
    marginHorizontal: -5,
  },
});
