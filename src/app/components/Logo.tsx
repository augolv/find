import { View, Text } from "react-native";
import React from "react";
import { Donut } from "lucide-react-native";
import { colors } from "@/src/styles/colors";

const Logo = () => {
  return (
    <View className="flex-row items-center mt-16 pl-3 pb-3">
      <Donut color={colors.primaryVariant} size={30}/>
      <Text className="text-primaryVariant ml-1 text-3xl">Find</Text>
    </View>
  );
};

export default Logo;
