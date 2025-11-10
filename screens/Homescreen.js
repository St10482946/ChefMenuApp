import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, ScrollView } from "react-native";
import { getMenu, removeDish } from "../global/menu";
import DishCard from "../components/DishCard";

const { width } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const [menuItems, setMenuItems] = useState([]);
  const [filter, setFilter] = useState("All");
  const courses = ["Starter", "Main", "Dessert", "Beverage"];

  // Update menu when screen loads
  useEffect(() => {
    setMenuItems([...getMenu()]);
  }, []);

  // Delete dish
  const deleteDish = (id) => {
    removeDish(id);
    setMenuItems([...getMenu()]);
  };

  // Filter menu items
  const filteredItems = [];
  for (let i = 0; i < menuItems.length; i++) {   // for loop
    if (filter === "All" || menuItems[i].course === filter) {
      filteredItems.push(menuItems[i]);
    }
  }

  // Calculate average price by course using nested for + for-in loops
  const averagePriceByCourse = [];
  for (let i = 0; i < courses.length; i++) {   // outer for loop
    let sum = 0;
    let count = 0;

    let index = 0;
    while (index < menuItems.length) {          // while loop
      if (menuItems[index].course === courses[i]) {
        // for-in loop over dish properties just as an example
        for (let key in menuItems[index]) {     // for-in loop
          if (key === "price") sum += menuItems[index][key];
        }
        count++;
      }
      index++;
    }

    const avg = count === 0 ? 0 : (sum / count).toFixed(2);
    averagePriceByCourse.push({ course: courses[i], avg });
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Christoffel — Private Chef</Text>

      {/* Navigation Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddDish")}>
          <Text style={styles.buttonText}>Add Dish</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ViewMenu")}>
          <Text style={styles.buttonText}>View Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Filter Chips */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
        {["All", "Starter", "Main", "Dessert", "Beverage"].map((c) => (
          <TouchableOpacity
            key={c}
            style={[styles.chip, filter === c && styles.chipSelected]}
            onPress={() => setFilter(c)}
          >
            <Text style={[styles.chipText, filter === c && { color: "#fff" }]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Menu Items */}
      {filteredItems.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 20, fontSize: 16 }}>
          {menuItems.length === 0 ? "No dishes added yet" : "No matching dishes found"}
        </Text>
      ) : (
        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <DishCard dish={item} onDelete={() => deleteDish(item.id)} />}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}

      {/* Average Prices */}
      <View style={styles.avgContainer}>
        <Text style={styles.avgHeader}>Average Price by Course</Text>
        {averagePriceByCourse.map((c) => (
          <Text key={c.course} style={styles.avgText}>
            {c.course}: R{c.avg}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", padding: 16 },
  header: { fontSize: 26, fontWeight: "bold", marginBottom: 16, color: "#0A3" },
  buttonRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 16 },
  button: { backgroundColor: "#0A3", padding: 14, borderRadius: 10, width: width * 0.45 },
  buttonText: { color: "#fff", fontWeight: "bold", textAlign: "center", fontSize: 16 },
  chip: { paddingHorizontal: 16, paddingVertical: 8, backgroundColor: "#eee", borderRadius: 20, marginRight: 10 },
  chipSelected: { backgroundColor: "#0A3" },
  chipText: { fontSize: 14, color: "#000" },
  avgContainer: { marginTop: 20, padding: 16, backgroundColor: "#fff", borderRadius: 10 },
  avgHeader: { fontSize: 18, fontWeight: "600", marginBottom: 8 },
  avgText: { fontSize: 16, marginBottom: 4 },
});