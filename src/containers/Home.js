import React, { useState } from 'react';
import { MemoArtistDeck } from './Artist-Deck';
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

  const handlePageChange = page => {
    const newPage = Math.max(page, 1);
    getArtistsByPage(newPage);
    setPage(newPage);
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
      <MemoArtistDeck
        artists={artists}
        handleBack={() => handlePageChange(page - 1)}
        handleNext={() => handlePageChange(page + 1)}
      />
    </div>
  );
}
