import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import TextContainer from "../components/TextContainer";
import Button1 from "../components/Button1";
import StarIconContainer from "../assets/Star-Icon-Container.svg";
import { Color, Gap, Padding, Border } from "../GlobalStyles";

const RedemptionSuccessModal = () => {
  return (
    <SafeAreaView style={styles.redemptionSuccessModal}>
      <View style={[styles.view, styles.viewFlexBox]}>
        <LinearGradient
          style={[styles.contentContainer, styles.containerFlexBox]}
          locations={[0, 1]}
          colors={["#fffeec", Color.accentColour2]}
        >
          <View style={[styles.contentWrapper, styles.viewFlexBox]}>
            <TextContainer />
            <View style={[styles.buttonContainer, styles.containerFlexBox]}>
              <Button1 />
              <Button1 />
            </View>
          </View>
          <Image
            style={styles.iconContainer}
            contentFit="cover"
            source={require("../assets/Icon-Container.png")}
          />
          <StarIconContainer
            style={styles.starIconContainer}
            width={86}
            height={86}
          />
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  redemptionSuccessModal: {
    backgroundColor: Color.colorGray,
    flex: 1,
  },
  viewFlexBox: {
    alignItems: "center",
    flex: 1,
  },
  containerFlexBox: {
    gap: Gap.gap_10,
    alignItems: "center",
    flexDirection: "row",
  },
  view: {
    width: "100%",
    overflow: "hidden",
    justifyContent: "center",
    paddingHorizontal: Padding.padding_20,
    paddingVertical: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.colorGray,
  },
  contentContainer: {
    borderRadius: Border.br_15,
    padding: Padding.padding_15,
    maxWidth: 360,
    backgroundColor: "transparent",
    flex: 1,
    gap: Gap.gap_10,
  },
  contentWrapper: {
    gap: 32,
    zIndex: 0,
  },
  buttonContainer: {
    alignSelf: "stretch",
  },
  iconContainer: {
    height: 54,
    width: 54,
    top: 79,
    left: -20,
    zIndex: 1,
    position: "absolute",
  },
  starIconContainer: {
    height: 86,
    width: 86,
    right: -26,
    bottom: 127,
    zIndex: 2,
    position: "absolute",
  },
});

export default RedemptionSuccessModal;
