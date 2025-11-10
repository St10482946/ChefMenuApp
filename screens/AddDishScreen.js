// screens/AddDishscreen.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { addDish } from "../global/menu";

export default function AddDishScreen({ navigation }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("Starter");
  const [price, setPrice] = useState("");

  const addDishHandler = () => {
    if (!name.trim() || !description.trim() || !price.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    if (isNaN(price)) {
      Alert.alert("Error", "Price must be a number");
      return;
    }

    const newDish = {
      id: Date.now().toString(),
      name,
      description,
      course,
      price: Number(price),
    };

    addDish(newDish);
    Alert.alert("Success", `${newDish.name} added!`);
    setName(""); 
    setDescription(""); 
    setCourse("Starter"); 
    setPrice("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Dish</Text>

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

      <TouchableOpacity style={styles.button} onPress={addDishHandler}>
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { marginTop: 10 }]}
        onPress={() => navigation.navigate("ViewMenu")}
      >
        <Text style={styles.buttonText}>View Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { marginTop: 10 }]}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 8, marginBottom: 8 },
  button: { backgroundColor: "#0A3", padding: 12, borderRadius: 6 },
  buttonText: { color: "#fff", fontWeight: "bold", textAlign: "center" },
});
