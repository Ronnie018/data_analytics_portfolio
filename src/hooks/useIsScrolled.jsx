import { useState, useEffect } from 'react';

export default function useIsScrolled() {
  const [isScrolled, setIsScrolled] = useState(() => {
    if (!window || window.scrollY === 0) {
      return false;
    }
    return true;
  });

  useEffect(() => {
    if (!window) return;

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrolled;
}
