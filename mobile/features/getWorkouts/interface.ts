export interface Workout {
  "coach-notes": string;
  day: number;
  duration: number;
  id: string;
  info: string;
  name: string;
  video: string;
  thumbnail: string;
  week: number;
  workoutProgramme: string[];
  workoutStages: string[];
}

export interface Workouts {
  title: string;
  data: Workout[];
}
