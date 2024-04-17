import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./App/Screens/HomeScreen";
import PlayList from "./App/Screens/PlayList";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <PlayList />
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
