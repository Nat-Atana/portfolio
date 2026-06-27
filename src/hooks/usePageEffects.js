import { useEffect, useState } from 'react';

export function usePageEffects(currentCaseStudy) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    if (currentCaseStudy) {
      document.title = `${currentCaseStudy.title} Case Study | Nat Atana`;
      document.querySelector('meta[name="description"]')?.setAttribute('content', currentCaseStudy.summary);
      return;
    }

    document.title = 'Nat Atana | Senior AI Full-Stack Engineer';
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        'content',
        'Senior AI Full-Stack Engineer portfolio for Nat Atana: AI, cloud, web, mobile, architecture, and technical leadership.',
      );
  }, [currentCaseStudy]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 650);
      const doc = document.documentElement;
      const progress = doc.scrollHeight > doc.clientHeight ? window.scrollY / (doc.scrollHeight - doc.clientHeight) : 0;
      doc.style.setProperty('--scroll-progress', `${Math.min(progress, 1) * 100}%`);
    };

    const handlePointer = (event) => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('pointermove', handlePointer, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pointermove', handlePointer);
    };
  }, [currentCaseStudy]);

  return { showBackToTop };
}
