import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import VideoCard from "../components/VideoCard";
import Constant from "expo-constants";
// import { useNavigation } from "@react-navigation/core";

const API_KEY = "AIzaSyAuy2LIqaHtRnZOMScEKnq6FXLWixB8w_A";

export default function Search({ navigation }) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState([]);

  const fetchData = (item) => {
    // const navigation = useNavigation();
    setLoading(true);
    const API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=30&q=${item}&type=video&key=${API_KEY}`;
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        // console.log(data);
        setVideoData(data.items);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons
          name="arrow-back"
          size={32}
          color={iconColor}
          onPress={() => navigation.goBack()}
        />
        <TextInput
          style={styles.area}
          value={value}
          placeholder={"Search YouTube"}
          onChangeText={(text) => setValue(text)}
        />
        <Ionicons
          name="md-send"
          size={32}
          color={iconColor}
          onPress={() => fetchData(value)}
        />
      </View>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="black"
          style={{ marginTop: 30 }}
        />
      ) : null}

      <FlatList
        data={videoData}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => {
          return (
            <VideoCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
      />
    </View>
  );
}
const iconColor = "gray";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant.statusBarHeight,
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
