import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function DishCard({ dish, onDelete }) {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>{dish.name}</Text>
        <TouchableOpacity onPress={onDelete}>
          <Text style={styles.delete}>❌</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.meta}>{dish.course} • R{dish.price}</Text>
      <Text style={styles.desc}>{dish.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  title: { fontSize: 18, fontWeight: "700", color: "#0A3" },
  meta: { fontSize: 14, color: "#666", marginVertical: 4 },
  desc: { fontSize: 14, color: "#333" },
  delete: { fontSize: 18, color: "red" },
});