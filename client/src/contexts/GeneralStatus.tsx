import React, { createContext, useCallback, useContext } from 'react';
import { InitialData } from '../types';
import useMediaQuery from '@mui/material/useMediaQuery';

const GeneralStatusContextValue = {} as any;
export const GeneralStatusContext = createContext(GeneralStatusContextValue);

export const GeneralStatusProvider = ({ children }: any) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [config, setConfig] = React.useState<InitialData>({} as InitialData);

  const [wifiSignalStrength, setWifiSignalStrength] = React.useState<number>(0);

  const [mode, setMode] = React.useState<'dark' | 'light'>(
    prefersDarkMode ? 'dark' : 'light'
  );

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, [mode]);

  const update = useCallback((info: any) => {
    if (info?.type) {
      // console.log('update', info.type);
        case 'InitialData':
          setConfig({
            cap: info.cap,
            nameLog: info.log,
            nameDevice: info.nn || 'BrewPiLess',
            ptc: info.ptc,
            rh: info.rh,
            wifiSignalStrength: Math.abs(info.rssi),
            timestamp: new Date(info.tm),
            timezoneOffset: info.off,
            version: info.ver,
          });

          setWifiSignalStrength(Math.abs(info.rssi));
          break;

        default:
          console.log('update', info);
          break;
      }
    }
  }, []);

  return (
    <GeneralStatusContext.Provider
      value={{
        config,
        wifiSignalStrength,
        mode,
        update,
        toggleColorMode,
      }}
    >
      {children}
    </GeneralStatusContext.Provider>
  );
};

interface GeneralStatusContextProps {
  config: InitialData;
  mode: 'dark' | 'light';
  wifiSignalStrength: number;
  update: (info: any) => void;
  toggleColorMode: () => void;
}

export const useGeneralDataContext = () =>
  useContext<GeneralStatusContextProps>(GeneralStatusContext);

export default GeneralStatusProvider;
