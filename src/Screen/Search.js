import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import VideoCard from "../components/VideoCard";

export default function Search() {
  const [item, setItem] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="arrow-back" size={32} color={iconColor} />
        <TextInput
          style={styles.area}
          value={item}
          placeholder={"Search YouTube"}
          onChangeText={(text) => setItem(text)}
        />
        <Ionicons name="md-send" size={32} color={iconColor} />
      </View>
      <ScrollView>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </ScrollView>
    </View>
  );
}
const iconColor = "black";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    height: 50,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    elevation: 12,
    backgroundColor: "white",
  },
  area: {
    width: "75%",
    backgroundColor: "#e6e6e6",
    fontSize: 18,
    height: 32,
  },
});
