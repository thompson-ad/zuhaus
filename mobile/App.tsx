import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const getMoviesFromApiAsync = async () => {
  try {
    let response = await fetch(
      "http://192.168.1.249:8888/.netlify/functions/movies"
    );
    let json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.error(error);
  }
};

export default function App() {
  getMoviesFromApiAsync();
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
