
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TicTacToe from "./components/TicTacToe";
import Calculator from "./components/Calculatror";
import { EvilIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: "search" | "link" | "image" | "calendar" | "star" | "chart" = "star"; // Default icon name
          if (route.name === "Calculator") {
            iconName = focused ? "calendar" : "star"; // Calculator icon
          } else if (route.name === "TicTacToe") {
            iconName = focused ? "chart" : "star"; // TicTacToe icon
          }
          return <EvilIcons name={iconName} size={size} color={color} />;
        },
        tabBarOptions: {
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        },
      })}
    >
      <Tab.Screen name="Calculator" component={Calculator} />
      <Tab.Screen name="TicTacToe" component={TicTacToe} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Calculator" component={Calculator} />
        <Drawer.Screen name="Tic Tac Toe" component={TicTacToe} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;




