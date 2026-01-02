import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import EnticingScreenBgImage from "../assets/Enticing-Screen-Bg-Image.svg";
import ProfileIconContainer from "../assets/Profile-Icon-Container.svg";
import MiddleSection from "../components/MiddleSection";
import Button1 from "../components/Button1";
import {
  Padding,
  Gap,
  Height,
  StyleVariable,
  FontFamily,
  Color,
  Width,
  MaxWidth,
  Border,
  BoxShadow,
} from "../GlobalStyles";

const EnticingScreen = () => {
  return (
    <LinearGradient
      style={styles.scrollviewLayout}
      locations={[0, 0.25]}
      colors={[Color.colorIvory, Color.accentColour2]}
    >
      <ScrollView
        style={styles.scrollviewLayout}
        contentContainerStyle={styles.enticingScreenScrollViewContent}
      >
        <EnticingScreenBgImage
          style={[styles.enticingScreenBgImage, styles.enticingLayout]}
          width={421}
          height={217}
        />
        <View
          style={[styles.topTitleSection, styles.topTitleSectionSpaceBlock]}
        >
          <Text style={styles.welcomeToMrdiy}>Welcome to MR.DIY</Text>
          <ProfileIconContainer
            style={styles.profileIconContainer}
            width={Width.width_42}
            height={Height.height_42}
          />
        </View>
        <View
          style={[
            styles.enticingScreenPandaImage,
            styles.topTitleSectionSpaceBlock,
          ]}
        >
          <Image
            style={[styles.enticingScreenPandaImage2, styles.enticingLayout]}
            contentFit="cover"
            source={require("../assets/Enticing-Screen-Panda-Image.png")}
          />
        </View>
        <MiddleSection />
        <View style={styles.bottomSection}>
          <View style={[styles.bottomSectionSection, styles.sectionFlexBox]}>
            <View style={styles.bottomSectionSectionDetails}>
              <View style={[styles.title, styles.sectionFlexBox]}>
                <Text style={styles.alreadyHaveAn}>
                  Already have an account?
                </Text>
              </View>
              <Button1
                redeemButtonAlignSelf="unset"
                redeemButtonWidth={226}
                text="Login Here"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  enticingScreenScrollViewContent: {
    flexDirection: "column",
    paddingTop: 59,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,
    flex: 1,
  },
  enticingLayout: {
    overflow: "hidden",
    maxWidth: "100%",
  },
  topTitleSectionSpaceBlock: {
    paddingVertical: Padding.padding_0,
    paddingHorizontal: Padding.padding_20,
    alignItems: "center",
  },
  sectionFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrollviewLayout: {
    backgroundColor: "transparent",
    maxWidth: "100%",
    flex: 1,
    width: "100%",
  },
  enticingScreenBgImage: {
    width: 421,
    height: 217,
    position: "absolute",
    top: 104,
    right: -50,
    left: -50,
    zIndex: 0,
  },
  topTitleSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: Gap.gap_20,
    zIndex: 1,
    alignSelf: "stretch",
  },
  welcomeToMrdiy: {
    height: Height.height_24,
    width: 168,
    fontSize: StyleVariable.typographyBodyExtraLargeSize,
    lineHeight: StyleVariable.typographyBodyExtraLargeLeading,
    fontWeight: StyleVariable.typographyBodyExtraLargeWeight,
    fontFamily: FontFamily.outfitBold,
    color: Color.primary100,
    textAlign: "left",
  },
  profileIconContainer: {
    height: Height.height_42,
    width: Width.width_42,
    borderRadius: 21,
  },
  enticingScreenPandaImage: {
    maxWidth: MaxWidth.max_w_400,
    zIndex: 2,
    width: "100%",
  },
  enticingScreenPandaImage2: {
    height: 200,
    alignSelf: "stretch",
    width: "100%",
  },
  bottomSection: {
    height: 230,
    borderTopLeftRadius: Border.br_30,
    borderTopRightRadius: Border.br_30,
    backgroundColor: Color.colorIvory,
    paddingVertical: Padding.padding_16,
    zIndex: 4,
    paddingHorizontal: Padding.padding_20,
    alignSelf: "stretch",
  },
  bottomSectionSection: {
    boxShadow: BoxShadow.cardShadow,
    elevation: 20,
    borderRadius: Border.br_15,
    backgroundColor: Color.neutral0,
    padding: Padding.padding_16,
    alignSelf: "stretch",
  },
  bottomSectionSectionDetails: {
    gap: Gap.gap_4,
    alignItems: "center",
  },
  title: {
    width: 227,
  },
  alreadyHaveAn: {
    width: 179,
    height: Height.height_20,
    fontSize: StyleVariable.typographyBodyMediumSize,
    lineHeight: StyleVariable.typographyBodyMediumLeading,
    fontWeight: StyleVariable.typographyBodyMediumWeight,
    fontFamily: FontFamily.outfitMedium,
    color: Color.neutral40,
    textAlign: "center",
  },
});

export default EnticingScreen;
