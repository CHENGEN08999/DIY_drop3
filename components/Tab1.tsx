import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import {
  Padding,
  Border,
  BoxShadow,
  Height,
  FontFamily,
  StyleVariable,
  Color,
} from "../GlobalStyles";

export type Tab1Type = {
  /** Variant props */
  property1?: 1;
};

const Tab1 = ({ property1 = 1 }: Tab1Type) => {
  return (
    <View style={styles.tab}>
      <Pressable style={[styles.redeemRewardsTab, styles.tabFlexBox]}>
        <Text style={[styles.text, styles.textTypo]}>Redeem Rewards</Text>
      </Pressable>
      <Pressable style={styles.tabFlexBox}>
        <Text style={[styles.text2, styles.textTypo]}>My Rewards</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tabFlexBox: {
    paddingVertical: Padding.padding_9,
    paddingHorizontal: Padding.padding_0,
    justifyContent: "center",
    borderRadius: Border.br_50,
    elevation: 10,
    boxShadow: BoxShadow.shadow_drop,
    flex: 1,
    height: Height.height_40,
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.outfitBold,
    fontWeight: StyleVariable.typographyBodyMediumBoldWeight,
    lineHeight: StyleVariable.typographyBodyMediumBoldLeading,
    fontSize: StyleVariable.typographyBodyMediumBoldSize,
    height: Height.height_20,
  },
  tab: {
    alignSelf: "stretch",
    boxShadow: BoxShadow.cardShadow,
    elevation: 20,
    borderRadius: 29,
    backgroundColor: Color.neutral0,
    padding: Padding.padding_10,
    gap: 7,
    alignItems: "center",
    flexDirection: "row",
  },
  redeemRewardsTab: {
    backgroundColor: Color.accentColour2,
  },
  text: {
    width: 115,
    color: Color.primary100,
  },
  text2: {
    width: 82,
    color: Color.neutral50,
  },
});

export default Tab1;
