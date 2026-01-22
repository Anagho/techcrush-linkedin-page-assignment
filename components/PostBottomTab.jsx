import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const PostBottomTab = ({
  userAvatar,
  onUserImage,
  onLike,
  onComment,
  onRepost,
  onSend,
  isLiked,
}) => {
  return (
    <View style={styles.actionTab}>
      <Pressable onPress={onUserImage} style={styles.imageBox}>
        <Image source={{ uri: userAvatar }} style={styles.image} />
        <View style={styles.imageIconBox}>
          <Octicons name="triangle-down" size={14} color="#333" />
        </View>
      </Pressable>

      <Pressable onPress={onLike} style={[styles.iconBox]}>
        <View style={[styles.iconWrapper, isLiked && styles.iconWrapperLiked]}>
          <FontAwesome
            name="hand-o-left"
            size={16}
            color={isLiked ? "#fff" : "#333"}
          />
        </View>

        <Text style={[styles.iconText, isLiked && styles.likedText]}>Like</Text>
      </Pressable>

      <Pressable onPress={onComment} style={styles.iconBox}>
        <View style={styles.iconWrapper}>
          <MaterialCommunityIcons
            name="comment-text-outline"
            size={16}
            color="#333"
          />
        </View>
        <Text style={styles.iconText}>Comment</Text>
      </Pressable>

      <Pressable onPress={onRepost} style={styles.iconBox}>
        <View style={styles.iconWrapper}>
          <Feather name="repeat" size={16} color="#333" />
        </View>
        <Text style={styles.iconText}>Repost</Text>
      </Pressable>

      <Pressable onPress={onSend} style={styles.iconBox}>
        <View style={styles.iconWrapper}>
          <Ionicons name="paper-plane" size={16} color="#333" />
        </View>
        <Text style={styles.iconText}>Send</Text>
      </Pressable>
    </View>
  );
};

export default PostBottomTab;

const styles = StyleSheet.create({
  actionTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    alignItems: "center",
    borderTopWidth: 0.5,
    borderTopColor: "#ccc",
  },
  imageBox: {
    position: "relative",
    alignItems: "center",
  },
  imageIconBox: {
    position: "absolute",
    bottom: 1,
    right: -6,
    width: 14,
    height: 14,
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
  },
  image: {
    width: 28,
    height: 28,
    borderRadius: 50,
  },
  iconBox: {
    alignItems: "center",
    marginRight: 20,
  },
  iconText: {
    fontSize: 12,
    color: "#333",
  },
  iconWrapper: {
    width: 24,
    height: 24,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  iconWrapperLiked: {
    backgroundColor: "#0a66c2",
  },

  likedText: {
    color: "#0a66c2",
    fontWeight: "600",
  },
});
