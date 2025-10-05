import React from "react";
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { classWorlds } from "../lib/subjectMapping";

export default function WorldListScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { classNumber } = route.params;
  const subjects = classWorlds[classNumber] || [];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>
        Class {classNumber} - Select a World 🌍
      </Text>

      <View style={styles.grid}>
        {subjects.map((subject, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.card}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("World", { classNumber, subject })
            }
          >
            <Text style={styles.cardText}>{subject}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F6F7F8",
    flexGrow: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#111",
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#E3F2FD",
    paddingVertical: 25,
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1565C0",
    textAlign: "center",
  },
});
