import { useState, useEffect } from 'react';
import getLyrics from '../services/lyrics-api';

export function useLyrics(artist, track) {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    getLyrics(artist, track)
      .then(({ lyrics }) => {
        setLyrics(lyrics);
      });
  }, [artist, track]);

  return { lyrics };
}
