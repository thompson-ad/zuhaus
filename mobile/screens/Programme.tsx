import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';
import {colours} from '../styles/colours';
import {useWorkouts} from '../features/getWorkouts/useWorkouts';
import {LargeTitle, MyText} from '../components/Text';
import ListWorkouts from '../features/getWorkouts/ListWorkouts';

export type ProgrammeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Programme'
>;

interface ProgrammeScreenProps {
  navigation: ProgrammeScreenNavigationProp;
}

const Programme = ({navigation}: ProgrammeScreenProps) => {
  const {isError, error, data: workouts} = useWorkouts();

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <LargeTitle>Zuhaus At Home</LargeTitle>
      </View>
      <MyText>
        Here you can view the entire programme. We encourage you to follow the
        workouts in order to gain as much as possible from the programme.
      </MyText>
      <View style={styles.listWorkoutsContainer}>
        <ListWorkouts
          workouts={workouts}
          direction="horizontal"
          navigation={navigation}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.lightGrey,
    flex: 1,
    margin: 20,
  },
  sectionHeader: {
    marginBottom: 5,
  },
  listWorkoutsContainer: {
    marginTop: 20,
  },
});

export default Programme;
