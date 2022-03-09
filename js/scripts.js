import {changePrimaryColor} from './components/change-colors.js';
import {changeTheme} from './components/toggle-theme.js';

addEventListener('DOMContentLoaded', (e) => {
  changeTheme();
  changePrimaryColor();
});
