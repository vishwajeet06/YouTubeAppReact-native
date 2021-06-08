import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Constant from "expo-constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  const iconColor = "#212121";

  return (
    <View style={styles.Header}>
      <View style={styles.logo}>
        <AntDesign name="youtube" size={32} color="red" style={styles.icon} />
        <Text style={styles.name}>YouTube</Text>
      </View>
      <View style={styles.icons}>
        <Ionicons name="md-videocam-sharp" size={28} color={iconColor} />
        <Ionicons name="md-search" size={28} color={iconColor} />
        <MaterialCommunityIcons
          name="account-circle"
          size={28}
          color={iconColor}
        />
      </View>
    </View>
  );
}
const iconColor = "#212121";

const styles = StyleSheet.create({
  Header: {
    height: 45,
    backgroundColor: "white",
    marginTop: Constant.statusBarHeight,
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    flexDirection: "row",
    margin: 5,
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    marginLeft: 5,
    fontWeight: "bold",
    color: iconColor,
  },
  icon: {
    marginLeft: 18,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 150,
  },
});
