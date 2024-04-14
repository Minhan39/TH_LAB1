import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

const Square = (props) => {
  return (
    <View style={{ ...styles.square }}>
      <Text>{props.title}</Text>
    </View>
  );
};

const Exam_6 = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <ScrollView>
      {data.map((item, index) => (
        <Square key={index} title={`Square ${item}`} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 16,
    backgroundColor: "yellow",
  },
});

export default Exam_6;
