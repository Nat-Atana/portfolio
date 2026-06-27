import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PageShell } from './components/Layout';
import PortfolioHome from './components/PortfolioHome';
import { caseStudies } from './data/portfolioData';
import { usePageEffects } from './hooks/usePageEffects';
import { useProjectNavigation } from './hooks/useProjectNavigation';
import { getStoredTheme, persistTheme } from './lib/theme';
import { normalizeRoutePath } from './lib/routing';

const CaseStudyPage = lazy(() => import('./components/CaseStudyPage'));

function App() {
  const [theme, setTheme] = useState(getStoredTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const location = useLocation();
  const projectNavigation = useProjectNavigation();

  const currentCaseStudy = useMemo(
    () => caseStudies.find((caseStudy) => caseStudy.path === normalizeRoutePath(location.pathname)),
    [location.pathname],
  );

  const { showBackToTop } = usePageEffects(currentCaseStudy);

  useEffect(() => {
    persistTheme(theme);
  }, [theme]);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((isOpen) => !isOpen);
  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));

  return (
    <PageShell
      menuOpen={menuOpen}
      onCloseMenu={closeMenu}
      onToggleMenu={toggleMenu}
      onToggleTheme={toggleTheme}
      showBackToTop={showBackToTop}
      theme={theme}
    >
      <Suspense fallback={null}>
        <Routes>
          <Route
            path="/"
            element={
              <PortfolioHome
                activeExperience={activeExperience}
                onExperienceChange={setActiveExperience}
                setProjectRef={projectNavigation.setProjectRef}
              />
            }
          />
          <Route
            path="/case-studies/:slug"
            element={
              currentCaseStudy ? (
                <CaseStudyPage caseStudy={currentCaseStudy} onBack={projectNavigation.returnToSelectedWork} />
              ) : (
                <PortfolioHome
                  activeExperience={activeExperience}
                  onExperienceChange={setActiveExperience}
                  setProjectRef={projectNavigation.setProjectRef}
                />
              )
            }
          />
          <Route
            path="*"
            element={
              <PortfolioHome
                activeExperience={activeExperience}
                onExperienceChange={setActiveExperience}
                setProjectRef={projectNavigation.setProjectRef}
              />
            }
          />
        </Routes>
      </Suspense>
    </PageShell>
  );
}

export default App;
