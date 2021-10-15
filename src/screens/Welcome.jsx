import { Box, Button, FormControl, Input, Text } from "native-base";
import React, { useContext, useState } from "react";
import { ImageBackground } from "react-native";
import {
  useFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p";

import ImageBG from "../assets/imagebg.png";
import AppLoading from "expo-app-loading";
import { AppContext } from "../context/AppContext";

const Welcome = ({ navigation }) => {
  const { state, dispatch } = useContext(AppContext);
  const [name, setName] = useState("");

  const onSubmit = () => {
    dispatch({
      type: "LOGIN",
      payload: name,
    });
  };

  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground
      source={ImageBG}
      resizeMode="cover"
      blurRadius={5}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box p={10}>
        <FormControl alignItems="center" justifyContent="center" my={5}>
          <FormControl.Label>
            <Text
              fontSize={24}
              fontFamily="PressStart2P_400Regular"
              textAlign="center"
            >
              what name would you like to be called?
            </Text>
          </FormControl.Label>
          <Input
            onChangeText={(e) => console.log(e)}
            variant="unstyled"
            w="sm"
            fontSize={18}
            placeholder="Input Your Name..."
            borderRadius={12}
            p={2}
            textAlign="center"
            shadow="2"
            autoFocus={false}
          />
        </FormControl>

        <Button rounded={10}>
          <Text color="trueGray.200" fontWeight="bold" fontSize={18}>
            Submit
          </Text>
        </Button>
      </Box>
    </ImageBackground>
  );
};

export default Welcome;
