import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import VoucherCard1 from "./VoucherCard1";
import { Gap, Height, StyleVariable, FontFamily, Color } from "../GlobalStyles";

const CashVoucherSection = () => {
  const [voucherCard1Items] = useState([
    {
      voucherImageContainer: require("../assets/Voucher-Image-Container1.png"),
      text: "Redeem",
      redeemButtonAlignSelf: "unset",
      redeemButtonWidth: "",
      redeemButtonFlex: 1,
    },
    {
      voucherImageContainer: require("../assets/Voucher-Image-Container1.png"),
      text: "Redeem",
      redeemButtonAlignSelf: "",
      redeemButtonWidth: "",
      redeemButtonFlex: "",
    },
    {
      voucherImageContainer: require("../assets/Voucher-Image-Container1.png"),
      text: "Redeem",
      redeemButtonAlignSelf: "",
      redeemButtonWidth: "",
      redeemButtonFlex: "",
    },
  ]);

  return (
    <View style={styles.cashVoucherSection}>
      <View style={styles.horizontalCashVoucherListT}>
        <Text style={styles.cashVouchers}>Cash Vouchers</Text>
        <Text style={styles.viewAll}>View all</Text>
      </View>
      <View style={styles.horizontalCashVoucherList}>
        {voucherCard1Items.map((item, index) => (
          <VoucherCard1
            key={index}
            voucherImageContainer={item.voucherImageContainer}
            text={item.text}
            redeemButtonAlignSelf={item.redeemButtonAlignSelf}
            redeemButtonWidth={item.redeemButtonWidth}
            redeemButtonFlex={item.redeemButtonFlex}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cashVoucherSection: {
    gap: Gap.gap_8,
    alignSelf: "stretch",
  },
  horizontalCashVoucherListT: {
    alignItems: "center",
    justifyContent: "space-between",
    gap: Gap.gap_20,
    flexDirection: "row",
    height: Height.height_26,
    alignSelf: "stretch",
  },
  cashVouchers: {
    width: 143,
    fontSize: StyleVariable.typographyHeadingH3Size,
    letterSpacing: StyleVariable.typographyHeadingH3Tracking,
    lineHeight: StyleVariable.typographyHeadingH3Leading,
    fontWeight: StyleVariable.typographyHeadingH3Weight,
    fontFamily: FontFamily.outfitBold,
    textAlign: "left",
    color: Color.primary100,
    height: Height.height_26,
  },
  viewAll: {
    height: Height.height_20,
    width: 88,
    fontSize: StyleVariable.typographyBodyMediumSize,
    textDecorationLine: "underline",
    lineHeight: StyleVariable.typographyBodyMediumLeading,
    fontWeight: StyleVariable.typographyBodyMediumWeight,
    fontFamily: FontFamily.outfitMedium,
    textAlign: "right",
    color: Color.primary100,
  },
  horizontalCashVoucherList: {
    width: 725,
    overflow: "hidden",
    flexDirection: "row",
    gap: Gap.gap_8,
  },
});

export default CashVoucherSection;
