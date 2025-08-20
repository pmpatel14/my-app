
import { Stack } from 'expo-router'
import React from 'react'

const RootLayOut = () => {
  return (
    <Stack >
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} /> 
        {/* stack screen name="your " */}
        <Stack.Screen name="about" />
    </Stack>
  )
}

export default RootLayOut