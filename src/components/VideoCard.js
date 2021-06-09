import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function VideoCard() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/12/26/05/53/wood-1108307_1280.jpg",
        }}
        style={styles.Image}
      />
      <View style={styles.detail}>
        <Text style={styles.Stitle} ellipsizeMode={"tail"} numberOfLines={3}>
          This is song gewhg ghreiogh yehri
        </Text>
        <Text style={{ fontSize: 10 }}>Channel Name</Text>
        <Text style={{ fontSize: 10 }}>Views</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 8,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  Image: {
    width: "45%",
    height: 100,
  },
  detail: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 15,
  },
  Stitle: {
    fontSize: 15,
    width: Dimensions.get("screen").width / 2,
  },
});
