import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Gap, StyleVariable, FontFamily, Color } from "../GlobalStyles";

export type DescriptionContainerType = {
  dividerLine?: React.ReactNode;
};

const DescriptionContainer = ({ dividerLine }: DescriptionContainerType) => {
  return (
    <View style={styles.descriptionContainer}>
      <View style={styles.descriptionContent}>
        <Text style={[styles.descriptionTitle, styles.descriptionFlexBox]}>
          Description
        </Text>
        {dividerLine}
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
  descriptionText: {
    fontSize: StyleVariable.typographyBodyMediumSize,
    lineHeight: StyleVariable.typographyBodyMediumLeading,
    fontWeight: StyleVariable.typographyBodyMediumWeight,
    fontFamily: FontFamily.outfitMedium,
    color: Color.neutral50,
  },
});

export default DescriptionContainer;
