import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import Dividerline from "../assets/divider-line.svg";
import { Gap, StyleVariable, FontFamily, Color, Height } from "../GlobalStyles";

const DescriptionContainer = () => {
  return (
    <View style={styles.descriptionContainer}>
      <View style={styles.descriptionContent}>
        <Text style={[styles.descriptionTitle, styles.descriptionFlexBox]}>
          Description
        </Text>
        <Dividerline style={styles.dividerLineIcon} height={Height.height_2} />
        <Text style={[styles.descriptionText, styles.descriptionFlexBox]}>
          Get RM10 off on your next purchase. Minimum spend RM30 required.
          Applicable to all products.
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={[styles.descriptionText, styles.descriptionFlexBox]}>
          How to Use
        </Text>
        <Text style={[styles.descriptionText, styles.descriptionFlexBox]}>
          1. Redeem voucher with points
        </Text>
        <Text style={[styles.descriptionText, styles.descriptionFlexBox]}>
          2. Show voucher QR code at checkout
        </Text>
        <Text style={[styles.descriptionText, styles.descriptionFlexBox]}>
          3. Cashier will scan and apply discount
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  descriptionContainer: {
    gap: Gap.gap_18,
    alignSelf: "stretch",
  },
  descriptionContent: {
    gap: Gap.gap_12,
    alignSelf: "stretch",
  },
  descriptionTitle: {
    fontSize: StyleVariable.typographyBodyLargeSize,
    lineHeight: StyleVariable.typographyBodyLargeLeading,
    fontWeight: StyleVariable.typographyBodyLargeWeight,
    fontFamily: FontFamily.outfitBold,
    color: Color.primary100,
  },
  dividerLineIcon: {
    height: Height.height_2,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    color: Color.borderStandard,
    alignSelf: "stretch",
  },
  descriptionText: {
    fontSize: StyleVariable.typographyBodyMediumSize,
    lineHeight: StyleVariable.typographyBodyMediumLeading,
    fontWeight: StyleVariable.typographyBodyMediumWeight,
    fontFamily: FontFamily.outfitMedium,
    color: Color.neutral50,
  },
});

export default DescriptionContainer;