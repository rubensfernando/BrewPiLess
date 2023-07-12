import { useCallback, useEffect, useRef, useState } from 'react';
import Sockette from 'sockette';
import { debounce } from 'lodash';

export const useWs = <D>(wsUrl: string, wsThrottle: number = 100) => {
  const ws = useRef<Sockette>();
  const clientId = useRef<string>();

  const [connected, setConnected] = useState<boolean>(false);
  const [data, setData] = useState<D>();
  const [transmit, setTransmit] = useState<boolean>();
  const [clear, setClear] = useState<boolean>();

  const onMessage = useCallback((event: MessageEvent) => {
    const rawData = event.data;

    const handler = rawData.match(/^[A-Z]/g);

    if ((typeof rawData === 'string' || rawData instanceof String) && handler) {
      const rawData2 = /^([A-Z])/g.test(event.data)
        ? rawData.replace(/^[A-Z]/g, `"${handler}"`)
        : rawData;

      const message = JSON.parse(`{${rawData2}}` as string)[handler[0]] as any;

      let type = handler[0];

      if (type === 'A' && message.nn) {
        type = 'InitialData';
      } else if (type === 'A' && message.tu) {
        type = 'BeerStatus';
      }

      message.type = type;

      setData(message);
    }
  }, []);

  const doSaveData = useCallback((newData: D, clearData: boolean = false) => {
    if (!ws.current) {
      return;
    }
    if (clearData) {
      setData(undefined);
    }
    ws.current.json(newData);
  }, []);

  const saveData = useRef(debounce(doSaveData, wsThrottle));

  const updateData = (
    newData: React.SetStateAction<D | undefined>,
    transmitData: boolean = true,
    clearData: boolean = false
  ) => {
    setData(newData);
    setTransmit(transmitData);
    setClear(clearData);
  };

  useEffect(() => {
    if (!transmit) {
      return;
    }
    data && saveData.current(data, clear);
    setTransmit(false);
    setClear(false);
  }, [doSaveData, data, transmit, clear]);

  useEffect(() => {
    const instance = new Sockette(wsUrl, {
      onmessage: onMessage,
      onopen: () => {
        setConnected(true);
      },
      onreconnect: (e) => console.log('onreconnect', e),
      onclose: () => {
        console.log('onclose');
        clientId.current = undefined;
        setConnected(false);
        setData(undefined);
      },
    });
    ws.current = instance;
    return instance.close;
  }, [wsUrl, onMessage]);

  return { connected, data, updateData } as const;
};
