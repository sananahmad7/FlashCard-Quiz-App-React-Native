// components/Quiz.js
import React, { useState } from "react";
import { View, Button, Text, TextInput } from "react-native"; // Import TextInput here
import Flashcard from "./Flashcard";

const Quiz = ({ flashcards }) => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  const handleCorrect = () => {
    setScore(score + 1);
    handleNext();
  };

  const handleNext = () => {
    setIndex(index + 1);
    setUserAnswer(""); // Reset answer for the next question
  };

  const handleCheckAnswer = () => {
    if (userAnswer.toLowerCase() === flashcards[index].answer.toLowerCase()) {
      handleCorrect();
    } else {
      handleNext();
    }
  };

  if (index >= flashcards.length) {
    return (
      <View>
        <Text>
          Your score: {score} / {flashcards.length}
        </Text>
      </View>
    );
  }

  return (
    <View>
      <Flashcard
        question={flashcards[index].question}
        answer={flashcards[index].answer}
      />
      <TextInput
        placeholder="Your answer"
        value={userAnswer}
        onChangeText={setUserAnswer}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }} // Optional styling
      />
      <Button title="Check Answer" onPress={handleCheckAnswer} />
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

export default Quiz;
