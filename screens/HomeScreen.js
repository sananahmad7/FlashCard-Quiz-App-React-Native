// screens/HomeScreen.js
import React from "react";
import { View, Button, Text, StyleSheet, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Image style={styles.i1} source={require("../assets/two.jpg")} />
      <Text style={styles.t1}>Welcome to the Flashcard Quiz App!</Text>
      <View style={styles.b1}>
        <Button
          title="Add Flashcards"
          onPress={() => navigation.navigate("AddFlashcard")}
        />
      </View>
      <View style={styles.b1}>
        <Button
          title="Start Quiz"
          onPress={() => navigation.navigate("Quiz")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  t1: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#27bfd6",
    marginTop: 20,
  },
  b1: {
    marginTop: 30,
    margin: 25,
  },
  i1: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover", // Use cover to fill the background
  },
});

export default HomeScreen;
