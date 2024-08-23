import React, { Component } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import Sound from 'react-native-sound'


Sound.setCategory('Playback');

let sound: Sound;

export const playSound = () => {
  sound = new Sound('https://zvukogram.com/index.php?r=site/download&id=75045', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      return;
    }
    sound.setNumberOfLoops(-1);
    sound.play((success) => {
      sound.release();
    });
  });
}
export const stopSound = () => {
  if (sound) {
    sound.stop();
  }
}

export default { playSound, stopSound };




