import * as React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import OfferDetailsContainer from "../components/OfferDetailsContainer";
import DescriptionContainer from "../components/DescriptionContainer";
import Dividerline from "../assets/divider-line.svg";
import TermsAndConditionsContainer from "../components/TermsAndConditionsContainer";
import Button1 from "../components/Button1";
import {
  Height,
  Color,
  Width,
  StyleVariable,
  FontFamily,
  Border,
  Gap,
} from "../GlobalStyles";

const VoucherDetailsScreenRedemption = () => {
  return (
    <ScrollView
      style={styles.voucherDetailsScreenRedempt}
      contentContainerStyle={styles.voucherDetailsScreenRedemptContent}
    >
      <View style={styles.topBg} />
      <Text style={styles.pageTitle}>Redemption Details</Text>
      <View style={[styles.top, styles.topFlexBox]}>
        <Image
          style={styles.backIcon}
          contentFit="cover"
          source={require("../assets/Back.png")}
        />
      </View>
      <Image
        style={styles.redemptionDetailsImage}
        contentFit="cover"
        source={require("../assets/Redemption-Details-Image.png")}
      />
      <View style={[styles.contentContainer, styles.topFlexBox]}>
        <OfferDetailsContainer />
        <DescriptionContainer
          dividerLine={<Dividerline height={Height.height_2} />}
        />
        <TermsAndConditionsContainer
          dividerLine={<Dividerline height={Height.height_2} />}
        />
        <Button1 />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  voucherDetailsScreenRedemptContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingTop: 59,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 25,
    flex: 1,
  },
  topFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  voucherDetailsScreenRedempt: {
    flex: 1,
    maxWidth: "100%",
    width: "100%",
    backgroundColor: Color.neutral0,
  },
  topBg: {
    width: Width.width_320,
    height: 135,
    top: 0,
    right: 0,
    left: 0,
    zIndex: 0,
    position: "absolute",
    backgroundColor: Color.neutral0,
  },
  pageTitle: {
    width: 145,
    height: Height.height_20,
    marginLeft: -72,
    top: 79,
    left: "50%",
    fontSize: StyleVariable.typographyBodyLargeSize,
    lineHeight: StyleVariable.typographyBodyLargeLeading,
    fontWeight: StyleVariable.typographyBodyLargeWeight,
    fontFamily: FontFamily.outfitBold,
    color: Color.primary100,
    textAlign: "center",
    zIndex: 1,
    position: "absolute",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 2,
  },
  backIcon: {
    height: Height.height_60,
    width: Width.width_60,
    borderRadius: Border.br_30,
  },
  redemptionDetailsImage: {
    height: 280,
    borderRadius: Border.br_15,
    overflow: "hidden",
    zIndex: 3,
    alignSelf: "stretch",
    maxWidth: "100%",
    width: "100%",
  },
  contentContainer: {
    gap: Gap.gap_36,
    zIndex: 4,
  },
});

export default VoucherDetailsScreenRedemption;
