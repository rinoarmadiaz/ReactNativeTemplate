import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  ChartLandingLandingScreenProps,
  ChartLandingScreenState
} from "./types";

class ChartLandingScreen extends Component<
  ChartLandingLandingScreenProps,
  ChartLandingScreenState
> {
  constructor(props: ChartLandingLandingScreenProps) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{"Chart Landing"}</Text>
      </View>
    );
  }
}

export default ChartLandingScreen;
