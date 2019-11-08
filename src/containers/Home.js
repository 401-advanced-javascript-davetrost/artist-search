import React, { useState, useEffect } from 'react';
import { MemoArtistDeck } from './Artist-Deck';
import Search from '../components/Search';
import { getArtists } from '../services/artist-api';
import styles from './Home.css';

function useArtists(page, search) {
  const [artists, setArtists] = useState([]);
  
  useEffect(() => {
    if(search !== '') {
      getArtists(search, page)
        .then(({ artists }) => {
          console.log('search =', search);
          setArtists(artists);
        });
    }
  }, [page, search]);

  return { artists };
}

export default function Home() {
  const [search, setSearch] = useState('');
  const [submittedSeach, setSubmittedSearch] = useState('');
  const [page, setPage] = useState(1);
  
  // let submittedSearch = '';
  const { artists } = useArtists(page, submittedSeach);

  const handleChange = ({ target }) => setSearch(target.value);
  
  const handleSubmit = event => {
    event.preventDefault();
    // submittedSearch = search;
    setSubmittedSearch(search);
  };

  const handlePageChange = page => {
    const newPage = Math.max(page, 1);
    setPage(newPage);
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

const isEmpty = string => /^\w*$/.test(string);
