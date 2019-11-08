import { useState, useEffect } from 'react';
import { getTracks } from '../services/artist-api';

export function useTracks(id) {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTracks(id)
      .then(({ recordings }) => {
        setTracks(recordings);
        setLoading(false);
      });
  }, [id]);

  return { loading, tracks };
}
