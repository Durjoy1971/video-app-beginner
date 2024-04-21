import { View, Text } from "react-native";
import TopCourse from "../Components/TopCourse";
import RoutingPart from "../NavigationPart/RoutingPart";

function PlayList({ navigation }: { navigation: any }) {
  return (
    <View style={{ backgroundColor: "#ff9966", flex: 1 }}>
      <TopCourse />
      <RoutingPart navigation={navigation} />
    </View>
  );
}

export default PlayList;
