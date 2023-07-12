import { FC } from 'react';

import { CssBaseline } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { teal, lightBlue, orange, red, green } from '@mui/material/colors';

import { RequiredChildrenProps } from './utils';

export const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: [
        'Lekton',
        'monospace',
      ].join(','),
    },
    palette: {
      background: {
        default: "#fafafa"
      },
      primary: teal,
      secondary: lightBlue,
      info: {
        main: teal[500]
      },
      warning: {
        main: orange[500]
      },
      error: {
        main: red[500]
      },
      success: {
        main: green[500]
      }
    }
  })
);

const CustomTheme: FC<RequiredChildrenProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default CustomTheme;
