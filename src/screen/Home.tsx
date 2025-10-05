import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; 

const HomeScreen = () => {
  const navigation = useNavigation<any>()
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        {/* Illustration */}
        <Image
          source={require('../assets/quiz-illustration.jpeg')}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Heading */}
        <Text style={styles.title}>Level Up Your Knowledge</Text>
        <Text style={styles.subtitle}>
          Join a community of learners and challenge yourself with fun quizzes.
        </Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startText} onPress={() => navigation.navigate("Categories")}>Start</Text>
      </TouchableOpacity>

        {/* Show user info if logged in */}
        {user && (
          <View style={styles.userInfo}>
            <Text style={styles.userText}>Name: {user.name || 'N/A'}</Text>
            <Text style={styles.userText}>Email: {user.email || 'N/A'}</Text>
          </View>
        )}

        {/* Optional Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  image: { width: '100%', height: 250, marginBottom: 20 },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  startButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  startText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  signUpButton: {
    backgroundColor: '#E3F2FD',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  signUpText: { color: '#2196F3', fontSize: 16, fontWeight: '600' },
  userInfo: { marginTop: 20, alignItems: 'center' },
  userText: { fontSize: 16, color: '#333', marginVertical: 2 },
});
