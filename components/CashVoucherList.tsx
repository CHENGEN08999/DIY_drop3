import * as React from "react";
import { StyleSheet, View } from "react-native";
import VoucherCard from "./VoucherCard";
import PointsIcon1 from "../assets/Points-Icon1.svg";
import { Width, Height, Gap, MaxWidth } from "../GlobalStyles";

const CashVoucherList = () => {
  return (
    <View style={styles.cashVoucherList}>
      <VoucherCard
        pointsIcon={
          <PointsIcon1 width={Width.width_20} height={Height.height_19_9} />
        }
        text="Redeem"
        redeemButtonAlignSelf="unset"
        redeemButtonWidth="unset"
        redeemButtonFlex={1}
      />
      <VoucherCard
        pointsIcon={
          <PointsIcon1 width={Width.width_20} height={Height.height_19_9} />
        }
        text="Redeem"
        redeemButtonAlignSelf="unset"
        redeemButtonWidth="unset"
        redeemButtonFlex={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cashVoucherList: {
    width: "100%",
    gap: Gap.gap_16,
    maxWidth: MaxWidth.max_w_400,
    zIndex: 3,
  },
});

export default CashVoucherList;