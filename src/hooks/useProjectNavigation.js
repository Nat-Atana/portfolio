import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function useProjectNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [projectToRestore, setProjectToRestore] = useState(null);
  const projectRefs = useRef(new Map());

  useEffect(() => {
    if (location.pathname.startsWith('/case-studies/')) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== '/' || !projectToRestore) {
      return;
    }

    let attempts = 0;
    const restoreProject = () => {
      const projectCard = projectRefs.current.get(projectToRestore);

      if (projectCard) {
        const projectHeading = projectCard.querySelector('h3') || projectCard;
        const headingRect = projectHeading.getBoundingClientRect();

        if (headingRect.top >= 96 && headingRect.top <= 170) {
          window.history.replaceState({}, '', `${window.location.pathname}#work`);
          setProjectToRestore(null);
          return;
        }

        projectCard.classList.add('revealed');
        window.scrollTo({
          top: Math.max(headingRect.top + window.scrollY - 130, 0),
          behavior: 'auto',
        });

        attempts += 1;
        if (attempts < 24) {
          window.setTimeout(restoreProject, 80);
          return;
        }

        window.history.replaceState({}, '', `${window.location.pathname}#work`);
        setProjectToRestore(null);
        return;
      }

      attempts += 1;
      if (attempts < 12) {
        requestAnimationFrame(restoreProject);
      }
    };

    requestAnimationFrame(restoreProject);
  }, [location.pathname, projectToRestore]);

  const setProjectRef = (path, node) => {
    if (node) {
      projectRefs.current.set(path, node);
    } else {
      projectRefs.current.delete(path);
    }
  };

  const returnToSelectedWork = (event, caseStudyPath) => {
    event.preventDefault();
    if (caseStudyPath) {
      setProjectToRestore(caseStudyPath);
    }
    navigate('/');
  };

  return {
    returnToSelectedWork,
    setProjectRef,
  };
}
