/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import AppContainer from "./routing/router";

const AppTheme = {
  dark: false,
  colors: {
    primary: "rgb(255, 255, 255)",
    background: "rgb(255, 255, 255)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)"
  }
};

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer theme={AppTheme}>
          <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
          <AppContainer />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
