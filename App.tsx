import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';
import useTimer from './SoundTimer';
import { playSound, stopSound } from './PlaySound';
import { SetTimer } from './Screens/SetTimer'

const Stack = createNativeStackNavigator();

const FirstScreen = ({ navigation, timerStart, timerStop, timerReset, isRunning, minutes, seconds }: any) => {
  return (
    <View>
      <Text style={{ fontSize: 120, bottom: 30 }}>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</Text>
      <View style={{ paddingLeft: 340, paddingRight: 5, bottom: 155 }}><Button title="Start" onPress={timerStart} disabled={isRunning} /></View>
      <View style={{ paddingLeft: 340, paddingRight: 5, bottom: 155 }}><Button title="Stop" onPress={timerStop} disabled={!isRunning} /></View>
      <View style={{ paddingLeft: 340, paddingRight: 5, bottom: 155 }}><Button title="Reset" onPress={timerReset} /></View>
      <Button title="Set time" onPress={() => navigation.navigate('SetTimer')} />
    </View>
  );
};
const SecondScreen = ({ route }: any) => {
  return <Text>Welcome to second screen!</Text>;
};

const App = () => {
  const { seconds, minutes, start, stop, reset, isRunning } = useTimer();

  const timerStart = () => {
    playSound();
    start();
  };

  const timerStop = () => {
    stopSound();
    stop();
  };

  const timerReset = () => {
    stopSound();
    reset();
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen">
          {(props) => (
            <FirstScreen
              {...props}
              timerStart={timerStart}
              timerStop={timerStop}
              timerReset={timerReset}
              isRunning={isRunning}
              minutes={minutes}
              seconds={seconds}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="SetTimer" component={SetTimer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;