import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Score = ({ score, total }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>
        Your Score: {score} / {total}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Score;
