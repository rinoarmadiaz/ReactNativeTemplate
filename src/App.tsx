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

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar barStyle={"light-content"} />
          <AppContainer />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
