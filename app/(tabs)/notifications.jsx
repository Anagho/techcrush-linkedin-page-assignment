import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const notifications = () => {
  return (
     <View style={styles.container}>
          <Text style={styles.content}>Coming Soon</Text>
        </View>
  )
}

export default notifications

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  content: { fontSize: 30, fontWeight: "bold", color: "#888" },
});