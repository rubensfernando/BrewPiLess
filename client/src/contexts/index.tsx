import React from 'react';
import GeneralStatusProvider from './GeneralStatus';


const BrewPiLessContext: React.FC<any> = ({ children }) => {
  

  return (
    <GeneralStatusProvider>
      {children}
    </GeneralStatusProvider>
  );
};

export default BrewPiLessContext;
