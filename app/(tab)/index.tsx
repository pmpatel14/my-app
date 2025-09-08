import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const categories = [
  { id: "1", name: "Technology", icon: "laptop" },
  { id: "2", name: "Food", icon: "cutlery" },
  { id: "3", name: "Travel", icon: "plane" },
  { id: "4", name: "Music", icon: "music" },
];

const posts = [
  {
    id: "1",
    title: "New AI Trends in 2025",
    image: "https://picsum.photos/400/200?random=1",
  },
  {
    id: "2",
    title: "Top 10 Foods in India",
    image: "https://picsum.photos/400/200?random=2",
  },
  {
    id: "3",
    title: "Best Travel Spots",
    image: "https://picsum.photos/400/200?random=3",
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back 👋</Text>
        <FontAwesome name="bell" size={22} color="#333" />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={18} color="gray" />
        <TextInput
          placeholder="Search here..."
          placeholderTextColor="gray"
          style={styles.searchInput}
        />
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryBox}>
            <FontAwesome name={item.icon} size={22} color="#FF5733" />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        style={{ marginVertical: 10 }}
      />

      {/* Posts */}
      <Text style={styles.sectionTitle}>Latest Posts</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.postCard}>
            <Image source={{ uri: item.image }} style={styles.postImage} />
            <Text style={styles.postTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
    marginBottom: 5,
  },
  categoryBox: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FF5733",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginRight: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
  },
  postCard: {
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },
  postImage: {
    width: "100%",
    height: 150,
  },
  postTitle: {
    padding: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});
