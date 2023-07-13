import React, { createContext, useCallback, useContext } from 'react';
import { BeerStatus, InitialData } from '../types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ModeStatus, StateText } from '../constants';

const GeneralStatusContextValue = {} as any;
export const GeneralStatusContext = createContext(GeneralStatusContextValue);

export const GeneralStatusProvider = ({ children }: any) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [config, setConfig] = React.useState<InitialData>({} as InitialData);

  const [wifiSignalStrength, setWifiSignalStrength] = React.useState<number>(0);

  const [batch, setBatch] = React.useState<any>({} as any);

  const [beerStatus, setBeerStatus] = React.useState<BeerStatus>(
    {} as BeerStatus
  );

  const [mode, setMode] = React.useState<'dark' | 'light'>(
    prefersDarkMode ? 'dark' : 'light'
  );

  const toggleColorMode = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, [mode]);

  const update = useCallback((info: any) => {
    if (info?.type) {
      switch (info.type) {
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

          setBatch({
            nameLog: info.log,
          });

          setWifiSignalStrength(Math.abs(info.rssi));
          break;

        case 'BeerStatus':
          const parseStateSince = (line: string) => {
            var match;
            if ((match = /(\d+h\d\dm\d\d)/.exec(line))) {
              return match[1];
            } else if ((match = /(\d+m\d\d)/.exec(line))) {
              return match[1];
            }
            return '';
          };

          const fixTemperature = (temp: number): number => {
            // if (temp < -10000) return '--.-';
            return +(temp / 100).toFixed(1);
          };

          const fixGravity = (gravity: number): number => {
            // if (temp < -10000) return '--.-';
            return +(gravity / 1000).toFixed(3);
          };

          setWifiSignalStrength(Math.abs(info.rssi));

          const status: BeerStatus = {
            mode: ModeStatus[info.md],
            wifiSignalStrength: info.rssi,
            temperateUnit: info.tu,
            temperatures: {
              beerTemp: fixTemperature(info.bt),
              beerSet: fixTemperature(info.bs),
              fridgeTemp: fixTemperature(info.ft),
              fridgeSet: fixTemperature(info.fs),
              roomTemp: fixTemperature(info.rt),
            },
            statusLine: info.sl,
            controlState: StateText[info.st],
            controlStateSince: parseStateSince(info.sl),
          };

          if (info.G) {
            status.gravity = {
              lastUpdate: new Date(info.G.u),
              temperature: info.G.t > -10000 ? fixTemperature(info.G.t) : null,
              wifiSignalStrength: info.G.r,
              gravity: fixGravity(info.G.g),
            };
          }

          if ('pm' in info && 'psi' in info) {
            status.pressure = {
              pm: info.pm,
              psi: info.psi,
            };
          }

          setBeerStatus(status);
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
        beerStatus,
        batch,
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
  beerStatus: BeerStatus;
  batch: any;
  update: (info: any) => void;
  toggleColorMode: () => void;
}

export const useGeneralDataContext = () =>
  useContext<GeneralStatusContextProps>(GeneralStatusContext);

export default GeneralStatusProvider;
