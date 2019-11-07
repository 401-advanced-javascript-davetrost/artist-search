import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getLyrics from '../services/lyrics-api';
import styles from './Lyrics.css';

export default function Lyrics() {
  const [lyrics, setLyrics] = useState('');
  const { artist, album, track } = useParams();

  useEffect(() => {
    getLyrics(artist, track)
      .then(({ lyrics }) => {
        setLyrics(lyrics);
      });
  }, [artist, track]);

  return (
    <>
      <div className={styles.Lyrics}>
        <h1>Lyrics for {track}</h1>
        <h2>by {artist} on the album {album}</h2>
        <pre>{lyrics}</pre>
        {!lyrics &&
          <>
            <p>Sorry, no lyrics found!</p>
            <img src="/src/assets/giphy.gif" />
          </>}
      </div>
    </>
  );
}
