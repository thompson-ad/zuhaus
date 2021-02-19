import * as React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import {TextLarge} from '../components/Text';
import {useAuth} from '../lib/auth';

const Welcome = () => {
  const {user, signinWithGoogle, signout} = useAuth();

  if (!user) {
    return (
      <ImageBackground
        style={styles.background}
        source={require('../assets/background.jpg')}>
        <TextLarge textStyle={styles.buttonText}>Sign in</TextLarge>
        <TouchableOpacity style={styles.button}>
          <Button title="Google Sign-In" onPress={() => signinWithGoogle()} />
        </TouchableOpacity>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <TextLarge
        textStyle={styles.buttonText}>{`Welcome ${user.email}`}</TextLarge>
      <TouchableOpacity style={styles.button}>
        <Button title="Sign Out" onPress={() => signout()} />
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
