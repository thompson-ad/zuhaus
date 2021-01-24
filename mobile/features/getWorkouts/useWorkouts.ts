import { IOS_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS } from "expo-av/build/Video";

import * as React from "react";
import { Workouts } from "./interface";

export const useWorkouts = () => {
  const [workouts, setWorkouts] = React.useState<Workouts[] | null>(null);

  const getWorkoutsFromAirtable = async () => {
    try {
      let response = await fetch(
        "http://192.168.1.249:8888/.netlify/functions/airtable"
      );
      let json = await response.json();
      console.log(json);
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getWorkoutsFromAirtable().then((data) => setWorkouts(data));
  }, []);

  return workouts;
};
