import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

import firstImage from "./../../assets/first.png";
import secondImage from "./../../assets/second.png";

export default function Slider() {
  interface sliderListTS {
    id: number;
    sourceLink: any;
  }

  const sliderList: sliderListTS[] = [
    {
      id: 1,
      sourceLink: firstImage,
    },
    {
      id: 2,
      sourceLink: secondImage,
    },
  ];

  return (
    <View>
      <Text style={styles.textColor}> Want a Break ? </Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={sliderList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Image source={item.sourceLink} style={styles.sliderImage} />
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  sliderImage: {
    width: Dimensions.get("window").width * 0.82,
    height: 190,
    marginTop: 15,
    marginBottom: 30,
    marginRight: 15,
    borderRadius: 10,
  },
  textColor: {
    marginTop: 30,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});
