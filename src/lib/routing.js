export function getAppBase() {
  return window.location.pathname.startsWith('/info/portfolio') ? '/info/portfolio' : '';
}

export function getPageHref(path = '/') {
  const appBase = getAppBase();
  return path === '/' ? `${appBase || ''}/` : `${appBase}${path}/`;
}

export function getSectionHref(section) {
  const appBase = getAppBase();
  return `${appBase || '/'}#${section}`;
}

export function normalizeRoutePath(pathname) {
  const normalizedPath = pathname.replace(/\/+$/, '');
  return normalizedPath || '/';
}
