import React from "react";
import { FlatList, View, Text, SafeAreaView } from "react-native";

const firstnames = ["John", "Jane", "Doe", "Smith"];
const lastnames = ["Witch", "Doe", "Smith", "John"];

let data = [];
const renderData = () => {
  for (let i = 0; i < 20; i++) {
    data.push({
      id: i,
      firstname: firstnames[Math.round(Math.random() * 10) % 4],
      lastname: lastnames[Math.round(Math.random() * 10) % 4],
    });
  }
};

const Exam_8 = () => {
  renderData();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: "gray", padding: 16, margin: 8 }}>
            <Text>
              {item.firstname} {item.lastname}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Exam_8;
