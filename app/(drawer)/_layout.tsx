import Drawer from "expo-router/drawer"
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const DrawerRoot = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="index" options={{ title: "Home" }} />
        <Drawer.Screen name="about" options={{ title: "About" }} />
      </Drawer>
    </GestureHandlerRootView>
  )
}

export default DrawerRoot