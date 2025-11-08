// App.js
import React, { createContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AddDishScreen from "./screens/AddDishScreen";
import GuestScreen from "./screens/GuestScreen";

export const MenuContext = createContext();

const Stack = createNativeStackNavigator();

export default function App() {
  const [menuItems, setMenuItems] = useState([]);

  const addDish = (dish) => {
    const newDish = {
      ...dish,
      id: Date.now().toString(),
    };
    setMenuItems(prev => [newDish, ...prev]);
  };

  const removeDish = (id) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menuItems, addDish, removeDish }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Christoffel — Menu" }}/>
          <Stack.Screen name="AddDish" component={AddDishScreen} options={{ title: "Add Dish" }}/>
          <Stack.Screen name="Guest" component={GuestScreen} options={{ title: "Guest View" }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </MenuContext.Provider>
  );
}