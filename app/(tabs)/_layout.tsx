import React from "react";
import { Tabs } from "expo-router";
import { images } from "@/constants/images";
import { ImageBackground } from "react-native";

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <ImageBackground />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{ title: "Profile", headerShown: false }}
      />
      <Tabs.Screen
        name="index"
        options={{ title: "Saved", headerShown: false }}
      />
      <Tabs.Screen
        name="index"
        options={{ title: "Search", headerShown: false }}
      />
    </Tabs>
  );
};

export default _Layout;
