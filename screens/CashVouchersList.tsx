import * as React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import BottomNavigationBar from "../components/BottomNavigationBar";
import CashVoucherList from "../components/CashVoucherList";
import {
  Height,
  Width,
  Border,
  StyleVariable,
  FontFamily,
  Color,
} from "../GlobalStyles";

const CashVouchersList = () => {
  return (
    <LinearGradient
      style={styles.scrollviewLayout}
      locations={[0, 0.29]}
      colors={[Color.accentColour2, "#fffeec"]}
    >
      <ScrollView
        style={styles.scrollviewLayout}
        contentContainerStyle={styles.cashVouchersListContent}
      >
        <View style={styles.top}>
          <Image
            style={styles.backIcon}
            contentFit="cover"
            source={require("../assets/Back.png")}
          />
        </View>
        <Text style={styles.pageTitle}>Cash Vouchers</Text>
        <BottomNavigationBar />
        <CashVoucherList />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cashVouchersListContent: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingTop: 59,
    paddingBottom: 100,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 32,
    height: 929,
    flex: 1,
  },
  scrollviewLayout: {
    maxWidth: "100%",
    flex: 1,
    backgroundColor: "transparent",
    width: "100%",
  },
  top: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 0,
  },
  backIcon: {
    height: Height.height_60,
    width: Width.width_60,
    borderRadius: Border.br_30,
  },
  pageTitle: {
    width: 111,
    height: Height.height_20,
    position: "absolute",
    marginLeft: -54,
    top: 79,
    left: "50%",
    fontSize: StyleVariable.typographyBodyLargeSize,
    lineHeight: StyleVariable.typographyBodyLargeLeading,
    fontWeight: StyleVariable.typographyBodyLargeWeight,
    fontFamily: FontFamily.outfitBold,
    color: Color.primary100,
    textAlign: "center",
    zIndex: 1,
  },
});

export default CashVouchersList;
