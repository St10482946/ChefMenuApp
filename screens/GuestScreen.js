// screens/GuestScreen.js
import React, { useContext, useState, useMemo } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { MenuContext } from "../App";
import DishCard from "../components/DishCard";

export default function GuestScreen() {
  const { menuItems } = useContext(MenuContext);
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    return menuItems.filter(m => filter === "All" || m.course === filter);
  }, [menuItems, filter]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Guest - Filter by Course</Text>

      <View style={styles.chipRow}>
        {["All", "Starter", "Main", "Dessert", "Beverage"].map(c => (
          <TouchableOpacity key={c} style={[styles.chip, filter === c && styles.chipSelected]} onPress={() => setFilter(c)}>
            <Text style={[styles.chipText, filter === c && styles.chipTextSelected]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DishCard item={item} showRemove={true} />}
        ListEmptyComponent={<Text style={{ textAlign: "center", marginTop: 20 }}>No dishes available.</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 18, fontWeight: "700" },
  chipRow: { flexDirection: "row", flexWrap: "wrap", marginVertical: 8 },
  chip: { paddingHorizontal: 12, paddingVertical: 6, backgroundColor: "#eee", borderRadius: 16, marginRight: 6, marginBottom: 6 },
  chipSelected: { backgroundColor: "#0A3" },
  chipText: { color: "#000" },
  chipTextSelected: { color: "#fff" },
});
