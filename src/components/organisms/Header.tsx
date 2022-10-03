import { memo } from 'react';
import { HeaderNavList } from '../molecules/HeaderNavList';

export const Header = memo(() => {
  return (
    <div>
      <HeaderNavList></HeaderNavList>
    </div>
  );
});
