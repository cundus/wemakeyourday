import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>this is Home</Text>
      <Pressable onPress={() => navigation.push("Joke")}>
        <Text>Go to Joke</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
