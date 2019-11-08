import { useState, useEffect } from 'react';
import { getAlbums } from '../services/artist-api';

export function useAlbums(id, page) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums(id, page)
      .then(({ releases }) => {
        setAlbums(releases);
      });
  }, [id, page]);

  return { albums };
}
