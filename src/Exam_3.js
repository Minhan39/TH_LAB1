import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

const Button = (props) => {
  return (
    <Pressable style={{ ...props.buttonStyle }} onPress={props.onPress}>
      <Text>{props.title}</Text>
    </Pressable>
  );
};

const Exam_3 = () => {
  const onPress_1 = () => {
    alert("Hello");
    Alert.alert("Hello");
  };

  const onPress_2 = () => {
    alert("Goodbye");
    Alert.alert("Goodbye");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="Click me 1"
        buttonStyle={{ ...styles.buttonStyle, backgroundColor: "red" }}
        onPress={() => onPress_1()}
      />
      <Button
        title="Click me 2"
        buttonStyle={{
          ...styles.buttonStyle,
          backgroundColor: "yellow",
          padding: 32,
        }}
        onPress={() => onPress_2()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
  },
});

export default Exam_3;
