const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import EnticingScreen from "./screens/EnticingScreen";
import VoucherDetailsScreenRedemption from "./screens/VoucherDetailsScreenRedemption";
import RedeemRewardsHub from "./screens/RedeemRewardsHub";
import VoucherDetailsScreenVoucherDetails from "./screens/VoucherDetailsScreenVoucherDetails";
import MembershipQRScreen from "./components/MembershipQRScreen";
import RedemptionSuccessModal from "./screens/RedemptionSuccessModal";
import CashVouchersList from "./screens/CashVouchersList";
import RedemptionConfirmationModal from "./components/RedemptionConfirmationModal";
import MembershipSection from "./components/MembershipSection";
import TextContainer from "./components/TextContainer";
import BottomNavigationBar from "./components/BottomNavigationBar";
import Box from "./components/Box";
import CashVoucherList from "./components/CashVoucherList";
import VoucherCard from "./components/VoucherCard";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Outfit-Medium": require("./assets/fonts/Outfit-Medium.ttf"),
    "Outfit-Bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Button1"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="EnticingScreen"
              component={EnticingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Button1"
              component={VoucherDetailsScreenRedemption}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CashVoucherSection"
              component={RedeemRewardsHub}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LabelTag"
              component={VoucherDetailsScreenVoucherDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MembershipQRScreen"
              component={MembershipQRScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RedemptionSuccessModal"
              component={RedemptionSuccessModal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BottomNavigationBar"
              component={CashVouchersList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RedemptionConfirmationModal"
              component={RedemptionConfirmationModal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MembershipQRScreen"
              component={MembershipSection}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RedemptionSuccessModal"
              component={TextContainer}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BottomNavigationBar"
              component={BottomNavigationBar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BottomNavigationBar"
              component={Box}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BottomNavigationBar"
              component={CashVoucherList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BottomNavigationBar"
              component={VoucherCard}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
