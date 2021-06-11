import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constant from "expo-constants";

export default function VideoPlayer() {
  return (
    <View style={styles.container}>
      <Text>Video player</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
  },
});
