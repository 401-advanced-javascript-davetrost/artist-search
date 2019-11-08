import React from 'react';
import { useSearch } from './use-search';
import { usePaging } from './use-paging';
import { useArtistSearch } from './use-artist-search';

import { MemoArtistDeck } from './Artist-Deck';
import Search from '../components/Search';
import styles from './Home.css';

export default function Home() {
  const { search, handleChange } = useSearch();
  const { page, handleBack, handleNext } = usePaging();
  const { artists, handleSubmit } = useArtistSearch(page, search);
  
  return (
    <div className={styles.Home}>
      <Search
        handleSubmit={handleSubmit}
        handleChange={handleChange} 
      />
      <MemoArtistDeck
        artists={artists}
        handleBack={handleBack}
        handleNext={handleNext}
      />
    </div>
  );
}
