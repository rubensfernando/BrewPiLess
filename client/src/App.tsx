import React from 'react';
import CustomTheme from './CustomTheme';
import AppRouting from './AppRouting';
import BrewPiLessContext from './contexts';

function App() {
  return (
    <BrewPiLessContext>
      <AppRouting />
    </BrewPiLessContext>
  );
}

export default App;
