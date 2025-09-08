import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Animated,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const TabRoot = () => {
  const [open, setOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    const toValue = open ? 0 : 1;
    Animated.spring(animation, {
      toValue,
      friction: 5,
      useNativeDriver: true,
    }).start();
    setOpen(!open);
  };

  // Positions for circular menu
  const menu1Style = {
    transform: [
      { scale: animation },
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -80],
        }),
      },
    ],
    opacity: animation,
  };
  const menu2Style = {
    transform: [
      { scale: animation },
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -80],
        }),
      },
    ],
    opacity: animation,
  };
  const menu3Style = {
    transform: [
      { scale: animation },
      {
        translateX: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 80],
        }),
      },
    ],
    opacity: animation,
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          backgroundColor: "#fff",
          borderRadius: 25,
          height: 75,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 5 },
          shadowRadius: 8,
          elevation: 5,
        },
      }}
    >
      {/* Home */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />

      {/* Floating Menu */}
      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ size }) => (
            <View style={{ alignItems: "center" }}>
              {/* Radial Menu Items */}
              <Animated.View style={[styles.menuItem, menu1Style]}>
                <FontAwesome name="camera" size={20} color="#fff" />
              </Animated.View>
              <Animated.View style={[styles.menuItem, menu2Style]}>
                <FontAwesome name="pencil" size={20} color="#fff" />
              </Animated.View>
              <Animated.View style={[styles.menuItem, menu3Style]}>
                <FontAwesome name="video-camera" size={20} color="#fff" />
              </Animated.View>

              {/* FAB */}
              <TouchableOpacity activeOpacity={0.8} onPress={toggleMenu}>
                <Animated.View
                  style={[
                    styles.floatingButton,
                    {
                      transform: [
                        {
                          rotate: animation.interpolate({
                            inputRange: [0, 1],
                            outputRange: ["0deg", "45deg"],
                          }),
                        },
                      ],
                    },
                  ]}
                >
                  <FontAwesome name="plus" size={size} color="#fff" />
                </Animated.View>
              </TouchableOpacity>
            </View>
          ),
        }}
      />

      {/* Profile */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    backgroundColor: "#FF5733",
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Platform.OS === "android" ? 40 : 30,
    shadowColor: "#FF5733",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 8,
  },
  menuItem: {
    position: "absolute",
    backgroundColor: "#FF5733",
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TabRoot;
