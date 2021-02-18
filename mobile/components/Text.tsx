import * as React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
import {typography} from '../styles/typography';

interface TextProps {
  textStyle?: TextStyle;
}

// BODY TEXT
export const MyText: React.FC<TextProps> = ({textStyle, children}) => (
  <Text style={[styles.myText, textStyle]}>{children}</Text>
);

export const TextSmall: React.FC = ({children}) => (
  <MyText>
    <Text style={styles.textSmall}>{children}</Text>
  </MyText>
);

export const TextLarge: React.FC<TextProps> = ({textStyle, children}) => (
  <MyText>
    <Text style={[styles.textLarge, textStyle]}>{children}</Text>
  </MyText>
);

// Header Text
const TextHeader: React.FC = ({children}) => (
  <MyText>
    <Text style={styles.textHeader}>{children}</Text>
  </MyText>
);

export const TextHeader1: React.FC = ({children}) => (
  <TextHeader>
    <Text style={styles.textHeader1}>{children}</Text>
  </TextHeader>
);

export const LargeTitle: React.FC<TextProps> = ({textStyle, children}) => (
  <TextHeader>
    <Text style={[styles.largeTitle, textStyle]}>{children}</Text>
  </TextHeader>
);

export const TextHeader2: React.FC = ({children}) => (
  <TextHeader>
    <Text style={styles.textHeader2}>{children}</Text>
  </TextHeader>
);

export const TextHeader3: React.FC<TextProps> = ({textStyle, children}) => (
  <TextHeader>
    <Text style={[styles.textHeader3, textStyle]}>{children}</Text>
  </TextHeader>
);

// CAPTION TEXT
export const Caption: React.FC<TextProps> = ({textStyle, children}) => (
  <MyText>
    <Text style={[styles.caption, textStyle]}>{children}</Text>
  </MyText>
);

export const CaptionLarge: React.FC<TextProps> = ({textStyle, children}) => (
  <MyText>
    <Text style={[styles.captionLarge, textStyle]}>{children}</Text>
  </MyText>
);

// TAGLINE TEXT
export const Tagline: React.FC<TextProps> = ({textStyle, children}) => (
  <TextHeader>
    <Text style={[styles.tagline, textStyle]}>{children}</Text>
  </TextHeader>
);

export const TaglineSmall: React.FC<TextProps> = ({textStyle, children}) => (
  <TextHeader>
    <Text style={[styles.taglineSmall, textStyle]}>{children}</Text>
  </TextHeader>
);

export const TaglineLarge: React.FC<TextProps> = ({textStyle, children}) => (
  <TextHeader>
    <Text style={[styles.taglineLarge, textStyle]}>{children}</Text>
  </TextHeader>
);

const styles = StyleSheet.create({
  myText: {
    ...typography.textDark,
    ...typography.body,
    ...typography.bodyMedium,
  },
  textSmall: {
    ...typography.bodySmall,
  },
  textLarge: {
    ...typography.bodyLarge,
  },
  textHeader: {
    ...typography.heading,
  },
  textHeader1: {
    ...typography.headline1,
  },
  largeTitle: {
    ...typography.largeTitle,
  },
  textHeader2: {
    ...typography.headline2,
  },
  textHeader3: {
    ...typography.headline3,
  },
  caption: {
    ...typography.captionSmall,
  },
  captionLarge: {
    ...typography.captionLarge,
  },
  tagline: {
    ...typography.taglineMedium,
  },
  taglineSmall: {
    ...typography.taglineSmall,
  },
  taglineLarge: {
    ...typography.taglineLarge,
  },
});
