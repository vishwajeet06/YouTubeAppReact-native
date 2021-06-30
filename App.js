import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/Screen/Home";
import Search from "./src/Screen/Search";
import Constant from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import VideoPlayer from "./src/Screen/VideoPlayer";
import Explore from "./src/Screen/Explore";
import Subscribe from "./src/Screen/Subscribe";
import Library from "./src/Screen/Library";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Explore") {
            iconName = "explore";
          } else if (route.name === "Subscribe") {
            iconName = "subscriptions";
          } else if (route.name === "Library") {
            iconName = "video-library";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "red",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Subscribe" component={Subscribe} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="RootHome" component={RootHome} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Videoplayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
  },
});
