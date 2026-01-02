import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  Height,
  Border,
  Color,
  Padding,
  Width,
  StyleVariable,
  FontFamily,
} from "../GlobalStyles";

const LabelTag = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.active}>Active</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: Height.height_17,
    borderRadius: Border.br_8_5,
    backgroundColor: Color.colorLightgreen,
    justifyContent: "center",
    paddingHorizontal: Padding.padding_5,
    paddingVertical: Padding.padding_1,
  },
  active: {
    width: Width.width_37,
    height: Height.height_15,
    fontSize: StyleVariable.typographyBodySmallSize,
    fontWeight: StyleVariable.typographyBodySmallWeight,
    fontFamily: FontFamily.outfitMedium,
    color: Color.stateSuccess,
    textAlign: "center",
  },
});

export default LabelTag;