import { View, Text, Image, StyleSheet } from "react-native";

function HeaderPart() {
  return (
    <View style={styles.container}>
      <Text style={styles.WelcomeText}> Welcome </Text>
      <Text style={styles.WelcomeText}> Durjoy Barua. </Text>
      <Image
        style={styles.userImage}
        source={require("./../../assets/Profile.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  WelcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default HeaderPart;
