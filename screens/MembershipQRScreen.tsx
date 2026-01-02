import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import Bottombgsvg from "../assets/Bottom-bg-svg.svg";
import MembershipSection from "../components/MembershipSection";
import { Height, StyleVariable, FontFamily, Color } from "../GlobalStyles";

const MembershipQRScreen = () => {
  return (
    <LinearGradient
      style={styles.scrollviewLayout}
      locations={[0, 0.47]}
      colors={[Color.accentColour2, Color.colorIvory]}
    >
      <ScrollView
        style={styles.scrollviewLayout}
        contentContainerStyle={styles.membershipQRScreenContent}
      >
        <Bottombgsvg style={styles.bottomBgSvg} width={351} height={217} />
        <Image
          style={styles.membershipQrScreenChild}
          contentFit="cover"
          source={require("../assets/Star-1.png")}
        />
        <View style={styles.title}>
          <Text style={styles.membership}>Membership</Text>
        </View>
        <MembershipSection />
        <Image
          style={styles.membershipScreenPanda}
          contentFit="cover"
          source={require("../assets/Membership-screen-panda.png")}
        />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  membershipQRScreenContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingTop: 59,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,
    flex: 1,
  },
  scrollviewLayout: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    maxWidth: "100%",
  },
  bottomBgSvg: {
    width: 351,
    height: 217,
    top: 652,
    right: -15,
    left: -15,
    overflow: "hidden",
    zIndex: 0,
    position: "absolute",
    maxWidth: "100%",
  },
  membershipQrScreenChild: {
    width: 520,
    height: "19.08%",
    marginLeft: -224.9,
    top: "4.72%",
    bottom: "76.2%",
    left: "50%",
    maxHeight: "100%",
    zIndex: 1,
    position: "absolute",
  },
  title: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 2,
  },
  membership: {
    height: Height.height_24,
    width: 107,
    fontSize: StyleVariable.typographyBodyExtraLargeSize,
    lineHeight: StyleVariable.typographyBodyExtraLargeLeading,
    fontWeight: StyleVariable.typographyBodyExtraLargeWeight,
    fontFamily: FontFamily.outfitBold,
    color: Color.primary100,
    textAlign: "center",
  },
  membershipScreenPanda: {
    width: 552,
    height: 256,
    zIndex: 4,
  },
});

export default MembershipQRScreen;
