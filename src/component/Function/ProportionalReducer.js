'use client'

import { useState, useEffect } from 'react';

const useProportionalReducer = (originalValue = 1092, totalValue = 4674) => {
  const initialHeight = typeof window !== 'undefined' ? window.innerHeight : originalValue;
  const [newValue, setNewValue] = useState(initialHeight);

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setNewValue(window.innerHeight), 100);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const reductionFactor = newValue / originalValue;
  const newTotal = totalValue * reductionFactor;

  return newTotal;
};

export default useProportionalReducer;
