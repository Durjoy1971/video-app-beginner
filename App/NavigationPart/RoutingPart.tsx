import { Pressable, Text, View } from "react-native";

export default function RoutingPart({ navigation }: { navigation: any }) {
  return (
    <View
      style={{
        marginTop: 30,
        justifyContent: "center",
        flex: 1,
        flexDirection: "row",
        gap: 50,
      }}
    >
      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={{
          backgroundColor: "gray",
          height: 50,
          width: 80,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Home</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate("PlayList")}
        style={{
          backgroundColor: "gray",
          height: 50,
          width: 80,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>PlayList</Text>
      </Pressable>
    </View>
  );
}
