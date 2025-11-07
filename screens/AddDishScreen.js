import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { MenuContext } from "../App";

export default function AddDishScreen({ navigation }) {
  const { addDish } = useContext(MenuContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("Starter");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!name.trim() || !description.trim() || !price.trim()) {
      Alert.alert("Please fill all fields");
      return;
    }
    const newDish = { name, description, course, price: Number(price) };
    addDish(newDish);

    // clear fields
    setName("");
    setDescription("");
    setCourse("Starter");
    setPrice("");

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Add New Dish</Text>

      <TextInput style={styles.input} placeholder="Dish Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
      <Picker selectedValue={course} onValueChange={setCourse} style={styles.picker}>
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
        <Picker.Item label="Beverage" value="Beverage" />
      </Picker>
      <TextInput style={styles.input} placeholder="Price (ZAR)" keyboardType="numeric" value={price} onChangeText={setPrice} />
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add Dish</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 20, fontWeight: "700", marginBottom: 12 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, padding: 8, marginBottom: 8 },
  picker: { borderWidth: 1, borderColor: "#ccc", borderRadius: 6, marginBottom: 8 },
  button: { backgroundColor: "#0A3", padding: 12, borderRadius: 6 },
  buttonText: { color: "#fff", fontWeight: "bold", textAlign: "center" }
});