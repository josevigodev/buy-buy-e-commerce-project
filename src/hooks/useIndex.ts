import { useEffect, useState } from 'react';

export function useIndex({
  length,
  delay = 2000,
}: {
  length: number;
  delay?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % length);
    }, delay);

    return () => {
      clearInterval(imageInterval);
    };
  }, [length, delay]);

  return { index };
}
