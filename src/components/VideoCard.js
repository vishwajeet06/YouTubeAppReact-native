import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export default function VideoCard(props) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${props.videoId}/mqdefault.jpg`,
        }}
        style={styles.Image}
      />
      <View style={styles.detail}>
        <Text style={styles.Stitle} ellipsizeMode={"tail"} numberOfLines={3}>
          {props.title}
        </Text>
        <Text style={{ fontSize: 12 }}>{props.channel}</Text>
        <Text style={{ fontSize: 12 }}>Views</Text>
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
    fontSize: 18,
    width: Dimensions.get("screen").width / 2,
  },
});
