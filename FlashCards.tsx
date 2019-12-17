import {
  Button,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import React, { useState } from 'react';

import GoldStars from './GoldStars';

interface FlashCardProps {
  letters: string[],
  navigation: object,
}

export default function FlashCards(props: FlashCardProps) {
  const letters = props.letters;
  const navigation = props.navigation;
  navigation.setOptions({
    headerRight: () => (
      <Button title="Change" color='#fff' onPress={() => navigation.navigate('SelectCards')} />
    ),
  });
  const [letterIndex, setLetterIndex] = useState(0);
  const handleNext = () => {
    const nextLetter = letters[letterIndex + 1];
    if (!nextLetter) return setLetterIndex(0);
    setLetterIndex(letterIndex + 1);
  };
  const handlePrev = () => {
    const nextLetter = letters[letterIndex - 1];
    if (!nextLetter) return setLetterIndex(letters.length - 1);
    setLetterIndex(letterIndex - 1);
  };
  return (
    <View style={styles.container}>
      <GoldStars onSuccess={handleNext} />
      <TouchableWithoutFeedback style={styles.highlight} onPress={handleNext} onLongPress={handlePrev}>
        <View style={styles.highlight}>
          <Text style={styles.text}>{letters[letterIndex]}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2274A5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  config: { position: 'absolute', top: 24,
    right: 24,
    zIndex: 100,
  },
  highlight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 360,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  }
});
