import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ConfirmRedemptionImage from "../assets/Confirm-Redemption-Image.svg";
import PointsIcon from "../assets/Points-Icon.svg";
import Dividerline2 from "../assets/divider-line2.svg";
import Button1 from "./Button1";
import {
  Gap,
  FontFamily,
  StyleVariable,
  Width,
  Color,
  Padding,
  Border,
  Height,
} from "../GlobalStyles";

const RedemptionConfirmationModal = () => {
  return (
    <View
      style={[styles.redemptionConfirmationModal, styles.modalContainerFlexBox]}
    >
      <LinearGradient
        style={[styles.modalContainer, styles.modalContainerFlexBox]}
        locations={[0, 1]}
        colors={["#fffeec", Color.accentColour2]}
      >
        <View style={[styles.contentContainer, styles.containerFlexBox]}>
          <View style={styles.titleContainerFlexBox}>
            <Text style={[styles.title, styles.titleFlexBox]}>
              Confirm Redemption
            </Text>
            <Text style={[styles.subtitle, styles.titleFlexBox]}>RM10 OFF</Text>
          </View>
          <ConfirmRedemptionImage
            style={styles.confirmRedemptionImage}
            width={238}
            height={106}
          />
          <View style={[styles.pointsContainer, styles.containerFlexBox]}>
            <View style={styles.titleContainerFlexBox}>
              <Text style={[styles.pointsInfoTitle, styles.warningTextTypo]}>
                Points to be deducted
              </Text>
              <View
                style={[styles.pointsInfoContent, styles.titleContainerFlexBox]}
              >
                <PointsIcon style={styles.pointsIcon} width={27} height={27} />
                <Text style={[styles.pointsAmount, styles.warningTextLayout]}>
                  500 points
                </Text>
              </View>
            </View>
            <Dividerline2
              style={styles.dividerLineIcon}
              height={Height.height_2}
            />
            <View style={styles.titleContainerFlexBox}>
              <Text style={[styles.pointsInfoTitle, styles.warningTextTypo]}>
                Remaining balance after
              </Text>
              <Text style={[styles.title, styles.titleFlexBox]}>
                1,950 points
              </Text>
            </View>
          </View>
          <Pressable
            style={[styles.warningContainer, styles.modalContainerFlexBox]}
          >
            <Text style={[styles.warningText, styles.warningTextLayout]}>
              This action cannot be undone
            </Text>
          </Pressable>
          <View style={styles.buttonsContainer}>
            <Button1 />
            <Button1 />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerFlexBox: {
    gap: Gap.gap_16,
    alignItems: "center",
  },
  titleFlexBox: {
    textAlign: "center",
    alignSelf: "stretch",
  },
  warningTextTypo: {
    fontFamily: FontFamily.outfitMedium,
    fontWeight: StyleVariable.typographyBodySmallWeight,
    fontSize: StyleVariable.typographyBodySmallSize,
  },
  titleContainerFlexBox: {
    gap: Gap.gap_4,
    alignSelf: "stretch",
  },
  warningTextLayout: {
    width: 159,
    textAlign: "center",
  },
  redemptionConfirmationModal: {
    width: Width.width_320,
    backgroundColor: Color.colorGray,
    paddingVertical: 50,
    paddingHorizontal: Padding.padding_20,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
  },
  modalContainer: {
    borderRadius: Border.br_15,
    padding: Padding.padding_15,
    maxWidth: 360,
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: StyleVariable.typographyHeadingH3Size,
    letterSpacing: StyleVariable.typographyHeadingH3Tracking,
    lineHeight: StyleVariable.typographyHeadingH3Leading,
    fontWeight: StyleVariable.typographyHeadingH3Weight,
    color: Color.primary100,
    fontFamily: FontFamily.outfitBold,
  },
  subtitle: {
    fontSize: StyleVariable.typographyBodyLargeSize,
    lineHeight: StyleVariable.typographyBodyLargeLeading,
    fontWeight: StyleVariable.typographyBodyLargeWeight,
    color: Color.primary100,
    fontFamily: FontFamily.outfitBold,
  },
  confirmRedemptionImage: {
    width: 238,
    height: 106,
  },
  pointsContainer: {
    paddingVertical: Padding.padding_0,
    alignSelf: "stretch",
    paddingHorizontal: Padding.padding_20,
  },
  pointsInfoTitle: {
    color: Color.neutral40,
    textAlign: "center",
    alignSelf: "stretch",
  },
  pointsInfoContent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  pointsIcon: {
    height: 27,
    width: 27,
  },
  pointsAmount: {
    height: 35,
    fontSize: StyleVariable.typographyHeadingH2Size,
    letterSpacing: StyleVariable.typographyHeadingH2Tracking,
    lineHeight: StyleVariable.typographyHeadingH2Leading,
    fontWeight: StyleVariable.typographyHeadingH2Weight,
    color: Color.primary100,
    fontFamily: FontFamily.outfitBold,
  },
  dividerLineIcon: {
    height: Height.height_2,
    maxWidth: "100%",
    maxHeight: "100%",
    color: Color.borderStandard,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  warningContainer: {
    borderRadius: 10,
    backgroundColor: Color.neutral0,
    paddingHorizontal: Padding.padding_0,
    paddingVertical: 8,
    alignSelf: "stretch",
  },
  warningText: {
    height: Height.height_15,
    color: Color.neutral50,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: StyleVariable.typographyBodySmallWeight,
    fontSize: StyleVariable.typographyBodySmallSize,
  },
  buttonsContainer: {
    gap: Gap.gap_10,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default RedemptionConfirmationModal;
