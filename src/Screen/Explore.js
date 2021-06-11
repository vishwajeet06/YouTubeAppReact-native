import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

export default function Explore() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Explore screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
