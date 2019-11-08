import React from 'react';
import { useParams } from 'react-router-dom';
import { useLyrics } from '../containers/use-lyrics';
import styles from './Lyrics.css';

export default function Lyrics() {
  const { artist, album, track } = useParams();
  const { lyrics } = useLyrics(artist, track);

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
