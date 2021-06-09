import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Card() {
  return (
    <View style={styles.Card}>
      <View>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/12/26/05/53/wood-1108307_1280.jpg",
          }}
          style={styles.Image}
        />
      </View>
      <View style={styles.describ}>
        <View style={styles.iconChannel}>
          <MaterialCommunityIcons
            name="account-circle"
            size={40}
            color="black"
          />
        </View>
        <View style={styles.titles}>
          <Text ellipsizeMode={"tail"} numberOfLines={2} style={styles.title}>
            title the visbesjakbdjkf
          </Text>
          <View style={styles.view}>
            <View>
              <Text>Channel name</Text>
            </View>
            <View>
              <Text>Views</Text>
            </View>
            <View>
              <Text>Upload time</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Card: {
    marginTop: 8,
    marginBottom: 2,
  },
  Image: {
    width: "100%",
    height: 200,
  },
  describ: {
    flexDirection: "row",
    margin: 5,
  },
  iconChannel: {
    alignItems: "center",
    justifyContent: "center",
  },
  titles: {
    marginLeft: 10,
    flexDirection: "column",
    width: Dimensions.get("screen").width,
  },
  title: {
    fontSize: 20,
    width: "80%",
  },
  view: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "75%",
  },
});
