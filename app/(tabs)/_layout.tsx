import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import { ImageBackground, Text, Image, View } from "react-native";

const TabIcon = ({ icons, title, focused }: any) => {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full gap-2 flex-1 min-w-[114px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
      >
        <Image source={icons} tintColor="#151312" className="size-5" />
        <Text>{title}</Text>
      </ImageBackground>
    );
  } else {
    return (
      <View className="size-full justify-center item-center mt-4 rounded-full">
        <Image source={icons} tintColor="#ffff" className="size-5" />
      </View>
    );
  }
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 36,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "0f0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icons={icons.home} title="Home" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icons={icons.search} title="Search" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icons={icons.save} title="Saved" focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icons={icons.person} title="Profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
