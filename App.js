import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import screens
import HomeScreen from "./screens/Homescreen";
import AddDishScreen from "./screens/AddDishscreen";
import ViewMenuScreen from "./screens/ViewMenuscreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home - Christoffel Private Chef" }}
        />
        <Stack.Screen
          name="AddDish"
          component={AddDishScreen}
          options={{ title: "Add New Dish" }}
        />
        <Stack.Screen
          name="ViewMenu"
          component={ViewMenuScreen}
          options={{ title: "View Menu" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}