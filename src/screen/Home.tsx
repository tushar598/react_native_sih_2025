
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from "@env";
GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID,
  iosClientId: GOOGLE_IOS_CLIENT_ID,
  scopes: ["profile", "email"],
});


// Configure Google Signin
GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID,
  iosClientId: GOOGLE_IOS_CLIENT_ID,
  scopes: ['profile', 'email'],
});

// Define the user type based on GoogleSignin response
interface GoogleUser {
  id: string;
  name?: string;
  email?: string;
  photo?: string;
}

const HomeScreen: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<GoogleUser | null>(null);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      // Map the returned user info to our type
      const mappedUser: GoogleUser = {
       id: userInfo.data?.user?.id || '',
        name: userInfo.data?.user?.name || '',
        email: userInfo.data?.user?.email,
        photo: userInfo.data?.user?.photo || ''
      };

      setUser(mappedUser);
      Alert.alert('Login Successful', `Hello ${mappedUser.name || 'User'}!`);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Cancelled', 'Login was cancelled');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Error', 'Google Play Services not available');
      } else {
        Alert.alert('Error', error.message || 'Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

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

        {/* Google Login Button */}
        <TouchableOpacity
          style={styles.startButton}
          onPress={handleGoogleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.startText}>Continue with Google</Text>
          )}
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
