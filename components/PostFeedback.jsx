import Entypo from "@expo/vector-icons/Entypo";
import Foundation from "@expo/vector-icons/Foundation";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const PostFeedback = ({feedback = {}}) => {

  const [reactions, setReactions] = useState(true);

  const { likes = 0, loved = 0, impressions = 0, comments = 0, repost = 0 } = feedback;

  const reactionCount = likes + loved + impressions + comments + repost;

  // Check if the post have a reaction
  const hasReactions =
    reactions &&
    reactionCount > 0 &&
    (likes > 0 || loved > 0 || impressions > 0 || comments > 0 || repost > 0);

  return (
    <View style={styles.feedbackCard}>
      {hasReactions && (
        <>
          <View style={styles.iconDiv}>
            <View style={{ flexDirection: "row", position: "relative" }}>
              {/* likes */}
              {likes > 0 && (
                <View
                  style={[
                    styles.iconBox,
                    { backgroundColor: "rgba(0, 42, 251, 0.7)" },
                  ]}
                >
                  <Foundation name="like" color="#ccc" size={14} />
                </View>
              )}

              {/* impressions */}
              {impressions > 0 && (
                <View
                  style={[
                    styles.iconBox,
                    { backgroundColor: "#006500", left: -6 },
                  ]}
                >
                  <FontAwesome6 name="hands-clapping" color="#ccc" size={12} />
                </View>
              )}

              {/* loved */}
              {loved > 0 && (
                <View
                  style={[styles.iconBox, { backgroundColor: "red", left: -8 }]}
                >
                  <Foundation name="heart" color="#ccc" size={12} />
                </View>
              )}
            </View>

            {/* reaction count */}
            {reactionCount && <Text>{reactionCount}</Text>}
          </View>
          <View style={styles.contentBox}>
            {comments > 0 && (
              <Text>
                {comments} {comments == 1 ? "comment" : "comments"}
              </Text>
            )}
            {repost > 0 && <Entypo name="dot-single" />}
            {repost > 0 && (
              <Text>
                {repost} {repost == 1 ? "repost" : "reposts"}
              </Text>
            )}
          </View>
        </>
      )}
    </View>
  );
};

export default PostFeedback;

const styles = StyleSheet.create({
  feedbackCard: {
    flexDirection: "row",
    marginVertical: 15,
    justifyContent: "space-between",
    flex: 1,
  },
  iconDiv: {
    flexDirection: "row",
  },
  iconBox: {
    height: 16,
    width: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  contentBox: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
});
