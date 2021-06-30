import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

export default function Library() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Library page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
