import Header from "@/components/Header";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Tabs, useSegments } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function TabLayout() {
  const [notificationsCount, setNotificationsCount] = useState(3);
  const [jobsCount, setJobsCount] = useState(1);

  // segments - to track the current tab | page
  const segments = useSegments();
  //   console.log(segments)
  const currentTab = segments[segments.length - 1];
  console.log(currentTab);
  const showHeader = currentTab !== "posts";

   const placeholders = {
     home: "Search",
     network: "Search people",
     jobs: "Search jobs",
     notifications: "Search notifications",
   };

  return (
    <>
      {showHeader && (
        <Header
          placeholder={placeholders[currentTab] || "Search"}
          messageCount={2}
        />
      )}

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#333",
          tabBarInactiveTintColor: "#687076",
          tabBarStyle: {
            borderTopWidth: 0.5,
            borderTopColor: "#ccc",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  borderTopWidth: focused ? 2 : 0,
                  borderTopColor: "#000",
                  paddingTop: 4, // small padding so icon doesn't touch border
                  alignItems: "center",
                }}
              >
                <Ionicons name="home" size={24} color={color} />
              </View>
            )
          }}
        />
        <Tabs.Screen
          name="network"
          options={{
            title: "My Network",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  borderTopWidth: focused ? 2 : 0,
                  borderTopColor: "#000",
                  paddingTop: 4,
                  alignItems: "center",
                }}
              >
                <Ionicons name="people" size={24} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="posts"
          options={{
            title: "Post",
            tabBarIcon: ({ color }) => (
              <Entypo name="squared-plus" size={24} color={color} />
            ),

            tabBarItemStyle: ({ focused }) => ({
              borderTopWidth: focused ? 2 : 0,
              borderTopColor: focused ? "#000" : "transparent",
            }),
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            title: "Notifications",
            tabBarBadge:
              notificationsCount > 0 ? notificationsCount : undefined,
            tabBarBadgeStyle: styles.badge,
            tabBarIcon: ({ color }) => (
              <Ionicons name="notifications" size={24} color={color} />
            ),

            tabBarItemStyle: ({ focused }) => ({
              borderTopWidth: focused ? 2 : 0,
              borderTopColor: focused ? "#000" : "transparent",
            }),
          }}
        />
        <Tabs.Screen
          name="jobs"
          options={{
            title: "Jobs",
            tabBarBadge: jobsCount > 0 ? jobsCount : undefined,
            tabBarBadgeStyle: styles.badge,
            tabBarIcon: ({ color }) => (
              <Ionicons name="bag" size={24} color={color} />
            ),

            tabBarItemStyle: ({ focused }) => ({
              borderTopWidth: focused ? 2 : 0,
              borderTopColor: focused ? "#000" : "transparent",
            }),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "rgba(180, 10, 10, 1)",
    fontSize: 10,
    fontWeight: "600",
    minWidth: 16,
    height: 16,
    paddingHorizontal: 4,
    textAlign: "center",
    lineHeight: 16,
  },
});


