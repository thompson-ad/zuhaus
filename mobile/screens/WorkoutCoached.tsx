import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Video from 'react-native-video';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../App';
import {MyText, LargeTitle, Tagline} from '../components/Text';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Workout Coached'>;

interface WorkoutCoachedProps {
  route: ProfileScreenRouteProp;
}

const WorkoutCoached = ({route}: WorkoutCoachedProps) => {
  const {workout} = route.params;

  return (
    <ScrollView style={styles.container}>
      <Video
        source={{
          uri: `${workout.video}`,
        }}
        style={styles.workoutVideo}
      />
      <View style={styles.workoutMeta}>
        <Tagline>
          W{workout.week} &gt; D{workout.day}
        </Tagline>
        <Tagline>{workout.duration / 60} MIN</Tagline>
      </View>
      <View style={styles.workoutInfo}>
        <View style={styles.workoutInfoTitle}>
          <LargeTitle>{workout.name}</LargeTitle>
        </View>
        <MyText>{workout.info}</MyText>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'SpaceGrotesk-Regular',
    backgroundColor: '#F6F6F6',
  },
  workoutVideo: {
    width: '100%',
    height: 220,
  },
  workoutMeta: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginBottom: 15,
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(33, 33, 33, 0.2)',
    borderBottomWidth: 1,
  },
  workoutInfo: {
    paddingHorizontal: 40,
  },
  workoutInfoTitle: {
    marginBottom: 5,
  },
});

export default WorkoutCoached;
