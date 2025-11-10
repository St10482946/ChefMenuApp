import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import DishCard from "../components/DishCard";
import { getMenu, removeDish } from "../global/menu";

export default function ViewMenuScreen({ navigation }) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems([...getMenu()]);
  }, []);

  const deleteDish = (id) => {
    removeDish(id);
    setMenuItems([...getMenu()]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>View Menu</Text>

      {menuItems.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>No dishes added yet</Text>
      ) : (
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DishCard dish={item} onDelete={() => deleteDish(item.id)} />
          )}
        />
      )}

      <TouchableOpacity
        style={[styles.button, { marginTop: 20 }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  button: { backgroundColor: "#0A3", padding: 12, borderRadius: 6 },
  buttonText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
});