import { Stack } from "expo-router";
import React from "react";

const RootLayOut = () => {
  return (
    <Stack>
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      {/* stack screen name="your " */}
      <Stack.Screen name="about" options={{ headerShown: false }} />
      {/* <Stack.Screen name="about" options={{ headerShown: false }} /> */}
    </Stack>
  );
};

export default RootLayOut;
