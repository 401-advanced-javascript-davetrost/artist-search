import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function AlbumCard({ album, album_id, artist, imgUrl }) {
  return (
    <div>
      <Link to={`/artist/${artist}/album/${album}/${album_id}`}>
        <img src={imgUrl} alt={`cover art for "${album}"`} />
        <h2>{album}</h2>
      </Link>
    </div>
  );
}

AlbumCard.propTypes = {
  album_id: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
};
