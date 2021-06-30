import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

export default function Subscribe() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Subscribe page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
