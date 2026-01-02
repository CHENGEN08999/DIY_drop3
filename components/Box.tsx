import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigationbarhomeicon from "../assets/navigation-bar-home-icon.svg";
import NavigationbarRewardicon from "../assets/navigation-bar-Reward-icon.svg";
import Navigationbarloyalty from "../assets/navigation-bar-loyalty.svg";
import Navigationbarevent from "../assets/navigation-bar-event.svg";
import Navigationbarprofile from "../assets/navigation-bar-profile.svg";
import {
  Gap,
  Color,
  FontFamily,
  FontSize,
  Width,
  Height,
} from "../GlobalStyles";

const Box = () => {
  return (
    <View style={styles.box}>
      <View style={[styles.home, styles.homeFlexBox]}>
        <Navigationbarhomeicon
          style={styles.navigationBarHomeIcon}
          width={Width.width_42}
          height={Height.height_42}
        />
        <Text style={styles.home2}>Home</Text>
      </View>
      <View style={[styles.home, styles.homeFlexBox]}>
        <NavigationbarRewardicon
          style={styles.navigationBarHomeIcon}
          width={Width.width_42}
          height={Height.height_42}
        />
        <Text style={[styles.rewards2, styles.rewards2Typo]}>Rewards</Text>
      </View>
      <View style={[styles.loyalty, styles.homeFlexBox]}>
        <Navigationbarloyalty
          style={styles.navigationBarLoyalty}
          width={Width.width_60}
          height={Height.height_60}
        />
        <Text style={[styles.loyalty2, styles.rewards2Typo]}>Loyalty</Text>
      </View>
      <View style={[styles.event, styles.homeFlexBox]}>
        <Navigationbarevent
          style={styles.navigationBarHomeIcon}
          width={Width.width_42}
          height={Height.height_42}
        />
        <Text style={[styles.loyalty2, styles.rewards2Typo]}>Events</Text>
      </View>
      <View style={[styles.home, styles.homeFlexBox]}>
        <Navigationbarprofile
          style={styles.navigationBarHomeIcon}
          width={Width.width_42}
          height={Height.height_42}
        />
        <Text style={[styles.loyalty2, styles.rewards2Typo]}>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeFlexBox: {
    gap: Gap.gap_4,
    alignItems: "center",
  },
  rewards2Typo: {
    color: Color.primary100,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.fs_12,
  },
  box: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: Gap.gap_5,
  },
  home: {
    width: Width.width_50,
    alignItems: "center",
  },
  navigationBarHomeIcon: {
    width: Width.width_42,
    height: Height.height_42,
  },
  home2: {
    width: Width.width_37,
    color: Color.accentColour2,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.fs_12,
    height: Height.height_15,
  },
  rewards2: {
    width: 53,
    height: Height.height_15,
    color: Color.primary100,
  },
  loyalty: {
    width: Width.width_60,
  },
  navigationBarLoyalty: {
    height: Height.height_60,
    width: Width.width_60,
  },
  loyalty2: {
    alignSelf: "stretch",
  },
  event: {
    justifyContent: "center",
    width: Width.width_50,
    alignItems: "center",
  },
});

export default Box;
