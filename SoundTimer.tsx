import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { playSound, stopSound } from './PlaySound';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const useTimer = () => {
    const [seconds, setSeconds] = useState(5);
    const [minutes, setMinutes] = useState(5);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer: any;
        if (isRunning) {
            timer = setInterval(() => {
                setSeconds(prev => {
                    if (prev === 0) {
                        setMinutes(minutes => minutes - 1);
                        if (minutes <= 0) {
                            reset(); stop(); stopSound();
                        }
                        return 59;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [isRunning]);

    const start = function () { setIsRunning(true); };
    const stop = () => setIsRunning(false);
    const reset = () => {
        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
    };

    return { seconds, minutes, start, stop, reset, isRunning };
};

export default useTimer;