import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ArtistCard({ id, artist }) {
  return (
    <div>
      <h2>
        <Link to={`/artist/${artist}/${id}`}>{artist}</Link>
      </h2>
    </div>
  );
}

ArtistCard.propTypes = {
  artist: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};


