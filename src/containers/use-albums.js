import { useState, useEffect } from 'react';
import { getAlbums } from '../services/artist-api';

export function useAlbums(id, page) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAlbums(id, page)
      .then(({ releases: albums }) => {
        setAlbums(albums.map(album => addCoverArt(album)));
        setLoading(false);
      });
  }, [id, page]);

  const addCoverArt = album => {
    const imgUrl = album['cover-art-archive'].front ?
      `http://coverartarchive.org/release/${album.id}/front` :
      '/src/assets/album-placeholder.jpg';
    return { ...album, imgUrl };
  };

  return { loading, albums };
}
