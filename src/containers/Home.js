import React from 'react';
import { usePaging } from './use-paging';
import { useArtistSearch } from './use-artist-search';

import { MemoArtistDeck } from './Artist-Deck';
import Search from '../components/Search';
import styles from './Home.css';

export default function Home() {
  const { page, handleBack, handleNext } = usePaging();
  const { data, artists, handleChange, handleSubmit } = useArtistSearch(page);
  
  return (
    <div className={styles.Home}>
      <Search
        handleSubmit={handleSubmit}
        handleChange={handleChange} 
      />
      {data && 
        <MemoArtistDeck
          artists={artists}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      }
    </div>
  );
}
