import React, { Component } from "react";
import { Text, View } from "react-native";
import Fonts from "src/assets/fonts";
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
        <Text style={[Fonts.bold]}>{"Chart Landing"}</Text>
      </View>
    );
  }
}

export default ChartLandingScreen;
