import { css } from '@emotion/react';
import { memo } from 'react';

export const Home = memo(() => {
  return (
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
      `}
    >
      HOMEページです
    </div>
  );
});
