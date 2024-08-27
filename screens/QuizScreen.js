// screens/QuizScreen.js
import React from "react";
import { View } from "react-native";
import Quiz from "../components/Quiz.js";

const QuizScreen = ({ flashcards }) => {
  return (
    <View>
      <Quiz flashcards={flashcards} />
    </View>
  );
};

export default QuizScreen;
