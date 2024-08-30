// screens/QuizScreen.js
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Quiz from "../components/Quiz.js";

const QuizScreen = ({ flashcards }) => {
  return (
    <View>
      <Quiz flashcards={flashcards} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default QuizScreen;
