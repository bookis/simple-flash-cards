import { Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';

interface Props {
  letters: string[],
  selectedLetters: string[],
  setSelectedLetters: () => void,
}

export default function FlashCardSelector(props: Props) {
  const { letters, selectedLetters, setSelectedLetters } = props;
  const toggleLetter = letter => {
    const index = selectedLetters.indexOf(letter);
    const newLetters = [...selectedLetters];
    if (index >= 0) {
      newLetters.splice(index, 1);
    } else {
      newLetters.push(letter);
    }
    setSelectedLetters(newLetters);
  }

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {letters.map(letter => (
          <View key={letter} style={styles.square}>
            <TouchableWithoutFeedback 
              onPress={() => toggleLetter(letter)}
            >
              <Text
                style={selectedLetters.indexOf(letter) >= 0 ? styles.selectedLetter : styles.letter}
              >
                {letter}
              </Text>
            </TouchableWithoutFeedback>
          </View>
        ))}
      </View>
      <View style={styles.actions}>
        <TouchableWithoutFeedback 
          onPress={() => setSelectedLetters([...letters])}
        >
          <Text style={styles.text}>Select All</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback 
          onPress={() => setSelectedLetters([])}
        >
          <Text style={styles.text}>Clear</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#2274A5',
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: '#2274A5',
  },
  text: {
    color: '#fff',
  },
  grid: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  square: {
    width: '25%',
    height: `${100 / 13}%`,
    borderWidth: 1,
    borderColor: '#62c4f5',
    backgroundColor: '#2274A5',
  },
  letter: {
    fontSize: 44,
    color: '#fff',
    textAlign: 'center',
  },
  selectedLetter: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#ff0',
    textAlign: 'center',
  },
};
