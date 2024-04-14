import { View, Text, StyleSheet } from "react-native";

const Exam_1 = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ ...styles.text }}>Hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: "yellow",
    fontSize: 20,
    padding: 16,
  },
});

export default Exam_1;
