import { useState, useEffect } from 'react';
import { getArtists } from '../services/artist-api';

export function useArtistSearch(page, search) {
  const [artists, setArtists] = useState([]);
  const [artistSearch, setArtistSearch] = useState('');
  const [data, setData] = useState(false);
  
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
          setData(true);
        });
    }
  }, [page, artistSearch]);

  return { data, artists, handleSubmit };
}
