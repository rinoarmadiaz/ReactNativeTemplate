import { SvgProps } from "react-native-svg";
import React from "react";
import HomeSVG from "src/assets/svg/Home.svg";
import ChartSVG from "src/assets/svg/Chart.svg";

const HomeIcon = (props: SvgProps) => {
  const defaultProps = { ...props };
  return <HomeSVG {...defaultProps} />;
};

const ChartIcon = (props: SvgProps) => {
  const defaultProps = { ...props };
  return <ChartSVG {...defaultProps} />;
};

export default {
  HomeIcon,
  ChartIcon
};
