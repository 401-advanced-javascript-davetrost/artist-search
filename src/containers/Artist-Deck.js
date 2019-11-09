import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ArtistCard from '../components/Artist-Card';
import styles from './Artist-Deck.css';

function ArtistDeck({ artists, handleNext, handleBack }) {
  const artistCards = artists.map(artist => {
    return (
      <li key={artist.id}>
        <ArtistCard id={artist.id} artist={artist.name} />
      </li>
    );
  });

  return (
    <section className={styles.ArtistDeck}>
      <button name="back" onClick={handleBack}>Back</button>
      <ul>
        {artistCards}
      </ul>
      <button name="next" onClick={handleNext}>Next</button>
    </section>
  );
}

ArtistDeck.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })).isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired
};

export const MemoArtistDeck = memo(ArtistDeck);
