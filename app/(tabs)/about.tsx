import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>This is About screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray"
  },
  text: {
    color: "white"
  }
})
