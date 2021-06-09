import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Header from "../components/Header";

export default function Home() {
  return (
    <View style={styles.Home}>
      <Header />
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Home: {
    flex: 1,
  },
});
