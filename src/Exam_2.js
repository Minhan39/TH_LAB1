import { Alert, Button, View } from "react-native";

const Exam_2 = () => {
  const onPress = () => {
    alert("Hello");
    Alert.alert("Hello");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Click me" onPress={() => onPress()} />
    </View>
  );
};

export default Exam_2;
