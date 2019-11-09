import { useState } from 'react';

export function usePaging() {
  const [page, setPage] = useState(1);
  
  const handlePageChange = page => {
    if(page > 0) setPage(page);
  };

  const handleBack = () => handlePageChange(page - 1);
  const handleNext = () => handlePageChange(page + 1);

  return { page, handleBack, handleNext };
}
