import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/Screen/Home";
import Search from "./src/Screen/Search";
import Constant from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <Search />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
  },
});
