import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Flashcard = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.text}>{showAnswer ? answer : question}</Text>
      <TouchableOpacity onPress={() => setShowAnswer(!showAnswer)}>
        <Text style={styles.toggleText}>
          {showAnswer ? "Show Question" : "Show Answer"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  text: {
    fontSize: 18,
  },
  toggleText: {
    marginTop: 10,
    color: "blue",
  },
});

export default Flashcard;
