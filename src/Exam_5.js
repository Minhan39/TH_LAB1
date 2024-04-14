import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Square = (props) => {
  return (
    <View style={{ ...styles.square, backgroundColor: props.bgColor }}>
      <Text>{props.title}</Text>
    </View>
  );
};

const Exam_5 = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Square bgColor="red" title="Square 1" />
      <Square bgColor="blue" title="Square 2" />
      <Square bgColor="green" title="Square 3" />
    </View>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
  },
});

export default Exam_5;
