import * as React from "react";
import { SectionList, FlatList, TouchableOpacity } from "react-native";
import WorkoutPreview from "./WorkoutPreview";
import { TextHeader2 } from "../../components/Text";
import { Workouts } from "./interface";
import { ProfileScreenNavigationProp } from "../../screens/Programme";

interface ListWorkoutsProps {
  workouts: Workouts[];
  direction: "vertical" | "horizontal";
  navigation?: ProfileScreenNavigationProp;
}

const ListWorkouts = ({
  workouts,
  direction,
  navigation,
}: ListWorkoutsProps) => {
  return (
    <SectionList
      stickySectionHeadersEnabled={false}
      sections={workouts}
      keyExtractor={(item) => item.id}
      renderSectionHeader={({ section }) => (
        <>
          <TextHeader2>{section.title}</TextHeader2>
          {direction === "horizontal" ? (
            <FlatList
              horizontal
              data={section.data}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation
                        ? navigation.navigate("Workout", {
                            workout: item,
                          })
                        : null
                    }
                  >
                    <WorkoutPreview
                      title={item.name}
                      duration={item.duration ? item.duration / 60 : null}
                      thumbnail={item.thumbnail}
                    />
                  </TouchableOpacity>
                );
              }}
              showsHorizontalScrollIndicator={false}
            />
          ) : null}
        </>
      )}
      // Make this a flexible component that will render horizontally or vertically
      renderItem={({ item }) => {
        if (direction === "horizontal") {
          return null;
        }
        return (
          <WorkoutPreview
            title={item.name}
            duration={item.duration ? item.duration / 60 : null}
            thumbnail={item.thumbnail}
          />
        );
      }}
      ListEmptyComponent={() => <LargeTitle>You have no workouts</LargeTitle>}
    />
  );
};

export default ListWorkouts;
