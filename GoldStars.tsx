import { Audio } from 'expo-av';
import { Image, TouchableWithoutFeedback, Vibration, View } from 'react-native';
import React, { useState } from 'react';

import sound from './assets/first-prize.wav';

interface Props {
  onSuccess: fn,
}
export default function GoldStars(props: Props) {
  const { onSuccess } = props;
  const [count, setCount] = useState(0);
  const handlePress = () => {
    Audio.Sound.createAsync(sound, { shouldPlay: true }).then(() => {
      Vibration.vibrate(400);
      setCount(count + 1);
      onSuccess();
    });
  };
  return (
    <>
      <View style={styles.container}>
        {Array(count).fill(null).map((n, i) => (
          <Image 
            key={i}
            source={{ uri: 'https://assets.kidson45th.com/images/icons/star.png' }}
            style={{width: 50, height: 50}} 
          />
        ))}
      </View>
      <TouchableWithoutFeedback onPress={handlePress} onLongPress={() => setCount(0)}>
        <Image 
          source={{ uri: 'https://assets.kidson45th.com/images/icons/bell.png' }}
          style={styles.bell} 
        />
      </TouchableWithoutFeedback>
    </>
  )
}

const styles = {
  container: {
    height: '85%',
    display: 'flex',
    position: 'absolute',
    flexWrap: 'wrap',
    top: 12,
    left: 12,
  },
  bell: { 
    width: 50,
    height: 50,
    right: 12,
    bottom: 12,
    position: 'absolute',
    zIndex: 500,
  },
};
