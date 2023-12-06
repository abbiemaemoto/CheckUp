import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable
} from 'react-native';

const penguinImage = require('../assets/penguin.png')
const backArrow = require('../assets/backarrow.png');


export default function Chatbot() {
    const navigation = useNavigation();
    const [messages, setMessages] = useState([
      { id: 1, text: 'Checking Up! What health issues are troubling you?', type: 'received', options: null }
    ]);
    const [inputText, setInputText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
  
    // Function to simulate the bot's response
    const simulateBotResponse = (text, options = null) => {
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          {
            id: prevMessages.length + 1,
            text,
            type: 'received',
            options
          }
        ]);
      }, 1000); // Wait for 1 second to simulate bot response time
    };
  
    const handleSendMessage = () => {
      if (inputText.trim().length > 0) {
        const newMessage = { id: messages.length + 1, text: inputText, type: 'sent', options: null };
        setMessages([...messages, newMessage]);
        setInputText('');
        setIsTyping(false);
  
        // Check the message count and respond accordingly
        if (newMessage.id === 2) { // Assuming the first user message will have id=2
          simulateBotResponse('Thank you! Based on your situation, I recommend seeing a dentist. Do you already have a dentist you would like to see?', ['yes', 'no']);
        }
      }
    };
  
    const handleOptionPress = (option) => {
        const newOptionMessage = { id: messages.length + 1, text: `You selected: ${option}`, type: 'sent', options: null };
        setMessages([...messages, newOptionMessage]);
      
        // Retrieve the last bot message to determine the context
        const lastBotMessage = messages.filter(msg => msg.type === 'received').pop();
      
        // Check the last message's text to determine the context
        if (lastBotMessage && lastBotMessage.text.includes('Do you already have a dentist you would like to see?')) {
          if (option.toLowerCase() === 'yes') {
            simulateBotResponse("I see that your primary dentist is Doctor Lee. Would you like me to book you an appointment with her?", ['yes', 'no']);
          } else if (option.toLowerCase() === 'no') {
            simulateBotResponse("Would you like me to find you a dentist in the area based on your profile?", ['yes', 'no']);
          }
        } else if (lastBotMessage && lastBotMessage.text.includes('Would you like me to find you a dentist in the area based on your profile?')) {
          if (option.toLowerCase() === 'yes') {
            // Navigate to the LoadingScreen only if they want to find a new dentist
            navigation.navigate('Loading');
          }
        } else if (lastBotMessage && lastBotMessage.text.includes('Would you like me to book you an appointment with her?')) {
          if (option.toLowerCase() === 'yes') {
            // Navigate to the LoadingScreen when they want to book an appointment with Doctor Lee
            navigation.navigate('Loading');
          }
          // Handle 'no' option if necessary
        }
        // Add more conditions here for additional conversation branches
      };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <View style={styles.header}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image source={backArrow} style={styles.backArrow} />
        </Pressable>
        <Text style={styles.headerTitle}>CheckUp</Text>
        <Text style={styles.headerStatus}>Status: Scheduling an Appointment...</Text>
      </View>

      <ScrollView style={styles.messagesContainer}>
        {messages.map((msg) => (
          <View key={msg.id} style={[
            styles.messageBubble,
            msg.type === 'sent' ? styles.sentBubble : styles.receivedBubble
          ]}>
            {msg.type === 'received' && <Image source={penguinImage} style={styles.penguinIcon} />}
            <View style={msg.type === 'sent' ? styles.sentTextContainer : styles.receivedTextContainer}>
            <Text style={styles.messageText} numberOfLines={10} ellipsizeMode='tail'>{msg.text}</Text>
              {msg.options && (
                <View style={styles.optionsContainer}>
                  {msg.options.map((option) => (
                    <Pressable key={option} style={styles.optionButton} onPress={() => handleOptionPress(option)}>
                      <Text style={styles.optionText}>{option}</Text>
                    </Pressable>
                  ))}
                </View>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={(text) => {
            setInputText(text);
            setIsTyping(true);
          }}
          onSubmitEditing={handleSendMessage}
        />
        {isTyping && (
          <View style={styles.typingIndicator}>
            <Text style={styles.typingText}>...</Text>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#8CB9EF',
    paddingTop: Platform.OS === 'android' ? 0 : 0, // Set paddingTop to 0 for both platforms
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    top: 20,
    fontFamily: 'AvenirNext-DemiBold',
  },
  backButton: {
    position: 'absolute',
    top: 40, 
    left: 20, 
    padding: 10, 
  },
  backArrow: {
      width: 24,
      height: 24, 
    },
  headerStatus: {
    fontSize: 18,
    color: '#fff',
    top: 20,
    fontFamily: 'AvenirNext-DemiBold',
  },
  headerTime: {
    fontSize: 14,
    color: '#fff',
  },
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 10,
    top: 10,
    // backgroundColor: 'blue',
  },
  messageBubble: {
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    maxWidth: '60%',
  },
  receivedBubble: {
    backgroundColor: '#ECECEC',
    marginRight: 'auto',
    marginLeft: 10,
    maxWidth: '75%',
  },
  sentBubble: {
    backgroundColor: '#2E9DFB',
    alignSelf: 'flex-end',
    marginRight: 10,
    maxWidth: '75%',
  },
  sentTextContainer: {
    borderRadius: 20,
    flexShrink: 1,
  },
  receivedTextContainer: {
    borderRadius: 20,
    flexShrink: 1,
  },
  penguinIcon: {
    width: 40,
    height: 40,
    marginRight: 4,
  },
  messageText: {
    fontSize: 16,
    fontFamily: 'AvenirNext-Regular',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  optionButton: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'AvenirNext-Regular',
  },
  inputContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    padding: 10,
    flex: 0.1,
    height: '20%',
  },
  input: {
    fontSize: 16,
    fontFamily: 'AvenirNext-Regular',
  },
  typingIndicator: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    // backgroundColor: 'purple',
  },
  typingText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'AvenirNext-Regular',
  },
});

  