import React, { memo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AlbumCard from '../components/Album-Card';
import { getAlbums } from '../services/artist-api';
import styles from './Album-Deck.css';

function AlbumDeck() {
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(1);
  const { id, artist } = useParams();

  useEffect(() => {
    getReleases(page);
  }, [page]);

  const handlePageChange = page => {
    const newPage = Math.max(page, 1);
    getReleases(newPage);
    setPage(newPage);
  };

  const getReleases = page => {
    getAlbums(id, page)
      .then(({ releases }) => {
        setAlbums(releases);
      });
  };

  const albumCards = albums.map(album => {
    return (
      <li key={album.id}>
        <AlbumCard 
          artist={artist} 
          album={album.title} 
          album_id={album.id} 
        />
      </li>
    );
  });

  return (
    <section className={styles.AlbumDeck}>
      <button onClick={() => handlePageChange(page - 1)}>Back</button>
      <h2>Albums by: {artist}</h2>
      <ul>
        {albumCards}
      </ul>
      <button onClick={() => handlePageChange(page + 1)}>Next</button>
    </section>
  );

}

export const MemoAlbumDeck = memo(AlbumDeck);
