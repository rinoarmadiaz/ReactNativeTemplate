import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import GlobalStyles from "src/configs/GlobalStyles";
import Text from "./Text";

export type MainHeaderProps = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  title?: string;
  isTransparent?: boolean;
  leftIcon?: React.ReactNode;
  rightPrimaryIcon?: React.ReactNode;
  rightSecondaryIcon?: React.ReactNode;
  leftIconPressed?: () => void;
  rightPrimaryIconPressed?: () => void;
  rightSecondaryIconPressed?: () => void;
};

const MainHeader = (props: MainHeaderProps) => {
  const {
    leftIcon,
    title,
    isTransparent,
    rightPrimaryIcon,
    rightSecondaryIcon,
    leftIconPressed,
    rightPrimaryIconPressed,
    rightSecondaryIconPressed
  } = props;
  const headerStyle: StyleProp<ViewStyle> = [
    styles.container,
    props.style,
    isTransparent && { backgroundColor: "transparent" }
  ];
  return (
    <View style={headerStyle}>
      {leftIcon && (
        <TouchableOpacity onPress={leftIconPressed}>
          {leftIcon}
        </TouchableOpacity>
      )}
      <View style={GlobalStyles.horizontalSpacing} />
      <Text style={styles.titleText}>{title}</Text>
      {rightSecondaryIcon && (
        <TouchableOpacity onPress={rightSecondaryIconPressed}>
          {rightSecondaryIcon}
        </TouchableOpacity>
      )}
      <View style={GlobalStyles.horizontalSpacing} />
      {rightPrimaryIcon && (
        <TouchableOpacity onPress={rightPrimaryIconPressed}>
          {rightPrimaryIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 16
  },
  titleText: {
    fontSize: 21,
    flex: 1
  }
});

export default MainHeader;
