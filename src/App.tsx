import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import { Header } from './components/organisms/Header';

function App() {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}

          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
