import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

function TopCourse() {
  const courseList = [
    {
      id: "rJORiMZe2hA",
      courseName: "API Handling",
      courseLink: "https://i.ytimg.com/vi/rJORiMZe2hA/hq720.jpg",
    },
    {
      id: "PnPc2xDwMvQ",
      courseName: "Should We Learn Python",
      courseLink: "https://i.ytimg.com/vi/PnPc2xDwMvQ/hq720.jpg",
    },
    {
      id: "daql1aB2b_M",
      courseName: "Resume Writing Guide",
      courseLink: "https://i.ytimg.com/vi/daql1aB2b_M/hq720.jpg",
    },
  ];
  return (
    <View>
      <Text style={styles.textColor}> Top Course List</Text>
      <FlatList
        data={courseList}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View>
              <Image
                source={{ uri: item.courseLink }}
                style={{
                  marginRight: 15,
                  marginTop: 15,
                  marginBottom: 10,
                  width: Dimensions.get("window").width * 0.8,
                  height: 200,
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: "bold",
                  textAlign: "center",
                  textAlignVertical: "center",
                }}
              >
                {item.courseName}
              </Text>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  textColor: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TopCourse;
