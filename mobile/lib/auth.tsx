import * as React from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {webClientId} from '../config/config';
import {AuthContextInterface, UserSession} from '../types';
import {createUser} from './db';
import {formatUser} from '../utils/formatUser';

GoogleSignin.configure({
  webClientId,
});

const AuthContext = React.createContext({} as AuthContextInterface);

export const AuthProvider: React.FC = ({children}) => {
  const authValue: AuthContextInterface = useProvideAuth();
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = React.useState<UserSession | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleUser = React.useCallback((rawUser: any) => {
    if (rawUser) {
      const formattedUser = formatUser(rawUser);
      createUser(formattedUser.uid, formattedUser);
      setUser(formattedUser);
      setLoading(false);
    } else {
      setUser(null);
      setLoading(false);
    }
  }, []);

  const signinWithGoogle = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };

  const signout = () =>
    auth()
      .signOut()
      .then(() => setUser(null));

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(handleUser);
    return subscriber;
  }, [handleUser]);

  return {
    user,
    loading,
    signinWithGoogle,
    signout,
  };
}
