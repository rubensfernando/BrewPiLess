import React, { createContext, useCallback, useContext } from 'react';
import { InitialData } from '../types';
import useMediaQuery from '@mui/material/useMediaQuery';

const GeneralStatusContextValue = {} as any;
export const GeneralStatusContext = createContext(GeneralStatusContextValue);

export const GeneralStatusProvider = ({ children }: any) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [config, setConfig] = React.useState<InitialData>();
  const [mode, setMode] = React.useState<'dark' | 'light'>(
    prefersDarkMode ? 'dark' : 'light'
  );

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, [mode]);

  const update = useCallback((update: any) => {
    if (update?.type) {
      switch (update.type) {
        case 'InitialData':
          setConfig({
            cap: update.cap,
            nameLog: update.log,
            nameDevice: update.nn || 'BrewPiLess',
            ptc: update.ptc,
            rh: update.rh,
            wifiSignalStrength: update.rssi,
            timestamp: new Date(update.tm),
            timezoneOffset: update.off,
            version: update.ver,
          });
          break;

        default:
          console.log('update', update);
          break;
      }
    }
  }, []);

  return (
    <GeneralStatusContext.Provider
      value={{ config, mode, update, toggleColorMode }}
    >
      {children}
    </GeneralStatusContext.Provider>
  );
};

export const useGeneralDataContext = () => useContext(GeneralStatusContext);

export default GeneralStatusProvider;
