import React from "react";
import AppNavigator from "./src/navigator/Navigator";
import { AppContextProvider } from "./src/context/AppContext";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <>
      <NativeBaseProvider>
        <AppContextProvider>
          <AppNavigator />
        </AppContextProvider>
      </NativeBaseProvider>
    </>
  );
}
