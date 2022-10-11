import { memo } from 'react';
import { AnalogueClock } from '../Atoms/AnalogueClock';

export const Clock = memo(() => {
  return (
    <>
      <AnalogueClock />
    </>
  );
});
