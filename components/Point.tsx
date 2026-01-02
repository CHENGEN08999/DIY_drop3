import * as React from "react";
import { useMemo } from "react";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Gap, StyleVariable, FontFamily, Color } from "../GlobalStyles";

export type PointType = {
  earnPointsIcon1?: React.ReactNode;
  earnPoints?: string;
  get1PointForEveryRM1Spent?: string;

  /** Style props */
  earnPointsIcon1Width?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Point = ({
  earnPointsIcon1,
  earnPointsIcon1Width,
  earnPoints,
  get1PointForEveryRM1Spent,
}: PointType) => {
  const earnPointsIcon1Style = useMemo(() => {
    return {
      ...getStyleValue("width", earnPointsIcon1Width),
    };
  }, [earnPointsIcon1Width]);

  return (
    <View style={styles.point1}>
      {earnPointsIcon1}
      <View style={styles.details}>
        <Text style={[styles.earnPoints, styles.get1PointFlexBox]}>
          {earnPoints}
        </Text>
        <Text style={[styles.get1Point, styles.get1PointFlexBox]}>
          {get1PointForEveryRM1Spent}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  get1PointFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  point1: {
    flexDirection: "row",
    gap: Gap.gap_16,
    alignSelf: "stretch",
  },
  details: {
    flex: 1,
    gap: Gap.gap_4,
  },
  earnPoints: {
    fontSize: StyleVariable.typographyBodyMediumBoldSize,
    lineHeight: StyleVariable.typographyBodyMediumBoldLeading,
    fontWeight: StyleVariable.typographyBodyMediumBoldWeight,
    fontFamily: FontFamily.outfitBold,
    color: Color.primary100,
  },
  get1Point: {
    fontSize: StyleVariable.typographyBodyMediumSize,
    lineHeight: StyleVariable.typographyBodyMediumLeading,
    fontWeight: StyleVariable.typographyBodyMediumWeight,
    fontFamily: FontFamily.outfitMedium,
    color: Color.neutral50,
  },
});

export default Point;
