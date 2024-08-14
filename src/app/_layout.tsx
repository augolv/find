import { StatusBar, View } from "react-native";
import "../styles/global.css";

import { Slot } from "expo-router";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";

export default function Layout() {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <View className="flex-1 bg-bgColor">
        <Logo />
        <Slot />
        <NavBar />
      </View>
    </>
  );
}
