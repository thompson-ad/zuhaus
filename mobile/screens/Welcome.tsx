import * as React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import {TextLarge} from '../components/Text';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {webClientId} from '../config/config';

GoogleSignin.configure({
  webClientId,
});

async function onGoogleButtonPress() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

function GoogleSignIn() {
  return (
    <Button
      title="Google Sign-In"
      onPress={() =>
        onGoogleButtonPress().then(() => console.log('Signed in with Google!'))
      }
    />
  );
}

const Welcome = () => {
  // Set an initializing state whilst Firebase connects
  const [loading, setLoading] = React.useState<boolean>(true);
  const [user, setUser] = React.useState<FirebaseAuthTypes.User | null>(null);

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged((userState) => {
      setUser(userState);
      if (loading) {
        setLoading(false);
      }
    });
    return subscriber;
  }, [loading, user]);

  if (loading) {
    return null;
  }

  if (!user) {
    return (
      <ImageBackground
        style={styles.background}
        source={require('../assets/background.jpg')}>
        <TouchableOpacity style={styles.button}>
          <TextLarge textStyle={styles.buttonText}>Sign in</TextLarge>
          <GoogleSignIn />
        </TouchableOpacity>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <TouchableOpacity style={styles.button}>
        <TextLarge
          textStyle={styles.buttonText}>{`Welcome ${user.email}`}</TextLarge>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
  titleContainer: {
    position: 'absolute',
    top: 170,
  },
  button: {
    width: 200,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'white',
    padding: 5,
    margin: '2%',
  },
  buttonText: {
    textAlign: 'center',
  },
  inlineText: {
    textAlign: 'center',
    marginTop: '5%',
  },
});
