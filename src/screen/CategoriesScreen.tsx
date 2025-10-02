import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CategoriesScreen = () => {
  const classes = [6, 7, 8, 9, 10, 11, 12];

  const handleClassSelect = (classNumber: number) => {
    console.log(`Selected class: ${classNumber}th`);
    // You can add navigation or state management here
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        {/* Illustration */}
        <Image
          source={require('../assets/class-illustration.jpg')} // replace with your image
          style={styles.image}
          resizeMode="contain"
        />

        {/* Heading */}
        <Text style={styles.title}>Choose Your Class</Text>
        <Text style={styles.subtitle}>
          Select your grade to access tailored quizzes and learning materials.
        </Text>

        {/* Class Selection Grid */}
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.gridContainer}
        >
          <View style={styles.grid}>
            {classes.map(classNumber => (
              <TouchableOpacity
                key={classNumber}
                style={styles.classButton}
                onPress={() => handleClassSelect(classNumber)}
              >
                <Text style={styles.classText}>Class {classNumber}th</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Back Button */}
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
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
  scrollView: {
    width: '100%',
    marginBottom: 20,
  },
  gridContainer: {
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  classButton: {
    backgroundColor: '#E3F2FD',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: '48%', // Two columns with gap
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#BBDEFB',
  },
  classText: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  backText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },
});
