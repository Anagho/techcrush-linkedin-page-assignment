import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
  Platform,
  UIManager
} from "react-native";
import PostBottomCard from '../components/PostBottomTab'
import PostFeedback from '../components/PostFeedback'
import useTruncateText from "../hooks/useTruncateText";

const PostCard = ({
  userName,
  userTitle,
  userImage,
  timestamp,
  postText,
  postImage,
  following = false,
  feedback,
  badges = null
}) => {
  // state to hold post text
  const [expandedText, setExpandedText] = useState(false);

  // state to hold feedback data
  const [postFeedback, setPostFeedback] = useState(feedback || {likes: 0, loved: 0, impressions: 0, comments: 0, repost: 0})

  const [isLiked, setIsLiked] = useState(false);

  // Using custom hook to truncate text
    const {
        displayedText: postDisplayedText,
        expanded: postExpanded,
        isLongText: isPostLong,
        toggleText: togglePostText,
    } = useTruncateText(postText, 100);

    // Using the same custom hook to truncate user title if needed
    const { displayedText: titleDisplayedText} = useTruncateText(userTitle, 40);

  // method to truncate & display the post text
//   const MAX_LENGTH = 100;
//   const isLongText = postText.length > MAX_LENGTH;
//   const showFullText = expandedText || !isLongText;
//   const displayedText = showFullText
//     ? postText
//     : `${postText.slice(0, MAX_LENGTH)}...`;

//     // Condition to add a touch of animation
//     if (
//       Platform.OS === "android" &&
//       UIManager.setLayoutAnimationEnabledExperimental
//     ) {
//       UIManager.setLayoutAnimationEnabledExperimental(true);
//     }

//     // Toggle Post Text
//     const toggleText = () => {
//       LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//       setExpandedText((prev) => !prev);
//     };

const handleLike = () => {
  setPostFeedback((prev) => ({
    ...prev,
    likes: isLiked ? prev.likes - 1 : prev.likes + 1,
  }));

  setIsLiked((prev) => !prev);
};

const handleComment = () => {
  setPostFeedback((prev) => ({
    ...prev,
    comments: prev.comments + 1,
  }));
};

const handleRepost = () => {
  setPostFeedback((prev) => ({
    ...prev,
    repost: prev.repost + 1,
  }));
};

const handleSend = () => {
  console.log("Send pressed");
};

const handleUserImage = () => {
  console.log("User avatar pressed");
};

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: userImage }} style={styles.userImage} />

        <View style={styles.userInfo}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 0.5 }}>
            <Text style={styles.name}>{userName}</Text>
            <EvilIcons name="sc-linkedin" size={24} color="brown" />
            <Entypo name="dot-single" style={styles.subtitleText} />
            <Text style={{ fontSize: 12, color: "#666" }}>2nd</Text>
            <Entypo name="dot-single" style={styles.subtitleText} />
            {following && (
              <Text style={{ fontSize: 12, color: "#666" }}>Following</Text>
            )}
          </View>

          <Text style={styles.title}>{titleDisplayedText}</Text>
          <View style={styles.subtitle}>
            <Text style={styles.subtitleText}>{timestamp}</Text>
            {/* <Text style={styles.subtitleText}>.</Text>
             */}
            <Entypo name="dot-single" style={styles.subtitleText} />
            <FontAwesome5 name="globe-americas" style={styles.subtitleText} />
          </View>
        </View>

        {/* Follow Button */}
        {!following && (
          <TouchableOpacity style={styles.followBtn}>
            <FontAwesome5 name="plus" color="#3b82f6" size={14} />
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
        )}
      </View>

      <View>
        {/* Post Text */}
        <Text style={styles.text}>{postDisplayedText}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        {/* Show More / Less */}
        {isPostLong && (
          <Pressable onPress={togglePostText}>
            <Text style={styles.more}>
              {postExpanded ? "...less" : "...more"}
            </Text>
          </Pressable>
        )}
      </View>

      {/* Post Image(optional) */}
      {postImage && (
        <Image source={{ uri: postImage }} style={styles.postImage} />
      )}

      {/* Post likes & comments feedback*/}
      <PostFeedback feedback={postFeedback} />

      {/* Post Bottom Tabs */}
      <PostBottomCard
        userAvatar={"https://i.pravatar.cc/100"}
        onUserImage={handleUserImage}
        onLike={handleLike}
        onComment={handleComment}
        onRepost={handleRepost}
        onSend={handleSend}
        isLiked={isLiked}
      />
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'flex-start'
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    alignSelf: "flex-start",
  },
  name: {
    fontWeight: "600",
    fontSize: 18,
  },
  title: {
    fontSize: 12,
    color: "#666",
  },
  subtitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  subtitleText: {
    textAlign: "center",
    color: "#666",
  },
  followBtn: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
  },
  followText: { color: "#3b82f6", fontSize: 16, fontWeight: "600" },
  text: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
  },
  more: {
    color: "#666",
    marginTop: 2,
    fontWeight: "500",
  },
  postImage: {
    width: "100%",
    height: 250,
    marginTop: 10,
    borderRadius: 6,
  },
});
