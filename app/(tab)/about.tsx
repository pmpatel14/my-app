import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const About = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.logo}
        />
        <Text style={styles.title}>About Our App</Text>
        <Text style={styles.subtitle}>
          Making life easier with modern solutions 🚀
        </Text>
      </View>

      {/* Mission */}
      <View style={styles.section}>
        <FontAwesome name="bullseye" size={22} color="#FF5733" />
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionText}>
          We aim to deliver innovative and user-friendly applications that make
          everyday tasks easier, faster, and smarter. Our mission is to connect
          people with technology in a simple yet powerful way.
        </Text>
      </View>

      {/* Vision */}
      <View style={styles.section}>
        <FontAwesome name="eye" size={22} color="#FF5733" />
        <Text style={styles.sectionTitle}>Our Vision</Text>
        <Text style={styles.sectionText}>
          To be a trusted technology partner for millions of users around the
          world 🌍, creating impactful solutions that transform how people live
          and work.
        </Text>
      </View>

      {/* Team */}
      <View style={styles.section}>
        <FontAwesome name="users" size={22} color="#FF5733" />
        <Text style={styles.sectionTitle}>Meet the Team</Text>
        <Text style={styles.sectionText}>
          We’re a passionate group of developers, designers, and creators who
          love building apps that inspire and empower people.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © {new Date().getFullYear()} Prince Patel | All Rights Reserved
        </Text>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginTop: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 8,
    color: "#FF5733",
  },
  sectionText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  footer: {
    marginTop: 30,
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "gray",
  },
});
