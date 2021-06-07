import React, { Component } from "react";
import { StatusBar, View } from "react-native";
import FastImage from "react-native-fast-image";
import { SafeAreaView } from "react-native-safe-area-context";
import Fonts from "src/assets/fonts";
import Images from "src/assets/images/Images";
import Icons from "src/assets/svg/Icons";
import MainHeader from "src/components/Header";
import Text from "src/components/Text";
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
      <SafeAreaView>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <View style={{ flex: 1 }}>
          <MainHeader leftIcon={<Icons.LeftArrowIcon />} />
          <Text font={Fonts.bold}>{"Stock Detail"}</Text>
          <FastImage
            source={Images.appleIcon}
            style={{ width: 52, height: 52 }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default ChartLandingScreen;
