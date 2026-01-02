import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import Button1 from "./Button1";
import {
  Color,
  FontFamily,
  Border,
  Gap,
  MaxWidth,
  Width,
  Height,
  StyleVariable,
  Padding,
  BoxShadow,
} from "../GlobalStyles";

const MembershipSection = () => {
  return (
    <View style={styles.membershipSection}>
      <View style={[styles.qrSection, styles.qrSectionFlexBox]}>
        <Image
          style={styles.membershipBackgroundIcon}
          contentFit="cover"
          source={require("../assets/membership-Background.png")}
        />
        <Text style={[styles.sarahAhmad, styles.sarahAhmadClr]}>
          Sarah Ahmad
        </Text>
        <View style={[styles.qrSection2, styles.qrBgLayout]}>
          <View style={[styles.qrBg, styles.qrBgLayout]} />
          <Image
            style={styles.qrIcon}
            contentFit="cover"
            source={require("../assets/QR.png")}
          />
        </View>
      </View>
      <View style={styles.membershipNoSection}>
        <View style={[styles.membershipDetails, styles.qrSectionFlexBox]}>
          <View style={styles.membershipNo}>
            <Text style={[styles.membershipNo2, styles.numberValueFlexBox]}>
              Membership no.
            </Text>
            <Text style={[styles.numberValue, styles.numberValueFlexBox]}>
              1761704655439922574
            </Text>
          </View>
          <Button1 />
        </View>
      </View>
      <Button1 />
    </View>
  );
};

const styles = StyleSheet.create({
  qrSectionFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  sarahAhmadClr: {
    color: Color.primary100,
    fontFamily: FontFamily.outfitBold,
  },
  qrBgLayout: {
    height: 210,
    width: 210,
    backgroundColor: Color.neutral0,
    borderRadius: Border.br_20,
  },
  numberValueFlexBox: {
    textAlign: "left",
    alignSelf: "stretch",
  },
  membershipSection: {
    gap: Gap.gap_16,
    maxWidth: MaxWidth.max_w_400,
    zIndex: 3,
    alignItems: "center",
    width: "100%",
  },
  qrSection: {
    height: 361,
    paddingHorizontal: 35,
    paddingVertical: 25,
    gap: Gap.gap_10,
    maxWidth: 350,
    overflow: "hidden",
    backgroundColor: Color.neutral0,
    borderRadius: Border.br_20,
    justifyContent: "space-between",
  },
  membershipBackgroundIcon: {
    width: Width.width_280,
    height: "85.93%",
    position: "absolute",
    top: "14.07%",
    right: 0,
    bottom: "0%",
    left: 0,
    maxWidth: "100%",
    maxHeight: "100%",
    zIndex: 0,
    overflow: "hidden",
  },
  sarahAhmad: {
    width: 213,
    height: Height.height_26,
    fontSize: StyleVariable.typographyHeadingH3Size,
    letterSpacing: StyleVariable.typographyHeadingH3Tracking,
    lineHeight: StyleVariable.typographyHeadingH3Leading,
    fontWeight: StyleVariable.typographyHeadingH3Weight,
    textAlign: "center",
    zIndex: 1,
  },
  qrSection2: {
    paddingLeft: Padding.padding_15,
    paddingTop: Padding.padding_14,
    paddingRight: Padding.padding_14,
    paddingBottom: Padding.padding_15,
    flexDirection: "row",
    zIndex: 1,
  },
  qrBg: {
    display: "none",
  },
  qrIcon: {
    height: 181,
    width: 181,
    zIndex: 1,
  },
  membershipNoSection: {
    height: 65,
    boxShadow: BoxShadow.cardShadow,
    elevation: 20,
    borderRadius: Border.br_15,
    paddingHorizontal: Padding.padding_15,
    paddingVertical: Padding.padding_11,
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: Color.neutral0,
    alignItems: "center",
  },
  membershipDetails: {
    gap: -55,
    flexDirection: "row",
  },
  membershipNo: {
    width: 209,
    gap: Gap.gap_2,
    justifyContent: "center",
  },
  membershipNo2: {
    fontSize: StyleVariable.typographyBodyMediumSize,
    lineHeight: StyleVariable.typographyBodyMediumLeading,
    fontWeight: StyleVariable.typographyBodyMediumWeight,
    fontFamily: FontFamily.outfitMedium,
    color: Color.neutral40,
  },
  numberValue: {
    fontSize: StyleVariable.typographyBodyMediumBoldSize,
    lineHeight: StyleVariable.typographyBodyMediumBoldLeading,
    fontWeight: StyleVariable.typographyBodyMediumBoldWeight,
    color: Color.primary100,
    fontFamily: FontFamily.outfitBold,
  },
});

export default MembershipSection;
