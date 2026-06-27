import { useEffect, useRef, useState } from 'react';

export function usePageEffects(currentCaseStudy) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const showBackToTopRef = useRef(false);

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
    let scrollFrame = 0;
    let pointerFrame = 0;
    let pointerEvent;

    const updateScroll = () => {
      scrollFrame = 0;
      const nextShowBackToTop = window.scrollY > 650;
      if (showBackToTopRef.current !== nextShowBackToTop) {
        showBackToTopRef.current = nextShowBackToTop;
        setShowBackToTop(nextShowBackToTop);
      }
      const doc = document.documentElement;
      const progress = doc.scrollHeight > doc.clientHeight ? window.scrollY / (doc.scrollHeight - doc.clientHeight) : 0;
      doc.style.setProperty('--scroll-progress', `${Math.min(progress, 1) * 100}%`);
    };

    const handleScroll = () => {
      if (!scrollFrame) {
        scrollFrame = window.requestAnimationFrame(updateScroll);
      }
    };

    const updatePointer = () => {
      pointerFrame = 0;
      document.documentElement.style.setProperty('--pointer-x', `${pointerEvent.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${pointerEvent.clientY}px`);
    };

    const handlePointer = (event) => {
      pointerEvent = event;
      if (!pointerFrame) {
        pointerFrame = window.requestAnimationFrame(updatePointer);
      }
    };

    updateScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

    if (hasFinePointer) {
      window.addEventListener('pointermove', handlePointer, { passive: true });
    }

    return () => {
      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame);
      }
      if (pointerFrame) {
        window.cancelAnimationFrame(pointerFrame);
      }
      window.removeEventListener('scroll', handleScroll);
      if (hasFinePointer) {
        window.removeEventListener('pointermove', handlePointer);
      }
    };
  }, [currentCaseStudy]);

  return { showBackToTop };
}
