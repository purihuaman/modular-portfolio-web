const rootStyle = document.documentElement.style;
const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const lightTheme = {
  '--first-bg': 'var(--grey-100)',
  '--second-bg': 'var(--grey-200)',
  '--third-bg': 'var(--grey-300)',
  '--title-color': 'var(--grey-600)',
  '--text-color': 'var(--grey-500)',
  '--border-color': 'var(--grey-300)',
  '--link-color': 'var(--primary-500)',
};

const darkTheme = {
  '--first-bg': 'var(--grey-900)',
  '--second-bg': 'var(--grey-800)',
  '--third-bg': 'var(--grey-700)',
  '--title-color': 'var(--grey-300)',
  '--text-color': 'var(--grey-300)',
  '--border-color': 'var(--grey-600)',
  '--link-color': 'var(--primary-500)',
};

export const changes = (theme) => {
  const cssVars = Object.keys(theme);
  for (const cssVar of cssVars) {
    rootStyle.setProperty(cssVar, theme[cssVar]);
  }
};

export const changeTheme = () => {
  toggleTheme.addEventListener('click', (e) => {
    if (toggleIcon.src.includes('sun.svg')) {
      toggleIcon.src = 'assets/icons/moon.svg';
      toggleText.textContent = 'Dark mode';
      changes(darkTheme);
    } else {
      toggleIcon.src = 'assets/icons/sun.svg';
      toggleText.textContent = 'Light mode';
      changes(lightTheme);
    }
  });
};
