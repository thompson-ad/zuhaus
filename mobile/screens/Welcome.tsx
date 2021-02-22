import * as React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {GoogleSigninButton} from '@react-native-community/google-signin';
import {useAuth} from '../lib/auth';
import {TextHeader3} from '../components/Text';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../App';

type WelcomeNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

interface WelcomeScreenProps {
  navigation: WelcomeNavigationProp;
}

const Welcome = ({navigation}: WelcomeScreenProps) => {
  const {user, loading, signinWithGoogle} = useAuth();

  React.useEffect(() => {
    if (user) {
      navigation.navigate('Programme');
    }
  }, [navigation, user]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.captionContainer}>
        <TextHeader3>Inspired by the best</TextHeader3>
        <TextHeader3>delivered by us</TextHeader3>
      </View>
      <View style={styles.signInButtonContainer}>
        <GoogleSigninButton
          style={styles.signInWithGoogleButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={signinWithGoogle}
          disabled={loading}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 0.25,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 175,
    height: 85,
  },
  captionContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonContainer: {
    alignItems: 'center',
  },
  signInWithGoogleButton: {
    width: 192,
    height: 48,
  },
});
