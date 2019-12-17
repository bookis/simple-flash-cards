import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';

import FlashCardSelector from './FlashCardSelector';
import FlashCards from './FlashCards';

const Stack = createStackNavigator();
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


export default function App() {
  const [selectedLetters, setSelectedLetters] = useState([...letters]);
  return (
    <NavigationNativeContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: styles.header,
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="Flash Cards">
          {props => <FlashCards {...props} letters={selectedLetters} />}
        </Stack.Screen>
        <Stack.Screen name="SelectCards">
          {props => <FlashCardSelector {...props} setSelectedLetters={setSelectedLetters} selectedLetters={selectedLetters} letters={letters} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

const styles = {
  header: {
    backgroundColor: '#2274A5',
  },
};
