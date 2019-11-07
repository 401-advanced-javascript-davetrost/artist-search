import React from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image';
import { Link } from 'react-router-dom';

export default function AlbumCard({ album, album_id, artist }) {
  const imgUrl = `http://coverartarchive.org/release/${album_id}/front`;
  return (
    <div>
      <Link to={`/artist/${artist}/album/${album}/${album_id}`}>
        <h2>{album}</h2>
        <Img src={[imgUrl, '/src/assets/album-placeholder.jpg']} alt={'cover art'} />
      </Link>
    </div>
  );
}

AlbumCard.propTypes = {
  album_id: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};
