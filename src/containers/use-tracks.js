import { useState, useEffect } from 'react';
import { getTracks } from '../services/artist-api';

export function useTracks(id) {
  const [tracks, setTracks] = useState([]);
  
  useEffect(() => {
    getTracks(id)
      .then(({ recordings }) => {
        setTracks(recordings);
      });
  }, [id]);

  return { tracks };
}
