import React from "react";
import { Button, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import TicTacToe from "./components/TicTacToe";
import Calculator from "./components/Calculatror";

// const Stack = createStackNavigator();

// function CalculatorScreen({ navigation }: { navigation: any }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Calculator Screen</Text>
//       <Button
//         onPress={() => navigation.navigate(Calculator)}
//         title="Go to Calculator"
//       />
//     </View>
//   );
// }

// function TicTacToeScreen({ navigation }: { navigation: any }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Tic Tac Toe Screen</Text>
//       <Button
//         onPress={() => navigation.navigate(TicTacToe)}
//         title="Go to Tic Tac Toe game"
//       />
//     </View>
//   );
// }

//-------------------------------------------------
 const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";
          if (route.name === "Calculator") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "TicTacToe") {
            iconName = focused ? "ios-list-outline" : "ios-list";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
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

//-------------------------------------------------

// function NotificationsScreen({ navigation }: { navigation: any }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>No New Notifications!</Text>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Calculator">
        <Drawer.Screen name="Calculator" component={Calculator} />
        <Drawer.Screen name="Tic Tac Toe" component={TicTacToe} />        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
