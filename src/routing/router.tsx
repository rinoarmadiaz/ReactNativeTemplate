import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import Icons from "src/assets/svg/Icons";
import ChartLandingScreen from "src/screens/ChartLandingScreen";
import DashboardLandingScreen from "src/screens/DashboardLandingScreen";
import { AppScreens, RootTabParamList } from "./types";

const RootTab = createBottomTabNavigator<RootTabParamList>();

const RootTabNavigator = () => (
  <RootTab.Navigator
    initialRouteName={AppScreens.Dashboard}
    tabBarOptions={{ showLabel: false }}>
    <RootTab.Screen
      name={AppScreens.Dashboard}
      component={DashboardLandingScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <Icons.HomeIcon stroke={focused ? "#082F57" : "#A3B1BE"} />
        )
      }}
    />

    <RootTab.Screen
      name={AppScreens.Chart}
      component={ChartLandingScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <Icons.ChartIcon stroke={focused ? "#082F57" : "#A3B1BE"} />
        )
      }}
    />
  </RootTab.Navigator>
);

const RootStack = createStackNavigator();
const RootStackNavigator = () => (
  <RootStack.Navigator headerMode={"none"}>
    <RootStack.Screen
      name={AppScreens.Dashboard}
      component={RootTabNavigator}
    />
  </RootStack.Navigator>
);

export default RootStackNavigator;
