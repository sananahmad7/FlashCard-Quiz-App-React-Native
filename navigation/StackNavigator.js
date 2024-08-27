// navigation/StackNavigator.js
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import QuizScreen from "../screens/QuizScreen";
import AddFCScreen from "../screens/AddFCScreen";
import { flashcards as initialFlashcards } from "../data/FlashCard.js";

const Stack = createStackNavigator();

export default function StackNavigator() {
  const [flashcards, setFlashcards] = useState(initialFlashcards);

  const addFlashcard = (newFlashcard) => {
    setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashcard]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Quiz">
          {(props) => <QuizScreen {...props} flashcards={flashcards} />}
        </Stack.Screen>
        <Stack.Screen name="AddFlashcard">
          {(props) => <AddFCScreen {...props} addFlashcard={addFlashcard} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
