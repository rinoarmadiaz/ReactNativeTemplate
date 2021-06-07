import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppScreens, ChartStackParamList } from "src/routing/types";

type ChartLandingScreenNavigationProp = StackNavigationProp<
  ChartStackParamList,
  AppScreens.Chart
>;
type ChartLandingScreenRouteProp = RouteProp<
  ChartStackParamList,
  AppScreens.Chart
>;

export type ChartLandingLandingScreenProps = {
  navigation: ChartLandingScreenNavigationProp;
  route: ChartLandingScreenRouteProp;
};

export type ChartLandingScreenState = {};
