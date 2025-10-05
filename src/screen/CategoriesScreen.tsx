import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Tabs"
>;

const classes = [6, 7, 8, 9, 10, 11, 12];

export default function CategoriesScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleClassSelect = (classNumber: number) => {
    navigation.navigate("WorldList", { classNumber });
  };

  const navigation = useNavigation<any>(); // ✅ Add <any> to fix TypeScript issues

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../assets/class-illustration.jpg")}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Choose Your Class</Text>
        <Text style={styles.subtitle}>
          Select your grade to access tailored quizzes and learning materials.
        </Text>

        <View style={styles.grid}>
          {classes.map((cls) => (
            <TouchableOpacity
              key={cls}
              style={styles.classButton}
              onPress={() => handleClassSelect(cls)}
            >
              <Text style={styles.classText}>Class {cls}th</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#fff" },
  container: { alignItems: "center", padding: 20 },
  image: { width: "100%", height: 180, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: "700", textAlign: "center", marginBottom: 10 },
  subtitle: { fontSize: 14, textAlign: "center", color: "#666", marginBottom: 30 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  classButton: {
    backgroundColor: "#E3F2FD",
    width: "48%",
    padding: 20,
    marginBottom: 15,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#BBDEFB",
  },
  classText: { color: "#2196F3", fontSize: 16, fontWeight: "600" },
});
