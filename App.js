import React from "react";
import AppNavigator from "./src/navigator/Navigator";
import { AppContextProvider } from "./src/context/AppContext";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <>
      <PaperProvider>
        <AppContextProvider>
          <AppNavigator />
        </AppContextProvider>
      </PaperProvider>
    </>
  );
}
