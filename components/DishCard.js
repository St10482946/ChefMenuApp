import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { MenuContext } from "../App";

export default function DishCard({ item, showRemove = false }) {
  const { removeDish } = useContext(MenuContext);

  const handleRemove = () => {
    Alert.alert("Remove", `Remove "${item.name}"?`, [
      { text: "Cancel", style: "cancel" },
      { text: "Remove", style: "destructive", onPress: () => removeDish(item.id) }
    ]);
  };

  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.meta}>{item.course} • R{item.price}</Text>
        <Text numberOfLines={2} style={styles.desc}>{item.description}</Text>
      </View>
      {showRemove && (
        <TouchableOpacity style={styles.removeButton} onPress={handleRemove}>
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: "row", borderWidth: 1, borderColor: "#ddd", padding: 12, borderRadius: 8, marginBottom: 10, alignItems: "center" },
  title: { fontSize: 16, fontWeight: "700" },
  meta: { fontSize: 12, color: "#666", marginTop: 4 },
  desc: { fontSize: 12, color: "#333", marginTop: 6 },
  removeButton: { marginLeft: 12, backgroundColor: "#ff4d4f", paddingVertical: 6, paddingHorizontal: 8, borderRadius: 6 },
  removeText: { color: "#fff", fontWeight: "600" }
});