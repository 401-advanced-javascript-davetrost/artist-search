import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function TrackCard({ track, artist, album }) {
  return (
    <Link to={`/artist/${artist}/album/${album}/track/${track}`}>{track}</Link>
  );
}

TrackCard.propTypes = {
  track: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired
};
