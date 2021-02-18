import {StyleSheet} from 'react-native';
import {colours} from './colours';

export const typography = StyleSheet.create({
  textDark: {
    color: colours.darkGrey,
  },
  textLight: {
    color: colours.white,
  },
  body: {
    fontFamily: 'Fanwood Text',
  },
  heading: {
    fontFamily: 'SpaceGrotesk-Regular',
  },
  headline1: {
    fontSize: 40,
  },
  headline2: {
    fontSize: 28,
  },
  headline3: {
    fontSize: 22,
  },
  largeTitle: {
    fontSize: 34,
  },
  captionSmall: {
    fontSize: 11,
  },
  captionLarge: {
    fontSize: 13,
  },
  taglineSmall: {
    fontSize: 11,
  },
  taglineMedium: {
    fontSize: 13,
  },
  taglineLarge: {
    fontSize: 15,
  },
  bodySmall: {
    fontSize: 15,
  },
  bodyMedium: {
    fontSize: 17,
  },
  bodyLarge: {
    fontSize: 20,
  },
});
