import { useEffect, useState } from 'react';

export function useIndex({ length }: { length: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % length);
    }, 2000);

    return () => {
      clearInterval(imageInterval);
    };
  }, [length]);

  return { index };
}
