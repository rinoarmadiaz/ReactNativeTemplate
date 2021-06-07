import { SvgProps } from "react-native-svg";
import React from "react";
import HomeSVG from "src/assets/svg/Home.svg";
import ChartSVG from "src/assets/svg/Chart.svg";
import LeftArrowSVG from "src/assets/svg/LeftArrow.svg";

const HomeIcon = (props: SvgProps) => {
  const defaultProps = { ...props };
  return <HomeSVG {...defaultProps} />;
};

const ChartIcon = (props: SvgProps) => {
  const defaultProps = { ...props };
  return <ChartSVG {...defaultProps} />;
};

const LeftArrowIcon = (props: SvgProps) => {
  const defaultProps = {
    fill: !props.fill ? "#082F57" : props.fill,
    ...props
  };
  return <LeftArrowSVG {...defaultProps} />;
};

export default {
  HomeIcon,
  ChartIcon,
  LeftArrowIcon
};
