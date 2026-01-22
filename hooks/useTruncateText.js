import { useState } from "react";
import { LayoutAnimation, Platform, UIManager } from "react-native";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const useTruncateText = (text = "", maxLength = 100) => {
  const [expanded, setExpanded] = useState(false);

  const isLongText = text.length > maxLength;
  const showFullText = expanded || !isLongText;

  const displayedText = showFullText ? text : `${text.slice(0, maxLength)}...`;

  const toggleText = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((prev) => !prev);
  };

  return {
    displayedText,
    expanded,
    isLongText,
    toggleText,
  };
};

export default useTruncateText;
