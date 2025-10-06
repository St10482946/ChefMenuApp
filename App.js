import React, { useState, useMemo } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("Starter");
  const [price, setPrice] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");

  // Add dish handler
  const addDish = () => {
    if (!name.trim() || !description.trim() || !price.trim()) return;
    const newDish = {
      id: Date.now().toString(),
      name,
      description,
      course,
      price: Number(price),
    };
    setMenuItems([newDish, ...menuItems]);
    setName("");
    setDescription("");
    setCourse("Starter");
    setPrice("");
  };

  // Filter + search
  const filteredItems = useMemo(() => {
    return menuItems.filter((dish) => {
      const matchesCourse = filter === "All" || dish.course === filter;
      const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCourse && matchesSearch;
    });
  }, [menuItems, filter, searchTerm]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Christoffel — Private Chef</Text>

      {/* Search */}
      <TextInput
        style={styles.input}
        placeholder="Search dishes..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      {/* Filter Chips */}
      <View style={styles.chipRow}>
        {["All", "Starter", "Main", "Dessert", "Beverage"].map((c) => (
          <TouchableOpacity
            key={c}
            style={[styles.chip, filter === c && styles.chipSelected]}
            onPress={() => setFilter(c)}
          >
            <Text style={styles.chipText}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Add Dish Form (Part 2 only on Home) */}
      <Text style={styles.subHeader}>Add New Dish</Text>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Picker selectedValue={course} onValueChange={setCourse} style={styles.input}>
        <Picker.item label="Select Course" value="" />
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
        <Picker.Item label="Beverage" value="Beverage" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Price (ZAR)"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <TouchableOpacity style={styles.button} onPress={addDish}>
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>

      {/* Menu List */}
      {filteredItems.length === 0 ? (
  <Text style={{textAlign: "center", marginTop: 20}}>No dishes added yet</Text>
) : (
  <FlatList
    data={filteredItems}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <View style={styles.card}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.meta}>{item.course} • R{item.price}</Text>
        <Text numberOfLines={2} style={styles.desc}>{item.description}</Text>
      </View>
    )}
  />
)}
      /{">"}

      {/* Total Items */}
      <Text style={[styles.footer, {color: "#0A3"}]}>Total items: {menuItems.length}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 8 },
  subHeader: { fontSize: 16, fontWeight: "600", marginVertical: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 8,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#0A3",
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
  },
  buttonText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
  chipRow: { flexDirection: "row", marginVertical: 8, flexWrap: "wrap" },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "#eee",
    borderRadius: 16,
    marginRight: 6,
    marginBottom: 6,
  },
  chipSelected: { backgroundColor: "#0A3" },
  chipText: { color: "#000" },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  title: { fontSize: 16, fontWeight: "700" },
  meta: { fontSize: 12, color: "#666", marginTop: 4 },
  desc: { fontSize: 12, color: "#333", marginTop: 6 },
  footer: { fontSize: 14, fontWeight: "600", marginTop: 10 },
});