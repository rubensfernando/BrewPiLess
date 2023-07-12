import React from 'react';
import CustomTheme from './CustomTheme';
import AppRouting from './AppRouting';
import BrewPiLessContext from './contexts';

function App() {
  return (
    <CustomTheme>
      <BrewPiLessContext>
        <AppRouting />
      </BrewPiLessContext>
    </CustomTheme>
  );
}

export default App;
