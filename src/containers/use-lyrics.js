import { useState, useEffect } from 'react';
import getLyrics from '../services/lyrics-api';

export function useLyrics(artist, track) {
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLyrics(artist, track)
      .then(({ lyrics }) => {
        setLyrics(lyrics);
        setLoading(false);
      });
  }, [artist, track]);

  return { loading, lyrics };
}
