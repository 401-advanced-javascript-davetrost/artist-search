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
        <div className={styles.AlbumDeck}>
          <h1><span>Albums by:</span> {artist}</h1>
          <section>
            <button onClick={handleBack}>Back</button>
            <ul>
              {albumCards}
            </ul>
            <button onClick={handleNext}>Next</button>
          </section>
        </div>
      }
    </>
  );

}

export const MemoAlbumDeck = memo(AlbumDeck);
