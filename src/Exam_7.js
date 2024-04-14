import React from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

const Exam_7 = () => {
  const [name, setName] = React.useState("");
  const onPress = () => {
    alert(`Hello ${name}!`);
    Alert.alert(`Hello ${name}!`);
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "bold" }}>What is your name?</Text>
      <TextInput
        placeholder="John Witch"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ ...styles.input }}
      />
      <Button title="Say hello" onPress={() => onPress()} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
});

export default Exam_7;
