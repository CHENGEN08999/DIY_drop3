import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import Copypasteicon from "../assets/copy-paste-icon.svg";
import LabelTag from "./LabelTag";
import Dividerline from "../assets/divider-line.svg";
import {
  Gap,
  Height,
  Border,
  Color,
  Padding,
  StyleVariable,
  FontFamily,
} from "../GlobalStyles";

const OfferDetailsContainer1 = () => {
  return (
    <View style={styles.barcodeSectionFlexBox}>
      <View style={[styles.barcodeSection, styles.barcodeSectionFlexBox]}>
        <Image
          style={styles.barCodeIcon}
          contentFit="cover"
          source={require("../assets/bar-code.png")}
        />
        <Pressable style={styles.codeContainer}>
          <Text style={styles.code}>VCH - ABC123</Text>
          <Copypasteicon
            style={styles.copyPasteIcon}
            width={14}
            height={Height.height_17}
          />
        </Pressable>
      </View>
      <Text
        style={[styles.offerTitle, styles.offerFlexBox]}
      >{`DIY & SAVE! Get RM10 OFF your next project.`}</Text>
      <Text style={[styles.offerSubtitle, styles.offerFlexBox]}>
        MR.DIY Malaysia
      </Text>
      <LabelTag property1="Tag" />
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
  barcodeSectionFlexBox: {
    gap: Gap.gap_18,
    alignSelf: "stretch",
  },
  offerFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  barcodeSection: {
    alignItems: "center",
  },
  barCodeIcon: {
    width: 162,
    height: 73,
  },
  codeContainer: {
    height: Height.height_40,
    borderRadius: Border.br_15,
    backgroundColor: Color.neutral0,
    borderStyle: "solid",
    borderColor: Color.borderStandard,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: Padding.padding_20,
    paddingVertical: Padding.padding_0,
    gap: Gap.gap_8,
    alignItems: "center",
  },
  code: {
    height: Height.height_20,
    width: 94,
    fontSize: StyleVariable.typographyBodyMediumBoldSize,
    lineHeight: StyleVariable.typographyBodyMediumBoldLeading,
    fontWeight: StyleVariable.typographyBodyMediumBoldWeight,
    color: Color.neutral80,
    textAlign: "center",
    fontFamily: FontFamily.outfitBold,
  },
  copyPasteIcon: {
    height: Height.height_17,
    width: 14,
  },
  offerTitle: {
    fontSize: StyleVariable.typographyHeadingH3Size,
    letterSpacing: StyleVariable.typographyHeadingH3Tracking,
    lineHeight: StyleVariable.typographyHeadingH3Leading,
    fontWeight: StyleVariable.typographyHeadingH3Weight,
    color: Color.primary100,
    textAlign: "left",
    fontFamily: FontFamily.outfitBold,
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
    textAlign: "left",
    fontFamily: FontFamily.outfitBold,
  },
});

export default OfferDetailsContainer1;
