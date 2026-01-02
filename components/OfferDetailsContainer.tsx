import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Button1 from "./Button1";
import Dividerline from "../assets/divider-line.svg";
import { Gap, StyleVariable, Color, FontFamily, Height } from "../GlobalStyles";

const OfferDetailsContainer = () => {
  return (
    <View style={styles.offerDetailsContainer}>
      <Text
        style={[styles.offerTitle, styles.offerFlexBox]}
      >{`DIY & SAVE! Get RM10 OFF your next project.`}</Text>
      <Text style={[styles.offerSubtitle, styles.offerFlexBox]}>
        MR.DIY Malaysia
      </Text>
      <Button1 />
      <Dividerline style={styles.dividerLineIcon} height={Height.height_2} />
      <View style={styles.validityContainer}>
        <Text style={[styles.offerSubtitle, styles.offerFlexBox]}>
          valid until
        </Text>
        <Text style={[styles.validityDate, styles.offerFlexBox]}>
          5 December 2025
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  offerFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  offerDetailsContainer: {
    gap: Gap.gap_18,
    alignSelf: "stretch",
  },
  offerTitle: {
    fontSize: StyleVariable.typographyHeadingH3Size,
    letterSpacing: StyleVariable.typographyHeadingH3Tracking,
    lineHeight: StyleVariable.typographyHeadingH3Leading,
    fontWeight: StyleVariable.typographyHeadingH3Weight,
    color: Color.primary100,
    fontFamily: FontFamily.outfitBold,
    textAlign: "left",
  },
  offerSubtitle: {
    fontSize: StyleVariable.typographyBodySmallSize,
    fontWeight: StyleVariable.typographyBodySmallWeight,
    fontFamily: FontFamily.outfitMedium,
    color: Color.neutral40,
  },
  dividerLineIcon: {
    height: Height.height_2,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    color: Color.borderStandard,
    alignSelf: "stretch",
  },
  validityContainer: {
    gap: Gap.gap_4,
    alignSelf: "stretch",
  },
  validityDate: {
    fontSize: StyleVariable.typographyBodyLargeSize,
    lineHeight: StyleVariable.typographyBodyLargeLeading,
    fontWeight: StyleVariable.typographyBodyLargeWeight,
    color: Color.primary100,
    fontFamily: FontFamily.outfitBold,
    textAlign: "left",
  },
});

export default OfferDetailsContainer;
