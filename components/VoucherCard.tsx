import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import PointsIcon1 from "../assets/Points-Icon1.svg";
import Frame1 from "../assets/Frame1.svg";
import Button1 from "./Button1";
import {
  Color,
  FontFamily,
  StyleVariable,
  Height,
  BoxShadow,
  Border,
  Padding,
  Gap,
  Width,
  FontSize,
} from "../GlobalStyles";

export type VoucherCardType = {
  voucherImageContainer?: ImageSourcePropType;
};

const VoucherCard = ({ voucherImageContainer }: VoucherCardType) => {
  return (
    <View style={styles.voucherCard}>
      <Image
        style={styles.voucherImageContainer}
        contentFit="cover"
        source={voucherImageContainer}
      />
      <View style={styles.voucherCardContent}>
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.discountText}>RM10 OFF</Text>
            <View style={styles.discountInfoInner}>
              <View style={styles.workshopWrapper}>
                <Text style={styles.workshop}>Workshop</Text>
              </View>
            </View>
          </View>
          <View style={[styles.container2, styles.containerFlexBox]}>
            <View style={styles.container3}>
              <View style={[styles.container4, styles.containerFlexBox]}>
                <PointsIcon1
                  style={styles.pointsIcon}
                  width={Width.width_20}
                  height={Height.height_19_9}
                />
                <Text style={[styles.rewardPoints, styles.rewardTypo]}>
                  500 points
                </Text>
              </View>
              <View style={[styles.container4, styles.containerFlexBox]}>
                <Frame1
                  style={styles.frameIcon}
                  width={Width.width_20}
                  height={Height.height_20}
                />
                <Text style={[styles.rewardValidity, styles.rewardTypo]}>
                  Valid for 30 days
                </Text>
              </View>
            </View>
            <Button1 />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  rewardTypo: {
    color: Color.neutral50,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: StyleVariable.typographyBodyExtraSmallWeight,
    lineHeight: StyleVariable.typographyBodyExtraSmallLeading,
    fontSize: StyleVariable.typographyBodyExtraSmallSize,
    height: Height.height_14,
    textAlign: "left",
  },
  voucherCard: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  voucherImageContainer: {
    height: Height.height_128,
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    alignSelf: "stretch",
  },
  voucherCardContent: {
    boxShadow: BoxShadow.cardShadow,
    elevation: 20,
    borderBottomRightRadius: Border.br_15,
    borderBottomLeftRadius: Border.br_15,
    backgroundColor: Color.neutral0,
    padding: Padding.padding_20,
    alignSelf: "stretch",
  },
  container: {
    gap: Gap.gap_4,
    alignSelf: "stretch",
  },
  discountText: {
    fontSize: StyleVariable.typographyBodyExtraLargeSize,
    lineHeight: StyleVariable.typographyBodyExtraLargeLeading,
    fontWeight: StyleVariable.typographyBodyExtraLargeWeight,
    fontFamily: FontFamily.outfitBold,
    color: Color.primary100,
    textAlign: "left",
    alignSelf: "stretch",
  },
  discountInfoInner: {
    width: Width.width_144,
    display: "none",
  },
  workshopWrapper: {
    height: Height.height_17,
    borderRadius: Border.br_8_5,
    backgroundColor: Color.colorPink,
    justifyContent: "center",
    paddingHorizontal: Padding.padding_5,
    paddingVertical: Padding.padding_1,
    alignItems: "center",
  },
  workshop: {
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.interRegular,
    color: Color.colorPalevioletred,
    textAlign: "center",
  },
  container2: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: Gap.gap_0,
  },
  container3: {
    width: Width.width_126,
    gap: Gap.gap_4,
  },
  container4: {
    gap: Gap.gap_4,
    alignItems: "center",
  },
  pointsIcon: {
    height: Height.height_19_9,
    width: Width.width_20,
  },
  rewardPoints: {
    width: Width.width_77,
  },
  frameIcon: {
    height: Height.height_20,
    width: Width.width_20,
  },
  rewardValidity: {
    width: Width.width_78,
  },
});

export default VoucherCard;
