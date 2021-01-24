import * as React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { TextHeader3, TaglineLarge } from "../../components/Text";

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
          <View style={styles.workoutTitle}>
            <TextHeader3 textStyle={styles.workoutTitleText}>
              {title}
            </TextHeader3>
          </View>
          <View style={styles.workoutDuration}>
            <TaglineLarge textStyle={styles.workoutDurationText}>
              {duration ? `${duration} mins` : ""}
            </TaglineLarge>
          </View>
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
    backgroundColor: "rgba(0,0,0,0.20)",
  },
  workoutTitle: {
    marginTop: 5,
    alignSelf: "flex-end",
    flex: 0.6,
  },
  workoutTitleText: {
    color: "#FFF",
  },
  workoutDuration: {
    marginTop: 5,
    alignSelf: "flex-end",
    flex: 0.4,
  },
  workoutDurationText: {
    color: "#FFF",
    textAlign: "right",
  },
});

export default WorkoutPreview;
