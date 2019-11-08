import React from 'react';
import { useParams } from 'react-router-dom';
import { useTracks } from './use-tracks';

import TrackCard from '../components/Track-Card';
import styles from './TrackDeck.css';
import Loading from '../components/Loading';

export default function TrackDeck() {
  const { id, album, artist } = useParams();
  const { loading, tracks } = useTracks(id);
  
  const trackCards = tracks.map(track => {
    return (
      <li key={track.id} >
        <TrackCard 
          album={album} 
          track={track.title} 
          artist={artist} 
        />
      </li>
    );
  });

  return (
    <>
      {loading && <Loading />}
      {!loading &&
        <section className={styles.TrackDeck}>
          <h2>{album}</h2>
          <h3>by: {artist}</h3>
          <ul>
            {trackCards}
          </ul>
        </section>
      }
    </>
  );
}
