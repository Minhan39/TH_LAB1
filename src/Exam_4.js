import React from "react";
import { View, Text, Button } from "react-native";

const Exam_4 = () => {
  const [count, setCount] = React.useState(0);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ paddingBottom: 16 }}>
        you pressed the button {count} times
      </Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Exam_4;
