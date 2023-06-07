import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Calculator = () => {
  const [result, setResult] = useState<string>("");

  const handleNumberButtonPress = (num: string) => {
    setResult((prevResult) => prevResult + num);
  };

  const handleOperatorButtonPress = (operator: string) => {
    setResult((prevResult) => prevResult + operator);
  };

  const handleClearButtonPress = () => {
    setResult("");
  };

  const handleEqualPress = () => {
    try {
      const calculatedResult = eval(result);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const renderButton = (
    text: string,
    onPress: () => void,
    buttonColor: string
  ) => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: buttonColor }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {renderButton("1", () => handleNumberButtonPress("1"), "#4CAF50")}
        {renderButton("2", () => handleNumberButtonPress("2"), "#4CAF50")}
        {renderButton("3", () => handleNumberButtonPress("3"), "#4CAF50")}
        {renderButton("C", () => handleClearButtonPress(), "#F44336")}
        {renderButton("4", () => handleNumberButtonPress("4"), "#4CAF50")}
        {renderButton("5", () => handleNumberButtonPress("5"), "#4CAF50")}
        {renderButton("6", () => handleNumberButtonPress("6"), "#4CAF50")}
        {renderButton("+", () => handleOperatorButtonPress("+"), "#FF9800")}
        {renderButton("7", () => handleNumberButtonPress("7"), "#4CAF50")}
        {renderButton("8", () => handleNumberButtonPress("8"), "#4CAF50")}
        {renderButton("9", () => handleNumberButtonPress("9"), "#4CAF50")}
        {renderButton("-", () => handleOperatorButtonPress("-"), "#FF9800")}
        {renderButton("0", () => handleNumberButtonPress("0"), "#4CAF50")}
        {renderButton("/", () => handleOperatorButtonPress("/"), "#FF9800")}
        {renderButton("*", () => handleOperatorButtonPress("*"), "#FF9800")}
        {renderButton("=", () => handleEqualPress(), "#2196F3")}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  resultContainer: {
    marginBottom: 20,
  },
  resultText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "20%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
    margin: 5,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 3,
    color: "white",
  },
});

export default Calculator;
