import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  FontFamily,
  StyleVariable,
  Border,
  Height,
  Gap,
  Padding,
  Color,
} from "../GlobalStyles";

export type MultipleTabsType = {
  /** Variant props */
  property1?: string;
};

const MultipleTabs = ({ property1 = "Op 1" }: MultipleTabsType) => {
  return (
    <View style={[styles.multipleTabs, styles.activeTabFlexBox]}>
      <View style={[styles.activeTab, styles.activeTabFlexBox]}>
        <View>
          <Text style={[styles.active, styles.usedTypo]}>Active</Text>
          <View style={[styles.activeTabGroupChild, styles.tabGroupLayout]} />
        </View>
      </View>
      <View style={[styles.activeTab, styles.activeTabFlexBox]}>
        <View>
          <Text style={[styles.used, styles.usedTypo]}>Used</Text>
          <View style={styles.tabGroupLayout} />
        </View>
      </View>
      <View style={[styles.activeTab, styles.activeTabFlexBox]}>
        <View>
          <Text style={[styles.used, styles.usedTypo]}>Expired</Text>
          <View style={styles.tabGroupLayout} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activeTabFlexBox: {
    alignItems: "center",
    flex: 1,
  },
  usedTypo: {
    textAlign: "center",
    fontFamily: FontFamily.outfitBold,
    fontWeight: StyleVariable.typographyBodyMediumBoldWeight,
    lineHeight: StyleVariable.typographyBodyMediumBoldLeading,
    fontSize: StyleVariable.typographyBodyMediumBoldSize,
    alignSelf: "stretch",
  },
  tabGroupLayout: {
    borderRadius: Border.br_1_5,
    height: Height.height_3,
    alignSelf: "stretch",
  },
  multipleTabs: {
    flexDirection: "row",
    gap: Gap.gap_15,
  },
  activeTab: {
    height: Height.height_30,
    justifyContent: "center",
    paddingHorizontal: Padding.padding_36,
    paddingVertical: Padding.padding_0,
  },
  active: {
    color: Color.primary100,
  },
  activeTabGroupChild: {
    backgroundColor: Color.accentColour2,
  },
  used: {
    color: Color.neutral40,
  },
});

export default MultipleTabs;
