import { useEffect } from 'react';

export function useRevealElements() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    let observer;

    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08 },
      );
      revealElements.forEach((element) => observer.observe(element));
    } else {
      revealElements.forEach((element) => element.classList.add('revealed'));
    }

    return () => observer?.disconnect();
  }, []);
}
