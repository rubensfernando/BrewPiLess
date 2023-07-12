import React from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

import { useWs } from './utils';
import { WEB_SOCKET_ROOT } from './api/endpoints';
import { useGeneralDataContext } from './contexts/GeneralStatus';

export const LIGHT_SETTINGS_WEBSOCKET_URL = WEB_SOCKET_ROOT + '';

interface AppRoutingProps {}

const AppRouting: React.FC<AppRoutingProps> = ({}) => {
  const { connected, updateData, data } = useWs<any>(
    LIGHT_SETTINGS_WEBSOCKET_URL
  );

  const generalData = useGeneralDataContext();

  React.useEffect(() => {
    generalData.update(data);
  }, [data]);

  return (
    <Layout
      nameDevice={generalData.config?.nameDevice}
      wifiSignalStrength={generalData.config?.wifiSignalStrength}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
};

export default AppRouting;
