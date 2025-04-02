import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

const Index = () => {
  return (
    <View className="flex-1 bg-[#000]">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: "10" }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mx-auto mb-5" />
      </ScrollView>
    </View>
  );
};

export default Index;
