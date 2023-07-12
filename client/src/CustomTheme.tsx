import { FC, useMemo } from 'react';

import { CssBaseline } from '@mui/material';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import {
  teal,
  deepOrange,
  lightBlue,
  orange,
  red,
  green,
} from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

import { RequiredChildrenProps } from './utils';
import { useGeneralDataContext } from './contexts/GeneralStatus';

const getColorTokens = (mode: PaletteMode) => {
  const palette = {
    mode,
    ...(mode === 'light'
      ? {
          primary: teal,
          secondary: lightBlue,
          info: {
            main: teal[500],
          },
          warning: {
            main: orange[500],
          },
          error: {
            main: red[500],
          },
          success: {
            main: green[500],
          },
        }
      : {
          primary: teal,
          secondary: lightBlue,
          info: {
            main: teal[500],
          },
          warning: {
            main: orange[500],
          },
          error: {
            main: red[500],
          },
          success: {
            main: green[500],
          },
        }),
  };

  return palette;
};

const CustomTheme: FC<RequiredChildrenProps> = ({ children }) => {
  const { mode } = useGeneralDataContext();

  const theme = useMemo(
    () =>
      responsiveFontSizes(
        createTheme({
          typography: {
            fontFamily: ['Lekton', 'monospace'].join(','),
          },
          palette: getColorTokens(mode),
        })
      ),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomTheme;
