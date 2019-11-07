import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TrackCard from '../components/Track-Card';
import { getTracks } from '../services/artist-api';
import styles from './TrackDeck.css';

export default function TrackDeck() {
  const [tracks, setTracks] = useState([]);
  const { id, album, artist } = useParams();

  useEffect(() => {
    getTracks(id)
      .then(({ recordings }) => {
        setTracks(recordings);
      });
  }, [id]);

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
      <section className={styles.TrackDeck}>
        <h2>{album}</h2>
        <h3>by: {artist}</h3>
        <ul>
          {trackCards}
        </ul>
      </section>
    </>
  );
}
