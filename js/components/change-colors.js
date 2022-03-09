import {changes} from './toggle-theme.js';

const toggleColors = document.getElementById('colors');
const rootStyle = document.documentElement.style;

const blueColors = {
  '--primary-100': 'var(--blue-100)',
  '--primary-200': 'var(--blue-200)',
  '--primary-300': 'var(--blue-300)',
  '--primary-400': 'var(--blue-400)',
  '--primary-500': 'var(--blue-500)',
  '--primary-600': 'var(--blue-600)',
  '--primary-700': 'var(--blue-700)',
  '--primary-800': 'var(--blue-800)',
  '--primary-900': 'var(--blue-900)',
};

const purpleColors = {
  '--primary-100': 'var(--purple-100)',
  '--primary-200': 'var(--purple-200)',
  '--primary-300': 'var(--purple-300)',
  '--primary-400': 'var(--purple-400)',
  '--primary-500': 'var(--purple-500)',
  '--primary-600': 'var(--purple-600)',
  '--primary-700': 'var(--purple-700)',
  '--primary-800': 'var(--purple-800)',
  '--primary-900': 'var(--purple-900)',
};

const redColors = {
  '--primary-100': 'var(--red-100)',
  '--primary-200': 'var(--red-200)',
  '--primary-300': 'var(--red-300)',
  '--primary-400': 'var(--red-400)',
  '--primary-500': 'var(--red-500)',
  '--primary-600': 'var(--red-600)',
  '--primary-700': 'var(--red-700)',
  '--primary-800': 'var(--red-800)',
  '--primary-900': 'var(--red-900)',
};

export const changePrimaryColor = () => {
  toggleColors.addEventListener('click', (e) => {
    rootStyle.setProperty('--primary-500', `${e.target.dataset.color}`);
    changePrimary(e.target.dataset.color);
  });
};

const changePrimary = (getColor) => {
  switch (getColor) {
    case 'var(--blue-500)':
      changes(blueColors);
      break;
    case 'var(--purple-500)':
      changes(purpleColors);
      break;
    case 'var(--red-500)':
      changes(redColors);
      break;
  }
};
