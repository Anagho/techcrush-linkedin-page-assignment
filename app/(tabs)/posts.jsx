import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const posts = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View>
        <Text style={styles.content}>Coming Soon</Text>
      </View>
    </SafeAreaView>
  )
}

export default posts

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  content: { fontSize: 30, fontWeight: "bold", color: "#888" },
});