import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const QuizScreen = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  
  const question = {
    question: "What is the primary function of chlorophyll in photosynthesis?",
    options: [
      "Absorbing sunlight energy",
      "Releasing oxygen", 
      "Converting water to glucose",
      "Storing chemical energy"
    ],
    correctAnswer: "Absorbing sunlight energy"
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectedAnswer) {
      console.log(`Submitted answer: ${selectedAnswer}`);
      // Add logic to check answer and navigate to next question
    }
  };

  const handleGetHint = () => {
    console.log("Get Hint pressed");
    // Add hint logic here
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        
        {/* Quiz Header */}
        <View style={styles.header}>
          <Text style={styles.quizTitle}>Foundation Quiz</Text>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Question Section */}
        <View style={styles.questionContainer}>
          <Text style={styles.questionNumber}>Question 1</Text>
          <Text style={styles.questionText}>{question.question}</Text>
        </View>

        {/* Options */}
        <ScrollView 
          style={styles.optionsContainer}
          showsVerticalScrollIndicator={false}
        >
          {question.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswer === option && styles.selectedOption
              ]}
              onPress={() => handleAnswerSelect(option)}
            >
              <Text style={[
                styles.optionText,
                selectedAnswer === option && styles.selectedOptionText
              ]}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Bottom Buttons */}
        <View style={styles.bottomButtons}>
          <TouchableOpacity
            style={styles.hintButton}
            onPress={handleGetHint}
          >
            <Text style={styles.hintButtonText}>Get Hint</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.submitButton,
              !selectedAnswer && styles.submitButtonDisabled
            ]}
            onPress={handleSubmit}
            disabled={!selectedAnswer}
          >
            <Text style={styles.submitButtonText}>Submit Answer</Text>
          </TouchableOpacity>
        </View>

        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>Back to Categories</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    padding: 20 
  },
  header: {
    marginBottom: 30,
  },
  quizTitle: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 15,
    color: '#000',
  },
  progressBar: {
    width: '100%',
    height: 4,
    backgroundColor: '#E3F2FD',
    borderRadius: 2,
  },
  progressFill: {
    width: '30%',
    height: '100%',
    backgroundColor: '#2196F3',
    borderRadius: 2,
  },
  questionContainer: {
    marginBottom: 25,
  },
  questionNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 10,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    lineHeight: 24,
  },
  optionsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#fff',
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#E3F2FD',
    width: '100%',
  },
  selectedOption: {
    backgroundColor: '#E3F2FD',
    borderColor: '#2196F3',
  },
  optionText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  },
  selectedOptionText: {
    color: '#2196F3',
    fontWeight: '600',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  hintButton: {
    backgroundColor: '#E3F2FD',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#BBDEFB',
    width: '48%',
    alignItems: 'center',
  },
  hintButtonText: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: '600',
  },
  submitButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1E88E5',
    width: '48%',
    alignItems: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#BBDEFB',
    borderColor: '#90CAF9',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  backButton: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  backText: { 
    color: '#666', 
    fontSize: 16, 
    fontWeight: '600' 
  },
});