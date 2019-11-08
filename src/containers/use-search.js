import { useState } from 'react';

export function useSearch() {
  const [search, setSearch] = useState('');
  const handleChange = ({ target }) => setSearch(target.value);
  return { search, handleChange };
}
