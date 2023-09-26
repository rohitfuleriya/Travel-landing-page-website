// useScrollBehavior.js
import { useState, useEffect } from 'react';

function useScrollBehavior() {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const singleContentNav = document.getElementById('single-content-nav');
      const navbar = document.querySelector('.navbar');

      if (singleContentNav && navbar) {
        const singleContentNavRect = singleContentNav.getBoundingClientRect();

        if (singleContentNavRect.top <= 0) {
          setIsNavFixed(true);
          setIsNavbarHidden(true);
        } else {
          setIsNavFixed(false);
          setIsNavbarHidden(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isNavFixed, isNavbarHidden };
}

export default useScrollBehavior;
