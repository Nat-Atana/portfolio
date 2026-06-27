export function getStoredTheme() {
  try {
    return window.localStorage.getItem('portfolio-theme') || 'dark';
  } catch {
    return 'dark';
  }
}

export function persistTheme(theme) {
  document.documentElement.dataset.theme = theme;

  try {
    window.localStorage.setItem('portfolio-theme', theme);
  } catch {
    // Some mobile privacy modes disable storage; the theme still works in-session.
  }
}
