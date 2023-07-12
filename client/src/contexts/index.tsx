import React from 'react';
import GeneralStatusProvider from './GeneralStatus';
import CustomTheme from '../CustomTheme';

const BrewPiLessContext: React.FC<any> = ({ children }) => {
  return (
    <GeneralStatusProvider>
      <CustomTheme>{children}</CustomTheme>
    </GeneralStatusProvider>
  );
};

export default BrewPiLessContext;
