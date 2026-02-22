import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState({
    scrollY: 0,
    scrollProgress: 0,
    viewportHeight: 0,
    documentHeight: 0
  });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      const scrollProgress = scrollY / (documentHeight - windowHeight);

      setProgress({
        scrollY,
        scrollProgress,
        viewportHeight: windowHeight,
        documentHeight
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
