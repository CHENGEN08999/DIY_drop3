import * as React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Vector2363 from "../assets/Vector-2363.svg";
import ProfileIconContainer1 from "../assets/Profile-Icon-Container1.svg";
import PointsContainer from "../components/PointsContainer";
import Tab1 from "../components/Tab1";
import CashVoucherSection from "../components/CashVoucherSection";
import MultipleTabs from "../components/MultipleTabs";
import Button1 from "../components/Button1";
import LabelTag from "../components/LabelTag";
import PointsIcon1 from "../assets/Points-Icon1.svg";
import Frame1 from "../assets/Frame1.svg";
import {
  Color,
  FontFamily,
  StyleVariable,
  Height,
  Padding,
  Gap,
  Width,
  Border,
  BoxShadow,
} from "../GlobalStyles";

const RedeemRewardsHub = () => {
  const [labelTagItems] = useState([
    { active: "Active" },
    { active: "Used" },
    { active: "Expired" },
  ]);
  const [labelTagItems1] = useState([
    { active: "Active" },
    { active: "Used" },
    { active: "Expired" },
  ]);

  return (
    <LinearGradient
      style={[styles.redeemRewardsHub, styles.scrollviewLayout]}
      locations={[0, 0.32]}
      colors={[Color.accentColour2, Color.colorIvory]}
    >
      <ScrollView
        style={[styles.scrollview, styles.scrollviewLayout]}
        contentContainerStyle={styles.redeemRewardsHubContent}
      >
        <View style={[styles.wrapperVector2363, styles.wrapperClr]}>
          <Vector2363
            style={[styles.wrapperVector2363Child, styles.wrapperClr]}
          />
        </View>
        <View style={[styles.topSection, styles.topSectionFlexBox]}>
          <Text
            style={[styles.sectionTitle, styles.sectionTitleTypo]}
          >{`Rewards & Missions`}</Text>
          <ProfileIconContainer1
            style={styles.profileIconContainer}
            width={Width.width_42}
            height={Height.height_42}
          />
        </View>
        <PointsContainer />
        <View style={[styles.rewardSection, styles.rewardSectionSpaceBlock]}>
          <View
            style={[styles.contentContainer, styles.contentContainerFlexBox]}
          >
            <Tab1 property1={1} />
            <CashVoucherSection />
            <View style={[styles.secondaryTabs, styles.topSectionFlexBox]}>
              <MultipleTabs property1="Op 1" />
            </View>
            <View
              style={[
                styles.emptyStateIllustration,
                styles.contentContainerFlexBox,
              ]}
            >
              <Image
                style={styles.emptyExpressionImage}
                contentFit="cover"
                source={require("../assets/Empty-Expression-Image.png")}
              />
              <View style={styles.messageContainer}>
                <Text style={styles.messageTitle}>Ooops!! No vouchers yet</Text>
                <Text style={styles.messageSubtitle}>
                  Redeem points to get vouchers
                </Text>
              </View>
              <Button1 />
            </View>
            <View style={styles.myRewardTabVoucherList}>
              <View style={styles.voucherCardsWithLabel}>
                <View style={styles.voucherCard}>
                  <Image
                    style={[
                      styles.voucherImageContainer,
                      styles.scrollviewLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/Voucher-Image-Container1.png")}
                  />
                  <View
                    style={[
                      styles.voucherCardContent,
                      styles.rewardSectionSpaceBlock,
                    ]}
                  >
                    <View style={styles.container}>
                      <View style={styles.discountInfo}>
                        <Text
                          style={[styles.discountText, styles.sectionTitleTypo]}
                        >
                          RM10 OFF
                        </Text>
                        {labelTagItems.map((item, index) => (
                          <LabelTag key={index} active={item.active} />
                        ))}
                      </View>
                      <View
                        style={[styles.container2, styles.topSectionFlexBox]}
                      >
                        <View style={styles.container3}>
                          <View style={styles.container4}>
                            <PointsIcon1
                              style={styles.pointsIcon}
                              width={Width.width_20}
                              height={Height.height_19_9}
                            />
                            <Text
                              style={[styles.rewardPoints, styles.rewardTypo]}
                            >
                              500 points
                            </Text>
                          </View>
                          <View style={styles.container4}>
                            <Frame1
                              style={styles.frameIcon}
                              width={Width.width_20}
                              height={Height.height_20}
                            />
                            <Text
                              style={[styles.rewardValidity, styles.rewardTypo]}
                            >
                              Valid for 30 days
                            </Text>
                          </View>
                        </View>
                        <Button1 />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.voucherCardsWithLabel}>
                <View style={styles.voucherCard}>
                  <Image
                    style={[
                      styles.voucherImageContainer,
                      styles.scrollviewLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/Voucher-Image-Container1.png")}
                  />
                  <View
                    style={[
                      styles.voucherCardContent,
                      styles.rewardSectionSpaceBlock,
                    ]}
                  >
                    <View style={styles.container}>
                      <View style={styles.discountInfo}>
                        <Text
                          style={[styles.discountText, styles.sectionTitleTypo]}
                        >
                          RM10 OFF
                        </Text>
                        {labelTagItems1.map((item, index) => (
                          <LabelTag key={index} active={item.active} />
                        ))}
                      </View>
                      <View
                        style={[styles.container2, styles.topSectionFlexBox]}
                      >
                        <View style={styles.container3}>
                          <View style={styles.container4}>
                            <PointsIcon1
                              style={styles.pointsIcon}
                              width={Width.width_20}
                              height={Height.height_19_9}
                            />
                            <Text
                              style={[styles.rewardPoints, styles.rewardTypo]}
                            >
                              500 points
                            </Text>
                          </View>
                          <View style={styles.container4}>
                            <Frame1
                              style={styles.frameIcon}
                              width={Width.width_20}
                              height={Height.height_20}
                            />
                            <Text
                              style={[styles.rewardValidity, styles.rewardTypo]}
                            >
                              Valid for 30 days
                            </Text>
                          </View>
                        </View>
                        <Button1 />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  redeemRewardsHubContent: {
    flexDirection: "column",
    paddingTop: 59,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,
    flex: 1,
  },
  scrollviewLayout: {
    maxWidth: "100%",
    width: "100%",
  },
  wrapperClr: {
    color: Color.accentColour4,
    position: "absolute",
  },
  topSectionFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  sectionTitleTypo: {
    textAlign: "left",
    color: Color.primary100,
    fontFamily: FontFamily.outfitBold,
    fontWeight: StyleVariable.typographyBodyExtraLargeWeight,
    lineHeight: StyleVariable.typographyBodyExtraLargeLeading,
    fontSize: StyleVariable.typographyBodyExtraLargeSize,
    height: Height.height_24,
  },
  rewardSectionSpaceBlock: {
    padding: Padding.padding_20,
    backgroundColor: Color.neutral0,
    alignSelf: "stretch",
  },
  contentContainerFlexBox: {
    gap: Gap.gap_32,
    alignItems: "center",
  },
  rewardTypo: {
    color: Color.neutral50,
    fontWeight: StyleVariable.typographyBodyExtraSmallWeight,
    lineHeight: StyleVariable.typographyBodyExtraSmallLeading,
    fontSize: StyleVariable.typographyBodyExtraSmallSize,
    height: Height.height_14,
    fontFamily: FontFamily.outfitMedium,
    textAlign: "left",
  },
  redeemRewardsHub: {
    flex: 1,
    backgroundColor: "transparent",
    maxWidth: "100%",
  },
  scrollview: {
    flex: 1,
    backgroundColor: "transparent",
    maxWidth: "100%",
  },
  wrapperVector2363: {
    width: 578,
    height: "9.76%",
    marginLeft: -289,
    top: "4.72%",
    bottom: "85.53%",
    left: "50%",
    maxHeight: "100%",
    display: "flex",
    zIndex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapperVector2363Child: {
    height: "100%",
    objectFit: "contain",
    left: 0,
    top: 0,
    transform: [
      {
        scale: 1.035,
      },
    ],
    width: "100%",
  },
  topSection: {
    paddingHorizontal: Padding.padding_20,
    paddingVertical: Padding.padding_0,
    gap: Gap.gap_20,
    zIndex: 1,
    alignItems: "center",
  },
  sectionTitle: {
    width: 164,
  },
  profileIconContainer: {
    height: Height.height_42,
    width: Width.width_42,
    borderRadius: 21,
  },
  rewardSection: {
    borderTopLeftRadius: Border.br_30,
    borderTopRightRadius: Border.br_30,
    zIndex: 3,
    flexDirection: "row",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
  },
  secondaryTabs: {
    height: Height.height_30,
    alignItems: "center",
  },
  emptyStateIllustration: {
    alignSelf: "stretch",
  },
  emptyExpressionImage: {
    width: 171,
    height: 127,
  },
  messageContainer: {
    gap: Gap.gap_4,
    alignSelf: "stretch",
    alignItems: "center",
  },
  messageTitle: {
    fontSize: StyleVariable.typographyBodyLargeSize,
    lineHeight: StyleVariable.typographyBodyLargeLeading,
    fontWeight: StyleVariable.typographyBodyLargeWeight,
    textAlign: "center",
    color: Color.primary100,
    fontFamily: FontFamily.outfitBold,
    alignSelf: "stretch",
  },
  messageSubtitle: {
    fontSize: StyleVariable.typographyBodySmallSize,
    fontWeight: StyleVariable.typographyBodySmallWeight,
    color: Color.neutral40,
    fontFamily: FontFamily.outfitMedium,
    textAlign: "center",
    alignSelf: "stretch",
  },
  myRewardTabVoucherList: {
    gap: Gap.gap_16,
    alignSelf: "stretch",
  },
  voucherCardsWithLabel: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  voucherCard: {
    alignItems: "center",
    width: "100%",
  },
  voucherImageContainer: {
    height: 160,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  voucherCardContent: {
    boxShadow: BoxShadow.cardShadow,
    elevation: 20,
    borderBottomRightRadius: Border.br_15,
    borderBottomLeftRadius: Border.br_15,
  },
  container: {
    gap: Gap.gap_4,
    alignSelf: "stretch",
  },
  discountInfo: {
    gap: Gap.gap_8,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  discountText: {
    width: 88,
  },
  container2: {
    alignItems: "flex-end",
    gap: Gap.gap_0,
  },
  container3: {
    width: Width.width_126,
    gap: Gap.gap_4,
  },
  container4: {
    gap: Gap.gap_4,
    flexDirection: "row",
    alignSelf: "stretch",
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

export default RedeemRewardsHub;
