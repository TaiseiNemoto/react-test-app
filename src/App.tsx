import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

import { Home } from "./components/pages/Home"

function App() {
  return (
    <>
      <Global styles={css`
        ${emotionReset}

        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
      `} />
      <Home />
    </>
  );
}

export default App;
