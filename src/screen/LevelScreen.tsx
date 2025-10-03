import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function LevelScreen() {
  const route = useRoute<any>();
  const { classNumber, subject, level } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>
        Class {classNumber} - {subject} - Level {level}
      </Text>

      <Text style={styles.content}>
        🎯 This is where your lesson, quiz, or content for Level {level} of {subject} will appear.
      </Text>

      {/* Future: Add quiz buttons, videos, PDFs, or interactive content */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#F6F7F8", flexGrow: 1 },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: "#111", textAlign: "center" },
  content: { fontSize: 18, lineHeight: 28, color: "#333", textAlign: "center" },
});
