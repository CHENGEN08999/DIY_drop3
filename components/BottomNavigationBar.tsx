import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Box from "./Box";
import { Width, Padding } from "../GlobalStyles";

const BottomNavigationBar = () => {
  return (
    <ImageBackground
      style={styles.bottomNavigationBar}
      resizeMode="cover"
      source={require("../assets/bottom-navigation-bar.png")}
    >
      <Box />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bottomNavigationBar: {
    width: Width.width_320,
    height: 86,
    position: "absolute",
    right: -1013,
    bottom: -544,
    left: 1014,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Padding.padding_20,
    paddingTop: Padding.padding_5,
    paddingBottom: Padding.padding_10,
    zIndex: 2,
  },
});

export default BottomNavigationBar;
