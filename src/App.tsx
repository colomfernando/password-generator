import React from 'react';
import GlobalStyles from 'theme/GlobalStyles';
import Header from 'components/Header';
import Body from 'components/Body';
import ContextProvider from 'context';

const App: React.FC = () => {
  return (
    <ContextProvider>
      <GlobalStyles />
      <Header />
      <Body />
    </ContextProvider>
  );
};

export default App;
