import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Constant from "expo-constants";
import { useNavigation } from "@react-navigation/core";
import Search from "../Screen/Search";

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.Header}>
      <View style={styles.logo}>
        <AntDesign name="youtube" size={32} color="red" style={styles.icon} />
        <Text style={styles.name}>YouTube</Text>
      </View>
      <View style={styles.icons}>
        <FontAwesome5 name="chromecast" size={iconSize} color={iconColor} />
        <Ionicons name="md-videocam-sharp" size={iconSize} color={iconColor} />
        <Ionicons
          name="md-search"
          size={iconSize}
          color={iconColor}
          onPress={() => navigation.navigate("Search")}
        />
        <MaterialCommunityIcons
          name="account-circle"
          size={iconSize}
          color={iconColor}
        />
      </View>
    </View>
  );
}
const iconColor = "gray";
const iconSize = 24;

const styles = StyleSheet.create({
  Header: {
    marginTop: Constant.statusBarHeight,
    height: 50,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 12,
  },
  logo: {
    flexDirection: "row",
    margin: 5,
    // alignItems: "center",
  },
  name: {
    fontSize: 22,
    marginLeft: 5,
    fontWeight: "400",
    color: iconColor,
  },
  icon: {
    marginLeft: 18,
  },
  icons: {
    margin: 5,
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-around",
    width: 150,
  },
});
