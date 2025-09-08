import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/300",
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Prince Patel</Text>
        <Text style={styles.username}>@prince_dev</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>2.5K</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>980</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.buttonPrimary}>
          <FontAwesome name="edit" size={18} color="#fff" />
          <Text style={styles.buttonText}> Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary}>
          <FontAwesome name="cog" size={18} color="#FF5733" />
          <Text style={[styles.buttonText, { color: "#FF5733" }]}>
            {" "}
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginTop: 30,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  username: {
    fontSize: 14,
    color: "gray",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 25,
  },
  statBox: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF5733",
  },
  statLabel: {
    fontSize: 14,
    color: "gray",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonPrimary: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF5733",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonSecondary: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#FF5733",
    borderWidth: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
