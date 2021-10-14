import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  useFonts,
  SourceSansPro_300Light,
  SourceSansPro_400Regular,
  SourceSansPro_600SemiBold,
  SourceSansPro_900Black,
} from "@expo-google-fonts/source-sans-pro";
import { AppContext } from "../context/AppContext";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Home from "../screens/Home";
import Joke from "../screens/Joke";
import Welcome from "../screens/Welcome";

const Stack = createStackNavigator();

export default function AppNavigator() {
  const { state, dispatch } = React.useContext(AppContext);
  let [fontsLoaded] = useFonts({
    SourceSansPro_300Light,
    SourceSansPro_400Regular,
    SourceSansPro_600SemiBold,
    SourceSansPro_900Black,
  });

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem("user");
      if (token) {
        dispatch({
          type: "LOGIN",
          payload: token,
        });
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    checkToken();
    fontsLoaded;
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#60A3D9",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "SourceSansPro_600SemiBold",
            fontWeight: "bold",
            fontSize: 24,
          },
        }}
      >
        {!state.isLogin ? (
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerMode: false,
            }}
          />
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Joke" component={Joke} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
