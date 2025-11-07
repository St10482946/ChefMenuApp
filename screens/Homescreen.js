import React, { useContext, useMemo, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet, SafeAreaView } from "react-native";
import { MenuContext } from "../App";
import DishCard from "../components/DishCard";
import { calculateAverages } from "../utils/calculations";

export default function HomeScreen({ navigation }) {
  const { menuItems } = useContext(MenuContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredItems = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return menuItems.filter(dish => {
      const matchesCourse = filter === "All" || dish.course === filter;
      const matchesSearch = dish.name.toLowerCase().includes(term) || dish.description.toLowerCase().includes(term);
      return matchesCourse && matchesSearch;
    });
  }, [menuItems, filter, searchTerm]);

  const averages = calculateAverages(menuItems);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Christoffel — Private Chef</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("AddDish")}>
          <Text style={styles.navText}>Add Dish</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Guest")}>
          <Text style={styles.navText}>Guest View</Text>
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} placeholder="Search..." value={searchTerm} onChangeText={setSearchTerm} />

      <View style={styles.chipRow}>
        {["All", "Starter", "Main", "Dessert", "Beverage"].map(c => (
          <TouchableOpacity key={c} style={[styles.chip, filter === c && styles.chipSelected]} onPress={() => setFilter(c)}>
            <Text style={[styles.chipText, filter === c && styles.chipTextSelected]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryText}>Total items: {menuItems.length}</Text>
        <Text style={styles.summaryText}>Averages — Starter: {averages.Starter}</Text>
        <Text style={styles.summaryText}>Main: {averages.Main}</Text>
        <Text style={styles.summaryText}>Dessert: {averages.Dessert}</Text>
        <Text style={styles.summaryText}>Beverage: {averages.Beverage}</Text>
      </View>

      <FlatList
        style={{ marginTop: 8 }}
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DishCard item={item} showRemove={false} />}
        ListEmptyComponent={<Text style={{ textAlign: "center", marginTop: 20 }}>{menuItems.length === 0 ? "No dishes yet." : "No matching dishes."}</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 8 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 8, marginBottom: 8 },
  chipRow: { flexDirection: "row", flexWrap: "wrap", marginBottom: 8 },
  chip: { paddingHorizontal: 12, paddingVertical: 6, backgroundColor: "#eee", borderRadius: 16, marginRight: 6, marginBottom: 6 },
  chipSelected: { backgroundColor: "#0A3" },
  chipText: { color: "#000" },
  chipTextSelected: { color: "#fff" },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 8 },
  navButton: { backgroundColor: "#0A3", padding: 10, borderRadius: 8 },
  navText: { color: "#fff", fontWeight: "600" },
  summary: { marginTop: 8, padding: 10, borderRadius: 6, backgroundColor: "#f6f6f6" },
  summaryText: { fontSize: 12, marginBottom: 4 }
});