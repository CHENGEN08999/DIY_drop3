import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import PointsIcon2 from "../assets/Points-Icon2.svg";
import Button1 from "./Button1";
import {
  Color,
  Padding,
  Gap,
  StyleVariable,
  FontFamily,
} from "../GlobalStyles";

const PointsContainer = () => {
  return (
    <View style={[styles.pointsContainer, styles.pointsContainerFlexBox]}>
      <View style={styles.pointsInfo}>
        <Text style={[styles.pointsLabel, styles.pointsFlexBox]}>
          Total Points Balance
        </Text>
        <View
          style={[styles.pointsValueContainer, styles.pointsContainerFlexBox]}
        >
          <PointsIcon2 style={styles.pointsIcon} width={27} height={27} />
          <Text style={[styles.pointsValue, styles.pointsFlexBox]}>2,450</Text>
        </View>
      </View>
      <Button1 />
    </View>
  );
};

const styles = StyleSheet.create({
  pointsContainerFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  pointsFlexBox: {
    textAlign: "left",
    color: Color.primary100,
  },
  pointsContainer: {
    justifyContent: "space-between",
    paddingHorizontal: Padding.padding_20,
    paddingVertical: Padding.padding_0,
    gap: -65,
    zIndex: 2,
  },
  pointsInfo: {
    width: 221,
    gap: Gap.gap_2,
  },
  pointsLabel: {
    fontSize: StyleVariable.typographyBodyMediumSize,
    lineHeight: StyleVariable.typographyBodyMediumLeading,
    fontWeight: StyleVariable.typographyBodyMediumWeight,
    fontFamily: FontFamily.outfitMedium,
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.primary100,
  },
  pointsValueContainer: {
    gap: Gap.gap_6,
  },
  pointsIcon: {
    height: 27,
    width: 27,
  },
  pointsValue: {
    height: 35,
    width: 128,
    fontSize: StyleVariable.typographyHeadingH2Size,
    letterSpacing: StyleVariable.typographyHeadingH2Tracking,
    lineHeight: StyleVariable.typographyHeadingH2Leading,
    fontWeight: StyleVariable.typographyHeadingH2Weight,
    fontFamily: FontFamily.outfitBold,
  },
});

export default PointsContainer;
