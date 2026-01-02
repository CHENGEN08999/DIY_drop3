import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import Dividerline3 from "../assets/divider-line3.svg";
import Point from "./Point";
import Earnpointsicon1 from "../assets/earn-points-icon1.svg";
import Redeemrewardsicon2 from "../assets/redeem-rewards-icon2.svg";
import Familysharingicon3 from "../assets/family-sharing-icon3.svg";
import Exclusiveoffersicon4 from "../assets/exclusive-offers-icon4.svg";
import Button1 from "./Button1";
import {
  Width,
  Height,
  Color,
  Padding,
  MaxWidth,
  Gap,
  StyleVariable,
  FontFamily,
  Border,
} from "../GlobalStyles";

const MiddleSection = () => {
  const [pointItems] = useState([
    {
      earnPointsIcon1: (
        <Earnpointsicon1 width={Width.width_18} height={Height.height_20} />
      ),
      earnPointsIcon1Width: 18,
      earnPoints: "Earn Points",
      get1PointForEveryRM1Spent: "Get 1 point for every RM1 spent",
    },
    {
      earnPointsIcon1: <Redeemrewardsicon2 width={20} height={20} />,
      earnPointsIcon1Width: 20,
      earnPoints: "Redeem Rewards",
      get1PointForEveryRM1Spent: "Convert points to vouchers",
    },
    {
      earnPointsIcon1: <Familysharingicon3 width={20} height={20} />,
      earnPointsIcon1Width: 20,
      earnPoints: "Family Sharing",
      get1PointForEveryRM1Spent: "Pool points with family members",
    },
    {
      earnPointsIcon1: (
        <Exclusiveoffersicon4 width={18} height={Height.height_20} />
      ),
      earnPointsIcon1Width: "",
      earnPoints: "Exclusive Offers",
      get1PointForEveryRM1Spent: "Member-only promotions",
    },
  ]);

  return (
    <View style={styles.middleSection}>
      <View style={styles.title}>
        <Text style={[styles.joinMrdiyRewards, styles.earnPointsOnFlexBox]}>
          Join MR.DIY Rewards Today
        </Text>
        <Text style={[styles.earnPointsOn, styles.earnPointsOnFlexBox]}>
          Earn points on every purchase, unlock exclusive rewards, and enjoy
          member-only benefits!
        </Text>
      </View>
      <View style={styles.detailsCard}>
        <View style={styles.section2}>
          <Text style={styles.whyJoin}>Why Join?</Text>
          <Dividerline3
            style={styles.dividerLineIcon}
            height={Height.height_2}
          />
          {pointItems.map((item, index) => (
            <Point
              key={index}
              earnPointsIcon1={item.earnPointsIcon1}
              earnPointsIcon1Width={item.earnPointsIcon1Width}
              earnPoints={item.earnPoints}
              get1PointForEveryRM1Spent={item.get1PointForEveryRM1Spent}
            />
          ))}
        </View>
      </View>
      <Button1 />
      <Image
        style={[styles.giftbox1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/Giftbox-1.png")}
      />
      <Image
        style={[styles.giftbox2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/Giftbox-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  earnPointsOnFlexBox: {
    textAlign: "center",
    color: Color.primary100,
    alignSelf: "stretch",
  },
  iconLayout: {
    position: "absolute",
    height: 124,
    width: 120,
  },
  middleSection: {
    width: "100%",
    paddingHorizontal: Padding.padding_40,
    paddingVertical: Padding.padding_0,
    maxWidth: MaxWidth.max_w_400,
    zIndex: 3,
    gap: Gap.gap_16,
    alignItems: "center",
  },
  title: {
    gap: Gap.gap_4,
    zIndex: 0,
    alignSelf: "stretch",
    alignItems: "center",
  },
  joinMrdiyRewards: {
    height: 52,
    fontSize: StyleVariable.typographyHeadingH3Size,
    letterSpacing: StyleVariable.typographyHeadingH3Tracking,
    lineHeight: StyleVariable.typographyHeadingH3Leading,
    fontWeight: StyleVariable.typographyHeadingH3Weight,
    fontFamily: FontFamily.outfitBold,
    textAlign: "center",
  },
  earnPointsOn: {
    height: 45,
    fontSize: StyleVariable.typographyBodySmallSize,
    fontWeight: StyleVariable.typographyBodySmallWeight,
    fontFamily: FontFamily.outfitMedium,
  },
  detailsCard: {
    borderRadius: Border.br_15,
    backgroundColor: Color.neutral0,
    flexDirection: "row",
    padding: Padding.padding_20,
    zIndex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  section2: {
    flex: 1,
    gap: Gap.gap_16,
  },
  whyJoin: {
    fontSize: StyleVariable.typographyBodyLargeSize,
    lineHeight: StyleVariable.typographyBodyLargeLeading,
    fontWeight: StyleVariable.typographyBodyLargeWeight,
    textAlign: "left",
    color: Color.primary100,
    fontFamily: FontFamily.outfitBold,
    alignSelf: "stretch",
  },
  dividerLineIcon: {
    height: Height.height_2,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    color: Color.borderStandard,
    alignSelf: "stretch",
  },
  giftbox1Icon: {
    top: 68,
    left: -50,
    zIndex: 3,
  },
  giftbox2Icon: {
    right: -44,
    bottom: 36,
    zIndex: 4,
  },
});

export default MiddleSection;
