import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

export default function WorldScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { classNumber, subject } = route.params;

  const levels = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleLevelSelect = (level: number) => {
    // Navigate to QuizScreen
    navigation.navigate("Quiz", { classNumber, subject, level });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Class {classNumber} - {subject} World</Text>
      <View style={styles.grid}>
        {levels.map((level) => (
          <TouchableOpacity
            key={level}
            style={styles.levelCard}
            onPress={() =>{ 
               handleLevelSelect(level)
              }}

          >
            <Text style={styles.levelText}>Level {level}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#F6F7F8", flexGrow: 1 },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 25, color: "#111", textAlign: "center" },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  levelCard: {
    width: "48%",
    paddingVertical: 25,
    backgroundColor: "#FFE0B2",
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  levelText: { fontSize: 18, fontWeight: "600", color: "#EF6C00" },
});
