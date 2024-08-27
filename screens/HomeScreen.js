// screens/HomeScreen.js
import React from "react";
import { View, Button, Text } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Flashcard Quiz App!</Text>
      <Button
        title="Add Flashcards"
        onPress={() => navigation.navigate("AddFlashcard")}
      />
      <Button title="Start Quiz" onPress={() => navigation.navigate("Quiz")} />
    </View>
  );
};

export default HomeScreen;
