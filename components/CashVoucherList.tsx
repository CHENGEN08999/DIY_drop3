import * as React from "react";
import { StyleSheet, View } from "react-native";
import VoucherCard from "./VoucherCard";
import { Gap } from "../GlobalStyles";

const CashVoucherList = () => {
  return (
    <View style={styles.cashVoucherList}>
      <VoucherCard
        voucherImageContainer={require("../assets/Voucher-Image-Container1.png")}
      />
      <VoucherCard
        voucherImageContainer={require("../assets/Voucher-Image-Container1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cashVoucherList: {
    width: "100%",
    gap: Gap.gap_16,
    maxWidth: 400,
    zIndex: 3,
  },
});

export default CashVoucherList;
