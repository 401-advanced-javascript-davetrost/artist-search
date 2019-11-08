import { useState, useEffect } from 'react';
import { getArtists } from '../services/artist-api';

export function useArtistSearch(page, search) {
  const [artists, setArtists] = useState([]);
  const [artistSearch, setArtistSearch] = useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
    setArtistSearch(search);
  };
  
  const isEmpty = string => /^\s*$/.test(string);

  useEffect(() => {
    if(!isEmpty(artistSearch)) {
      getArtists(artistSearch, page)
        .then(({ artists }) => {
          setArtists(artists);
        });
    }
  }, [page, artistSearch]);

  return { artists, handleSubmit };
}
