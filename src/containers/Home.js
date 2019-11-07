import React, { useState } from 'react';
import ArtistDeck from './Artist-Deck';
import Search from '../components/Search';
import { getArtists } from '../services/artist-api';
import styles from './Home.css';

export default function Home() {
  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const handleChange = ({ target }) => setSearch(target.value);

  const handleSubmit = event => {
    event.preventDefault();
    getArtistsByPage(page);
  };
  const handleBack = () => handlePageChange(Math.max(1, page - 1));
  const handleNext = () => handlePageChange(page + 1);

  const handlePageChange = page => {
    getArtistsByPage(page);
    setPage(page);
  };
  const getArtistsByPage = page => {
    getArtists(search, page)
      .then(({ artists }) => {
        setArtists(artists);
      });
  };

  return (
    <div className={styles.Home}>
      <Search
        handleSubmit={handleSubmit}
        handleChange={handleChange} 
      />
      <ArtistDeck
        artists={artists}
        handleBack={handleBack}
        handleNext={handleNext}
      />
    </div>
  );
}
