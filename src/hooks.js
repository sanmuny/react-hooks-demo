import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowSize = () => { setWidth(window.innerWidth); };
    window.addEventListener('resize', handleWindowSize);
    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  });
  return width;
};
