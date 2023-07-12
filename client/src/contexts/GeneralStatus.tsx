import React, { createContext, useCallback, useContext } from 'react';
import { InitialData } from '../types';


const GeneralStatusContextValue = {} as any
export const GeneralStatusContext = createContext(GeneralStatusContextValue);

export const GeneralStatusProvider = ({ children }: any) => {

  const [config, setConfig] = React.useState<InitialData>();

  const update = useCallback(
    (update: any) => {
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
            console.log('update', update)
            break;
        }
      }
    },
    [],
  )
  

  return (
    <GeneralStatusContext.Provider
      value={{ config, update }}
    >
      {children}
    </GeneralStatusContext.Provider>
  );
}

export const useGeneralDataContext = () => useContext(GeneralStatusContext);

export default GeneralStatusProvider;