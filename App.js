import React, { useState, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import AddDishScreen from "./screens/AddDishScreen";
import GuestScreen from "./screens/GuestScreen";

export const MenuContext = createContext();

const Stack = createStackNavigator();

export default function App() {
  const [menuItems, setMenuItems] = useState([]);

  const addDish = (dish) => {
    setMenuItems(prev => [{ ...dish, id: Date.now().toString() }, ...prev]);
  };

  const removeDish = (id) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menuItems, addDish, removeDish }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddDish" component={AddDishScreen} options={{ title: "Add Dish" }} />
          <Stack.Screen name="Guest" component={GuestScreen} options={{ title: "Guest View" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuContext.Provider>
  );
}