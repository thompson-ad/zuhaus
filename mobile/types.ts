export interface Workout {
  'coach-notes': string;
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
export interface UserSession {
  uid: string;
  email: string;
  name: string;
  provider: string;
  photoUrl: string;
}

export interface AuthContextInterface {
  user: UserSession | null;
  loading: boolean;
  signinWithGoogle: () => void;
  signout: () => void;
}
