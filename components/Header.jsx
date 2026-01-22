import { Ionicons } from "@expo/vector-icons";
import { Text, Image, Pressable, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = ({ placeholder, messageCount }) => {
  return (
    <SafeAreaView edges={["top"]}>
      <View style={styles.container}>
        {/* Profile Image */}
        <Image
          source={{ uri: "https://i.pravatar.cc/300" }}
          style={styles.profileImage}
        />

        {/* Search Bar */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color={"#666"} />
          <TextInput placeholder={placeholder} placeholderTextColor={"#666"} style={styles.input} />
        </View>

        {/* Messages */}
        <Pressable style={styles.message}>
          <Ionicons name="chatbubble-ellipses" size={24} color={"#666"} />
          {messageCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{messageCount}</Text>
            </View>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  profileImage: {
    width: 34,
    height: 34,
    objectFit: "cover",
    borderRadius: 18,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    height: 32,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#aaa",
  },
  input: {
    flex: 1,
    marginLeft: 6,
    fontSize: 14,
  },
  message: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -7,
    right: -8,
    backgroundColor: "#e02424",
    borderRadius: 10,
    minWidth: 16,
    height: 16,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },

  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "600",
  },
});
