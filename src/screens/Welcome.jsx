import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import ImageBG from "../assets/imagebg.png";

const Welcome = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={ImageBG}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text>this is Welcome</Text>
      </ImageBackground>
    </View>
  );
};

export default Welcome;
