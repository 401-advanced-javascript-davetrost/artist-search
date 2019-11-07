import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TrackCard from '../components/Track-Card';
import { getTracks } from '../services/artist-api';
import styles from './TrackDeck.css';

export default function TrackDeck({ match }) {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getTracks(match.params.id)
      .then(({ recordings }) => {
        setTracks(recordings);
      });
  }, [match.params.id]);

  const trackCards = tracks.map(track => {
    return (
      <li key={track.id} >
        <TrackCard 
          album={match.params.album} 
          track={track.title} 
          artist={match.params.artist} 
        />
      </li>
    );
  });

  return (
    <>
      <section className={styles.TrackDeck}>
        <h2>{match.params.album}</h2>
        <h3>by: {match.params.artist}</h3>
        <ul>
          {trackCards}
        </ul>
      </section>
    </>
  );
}

TrackDeck.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      album: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
