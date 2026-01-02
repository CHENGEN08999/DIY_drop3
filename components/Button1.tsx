import * as React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import {
  Height,
  Border,
  Color,
  Padding,
  StyleVariable,
  FontFamily,
} from "../GlobalStyles";

const Button1 = () => {
  return (
    <Pressable style={styles.root}>
      <Text style={styles.text}>500 Points Required</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    alignSelf: "stretch",
    height: Height.height_40,
    borderRadius: Border.br_50,
    backgroundColor: Color.neutral10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.padding_108,
    paddingVertical: Padding.padding_9,
  },
  text: {
    height: Height.height_20,
    width: 152,
    fontSize: StyleVariable.typographyBodyLargeSize,
    lineHeight: StyleVariable.typographyBodyLargeLeading,
    fontWeight: StyleVariable.typographyBodyLargeWeight,
    fontFamily: FontFamily.outfitBold,
    color: Color.neutral40,
    textAlign: "center",
  },
});

export default Button1;