import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import UnorderedList from "./UnorderedList";
import ListItem from "./ListItem";
import {
  Gap,
  Color,
  FontFamily,
  StyleVariable,
  Height,
  Margin,
  Padding,
} from "../GlobalStyles";

export type TermsAndConditionsContainerType = {
  dividerLine?: React.ReactNode;
};

const TermsAndConditionsContainer = ({
  dividerLine,
}: TermsAndConditionsContainerType) => {
  return (
    <View style={styles.termsFlexBox}>
      <View style={styles.termsAndConditionsHeader}>
        <Text style={styles.termsAndConditions}>{`Terms & Conditions`}</Text>
        <Image
          style={styles.arrowBackIcon}
          contentFit="cover"
          source={require("../assets/arrow-back.png")}
        />
      </View>
      {dividerLine}
      <View style={[styles.termsAndConditionsTextCont, styles.termsFlexBox]}>
        <Text
          style={[
            styles.termsAndConditionsContainer2,
            styles.termsContainerTypo,
          ]}
        >
          <UnorderedList style={styles.thisVoucherIsValidFor30D}>
            <ListItem>
              This voucher is valid for 30 days from the date of redemption.
            </ListItem>
          </UnorderedList>
        </Text>
        <Text
          style={[
            styles.termsAndConditionsContainer2,
            styles.termsContainerTypo,
          ]}
        >
          <UnorderedList style={styles.thisVoucherIsValidFor30D}>
            <ListItem>
              Minimum purchase of RM30 is required to use this voucher.
            </ListItem>
          </UnorderedList>
        </Text>
        <Text
          style={[
            styles.termsAndConditionsContainer2,
            styles.termsContainerTypo,
          ]}
        >
          <UnorderedList style={styles.thisVoucherIsValidFor30D}>
            <ListItem>
              This voucher is applicable to all products except alcohol,
              tobacco, and gifts cards.
            </ListItem>
          </UnorderedList>
        </Text>
        <Text
          style={[
            styles.termsAndConditionsContainer2,
            styles.termsContainerTypo,
          ]}
        >
          <UnorderedList style={styles.thisVoucherIsValidFor30D}>
            <ListItem>
              This voucher cannot be combined with other promotions or
              discounts.
            </ListItem>
          </UnorderedList>
        </Text>
        <Text
          style={[
            styles.termsAndConditionsContainer2,
            styles.termsContainerTypo,
          ]}
        >
          <UnorderedList style={styles.thisVoucherIsValidFor30D}>
            <ListItem>
              This voucher is non-transferable and cannot be exchanged for cash.
            </ListItem>
          </UnorderedList>
        </Text>
        <Text
          style={[
            styles.termsAndConditionsContainer2,
            styles.termsContainerTypo,
          ]}
        >
          <UnorderedList style={styles.thisVoucherIsValidFor30D}>
            <ListItem>
              MR.DIY reserves the right to modify or cancel this offer without
              prior notice.
            </ListItem>
          </UnorderedList>
        </Text>
        <Text style={styles.termsContainerTypo}>
          <UnorderedList style={styles.thisVoucherIsValidFor30D}>
            <ListItem>In case dispute MR.DIY’s decision is final.</ListItem>
          </UnorderedList>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  termsFlexBox: {
    gap: Gap.gap_18,
    alignSelf: "stretch",
  },
  termsContainerTypo: {
    color: Color.neutral50,
    fontFamily: FontFamily.outfitMedium,
    fontWeight: StyleVariable.typographyBodyMediumWeight,
    lineHeight: StyleVariable.typographyBodyMediumLeading,
    fontSize: StyleVariable.typographyBodyMediumSize,
    textAlign: "left",
  },
  termsAndConditionsHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_6,
    alignSelf: "stretch",
  },
  termsAndConditions: {
    flex: 1,
    fontSize: StyleVariable.typographyBodyLargeSize,
    lineHeight: StyleVariable.typographyBodyLargeLeading,
    fontWeight: StyleVariable.typographyBodyLargeWeight,
    fontFamily: FontFamily.outfitBold,
    color: Color.primary100,
    textAlign: "left",
  },
  arrowBackIcon: {
    height: Height.height_10,
    width: 18,
  },
  termsAndConditionsTextCont: {
    justifyContent: "center",
  },
  termsAndConditionsContainer2: {
    alignSelf: "stretch",
  },
  thisVoucherIsValidFor30D: {
    margin: Margin.m_0,
    paddingLeft: Padding.padding_19,
  },
});

export default TermsAndConditionsContainer;
