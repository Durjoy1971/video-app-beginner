import { View } from "react-native";
import HeaderPart from "../Components/Header";
import Slider from "../Components/Slider";
import TopCourse from "../Components/TopCourse";
import RoutingPart from "../NavigationPart/RoutingPart";

function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ backgroundColor: "#ff9966", flex: 1 }}>
      <HeaderPart />
      <Slider />
      <TopCourse />
      <RoutingPart navigation={navigation} />
    </View>
  );
}

export default HomeScreen;
