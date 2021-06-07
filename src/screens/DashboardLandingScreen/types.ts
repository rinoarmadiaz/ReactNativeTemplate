import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppScreens, DashboardStackParamList } from "src/routing/types";

type DashboardLandingScreenNavigationProp = StackNavigationProp<
  DashboardStackParamList,
  AppScreens.Dashboard
>;
type DashboardLandingScreenRouteProp = RouteProp<
  DashboardStackParamList,
  AppScreens.Dashboard
>;

export type DashboardLandingScreenProps = {
  navigation: DashboardLandingScreenNavigationProp;
  route: DashboardLandingScreenRouteProp;
};

export type DashboardLandingScreenState = {};
