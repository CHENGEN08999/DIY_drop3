import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Dividerline2 from "../assets/divider-line2.svg";
import {
  Gap,
  StyleVariable,
  FontFamily,
  Padding,
  Color,
  Height,
} from "../GlobalStyles";

const TextContainer = () => {
  return (
    <View style={styles.textContainer}>
      <View style={[styles.titleContainer, styles.containerFlexBox]}>
        <Text style={styles.title}>Redemption Successful!</Text>
        <Text style={styles.subtitle}>Your voucher is ready</Text>
      </View>
      <Image
        style={styles.redemptionSuccessfulImage}
        contentFit="cover"
        source={require("../assets/Redemption-Successful-Image.png")}
      />
      <View style={[styles.titleContainer, styles.containerFlexBox]}>
        <Text style={styles.title}>RM10 OFF</Text>
        <Text style={[styles.pointsDeducted, styles.balanceLabelTypo]}>
          Points deducted: -500
        </Text>
      </View>
      <Dividerline2
        style={styles.textContainerChild}
        height={Height.height_2}
      />
      <View style={styles.containerFlexBox}>
        <Text style={[styles.balanceLabel, styles.balanceLabelTypo]}>
          New balance
        </Text>
        <Text style={styles.title}>1,450 points</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    gap: Gap.gap_4,
    alignSelf: "stretch",
  },
  balanceLabelTypo: {
    fontWeight: StyleVariable.typographyBodySmallWeight,
    fontSize: StyleVariable.typographyBodySmallSize,
    fontFamily: FontFamily.outfitMedium,
    textAlign: "center",
    alignSelf: "stretch",
  },
  textContainer: {
    paddingHorizontal: Padding.padding_20,
    paddingVertical: Padding.padding_0,
    gap: Gap.gap_16,
    alignItems: "center",
    alignSelf: "stretch",
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: StyleVariable.typographyHeadingH3Size,
    letterSpacing: StyleVariable.typographyHeadingH3Tracking,
    lineHeight: StyleVariable.typographyHeadingH3Leading,
    fontWeight: StyleVariable.typographyHeadingH3Weight,
    fontFamily: FontFamily.outfitBold,
    textAlign: "center",
    color: Color.primary100,
    alignSelf: "stretch",
  },
  subtitle: {
    fontSize: StyleVariable.typographyBodyMediumSize,
    lineHeight: StyleVariable.typographyBodyMediumLeading,
    fontWeight: StyleVariable.typographyBodyMediumWeight,
    fontFamily: FontFamily.outfitMedium,
    textAlign: "center",
    color: Color.primary100,
    alignSelf: "stretch",
  },
  redemptionSuccessfulImage: {
    width: 140,
    height: 152,
  },
  pointsDeducted: {
    color: Color.stateError,
  },
  textContainerChild: {
    height: Height.height_2,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    color: Color.borderStandard,
    alignSelf: "stretch",
  },
  balanceLabel: {
    color: Color.neutral40,
  },
});

export default TextContainer;
