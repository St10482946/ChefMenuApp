// components/DishCard.js
import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MenuContext } from "../App";

export default function DishCard({ item, showRemove = false }) {
  const { removeDish } = useContext(MenuContext);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.desc}>{item.description}</Text>
          <Text style={styles.meta}>{item.course} • R{Number(item.price).toFixed(2)}</Text>
        </View>
        {showRemove ? (
          <TouchableOpacity style={styles.remove} onPress={() => removeDish(item.id)}>
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 12, borderWidth: 1, borderColor: "#eee", borderRadius: 8, marginVertical: 6, backgroundColor: "#fff" },
  row: { flexDirection: "row", alignItems: "center" },
  name: { fontSize: 16, fontWeight: "700" },
  desc: { color: "#444", marginTop: 4 },
  meta: { marginTop: 6, fontSize: 12, color: "#333" },
  remove: { backgroundColor: "#f33", padding: 8, borderRadius: 6, marginLeft: 8 },
  removeText: { color: "#fff", fontWeight: "700" }
});