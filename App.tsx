import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavigationScreen from "./App/NavigationPart/NavigationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff9966",
    padding: 20,
    marginTop: 33,
  },
});
