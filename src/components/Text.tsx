import React from "react";
import {
  StyleProp,
  Text as TextReactNative,
  TextProps,
  TextStyle
} from "react-native";

interface TextViewProps extends TextProps {
  children: React.ReactNode;
  font?: StyleProp<TextStyle>;
}

const Text = (props: TextViewProps) => {
  const { style, children, font } = props;
  const textStyles: StyleProp<TextStyle> = [
    { fontFamily: "Gilroy-Regular", fontSize: 15 },
    font,
    style
  ];
  return (
    <TextReactNative {...props} style={textStyles}>
      {children}
    </TextReactNative>
  );
};

export default Text;
