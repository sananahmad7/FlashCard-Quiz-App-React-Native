// screens/AddFCScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const AddFlashcardScreen = ({ navigation, addFlashcard }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAddFlashcard = () => {
    if (question && answer) {
      const newFlashcard = { question, answer };
      addFlashcard(newFlashcard);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Question"
        value={question}
        onChangeText={setQuestion}
      />
      <TextInput
        style={styles.input}
        placeholder="Answer"
        value={answer}
        onChangeText={setAnswer}
      />
      <Button title="Add Flashcard" onPress={handleAddFlashcard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default AddFlashcardScreen;
