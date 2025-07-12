'use client'

import { useEffect, useState } from 'react';

export default function useSmallScreen(ratio = '3/3') {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-aspect-ratio: ${ratio})`);
    const handleChange = (e) => setIsSmallScreen(e.matches);

    mediaQuery.addEventListener('change', handleChange);
    setIsSmallScreen(mediaQuery.matches);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [ratio]);

  return isSmallScreen;
}
