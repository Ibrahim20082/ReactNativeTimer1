import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';
import useTimer from '../SoundTimer';

export const SetTimer = ({ navigation }: any) => {
  const { seconds, minutes, start, stop, reset, isRunning } = useTimer();
  return (
    <View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Return"
          onPress={() => navigation.navigate('FirstScreen')}
        />
      </View>
    </View>
  );
};
