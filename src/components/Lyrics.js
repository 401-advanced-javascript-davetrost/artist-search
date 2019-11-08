import React from 'react';
import { useParams } from 'react-router-dom';
import { useLyrics } from '../containers/use-lyrics';
import styles from './Lyrics.css';
import Loading from './Loading';

export default function Lyrics() {
  const { artist, album, track } = useParams();
  const { loading, lyrics } = useLyrics(artist, track);

  return (
    <>
      {loading && <Loading />}
      {!loading && lyrics &&
        <div className={styles.Lyrics}>
          <h1>{track}</h1>
          <h2>by: {artist}</h2>
          <pre>{lyrics}</pre>
        </div>
      }
      {!loading && !lyrics &&
        <div className={styles.Lyrics}>
          <h1>Sorry, no lyrics found!</h1>
          <img src="/src/assets/giphy.gif" />
        </div>
      }
    </>
  );
}
