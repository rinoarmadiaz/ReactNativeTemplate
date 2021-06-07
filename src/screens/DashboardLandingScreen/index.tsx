import React, { Component } from "react";
import { Text, View } from "react-native";
import {
  DashboardLandingScreenProps,
  DashboardLandingScreenState
} from "./types";

class DashboardLandingScreen extends Component<
  DashboardLandingScreenProps,
  DashboardLandingScreenState
> {
  constructor(props: DashboardLandingScreenProps) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Dashboard</Text>
      </View>
    );
  }
}

export default DashboardLandingScreen;
