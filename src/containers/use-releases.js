import { useState, useEffect } from 'react';
import { getAlbums } from '../services/artist-api';

export function useAlbums(id, page) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAlbums(id, page)
      .then(({ releases }) => {
        setAlbums(releases);
        setLoading(false);
      });
  }, [id, page]);

  return { loading, albums };
}
