import * as React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { TextLarge, Caption } from "../../components/Text";

interface WorkoutPreviewProps {
  title: string;
  duration: number | null;
  thumbnail: string;
}

const WorkoutPreview = ({
  title,
  duration,
  thumbnail,
}: WorkoutPreviewProps) => {
  return (
    <View style={styles.workout}>
      <ImageBackground
        source={{
          uri: thumbnail,
        }}
        style={styles.workoutImage}
      >
        <View style={styles.workoutInfo}>
          <TextLarge textStyle={{ color: "#FFF" }}>{title}</TextLarge>
          <Caption textStyle={{ color: "#FFF" }}>
            {duration ? `${duration} mins` : ""}
          </Caption>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  workout: {
    marginRight: 20,
    height: 242,
    width: 260,
  },
  workoutImage: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  workoutInfo: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 25,
    backgroundColor: "rgba(0,0,0,0.15)",
  },
  workoutTitle: {
    marginTop: 5,
    flex: 0.6,
    alignSelf: "flex-end",
  },
  workoutDuration: {
    marginTop: 5,
    flex: 0.4,
    textAlign: "right",
    alignSelf: "flex-end",
  },
});

export default WorkoutPreview;
