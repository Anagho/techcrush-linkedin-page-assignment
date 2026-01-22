import { StyleSheet, Text, View } from "react-native";

const network = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Coming Soon</Text>
    </View>
  );
};

export default network;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  content: { fontSize: 30, fontWeight: "bold", color: "#888" },
});
