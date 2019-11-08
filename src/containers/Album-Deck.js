import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { usePaging } from './use-paging';
import { useAlbums } from './use-albums';

import AlbumCard from '../components/Album-Card';
import styles from './Album-Deck.css';
import Loading from '../components/Loading';

function AlbumDeck() {
  const { id, artist } = useParams();
  const { page, handleBack, handleNext } = usePaging();
  const { loading, albums } = useAlbums(id, page);
  
  const albumCards = albums.map(album => {
    return (
      <li key={album.id}>
        <AlbumCard 
          artist={artist} 
          album={album.title} 
          album_id={album.id} 
          imgUrl={album.imgUrl}
        />
      </li>
    );
  });

  return (
    <>
      {loading && <Loading />}
      {!loading &&
        <section className={styles.AlbumDeck}>
          <button onClick={handleBack}>Back</button>
          <h2>Albums by: {artist}</h2>
          <ul>
            {albumCards}
          </ul>
          <button onClick={handleNext}>Next</button>
        </section>
      }
    </>
  );

}

export const MemoAlbumDeck = memo(AlbumDeck);
