import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    gray: {
      900: '#212121',
      800: '#424242',
      700: '#616161',
      600: '#757575',
      500: '#9e9e9e',
      400: '#bdbdbd',
      300: '#e0e0e0',
      200: '#eeeeee',
      100: '#f5f5f5',
    },
    white: '#fff',
  },
});
