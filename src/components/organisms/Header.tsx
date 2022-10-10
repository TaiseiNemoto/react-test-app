import { css } from '@emotion/react';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderNavList } from '../molecules/HeaderNavList';

export const Header = memo(() => {
  return (
    <header css={styles.header}>
      <h1 css={styles.h1}>
        <NavLink to='/'>ReactTestApp</NavLink>
      </h1>
      <HeaderNavList></HeaderNavList>
    </header>
  );
});

const styles = {
  header: css`
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
  `,
  h1: css`
    font-size: 30px;
    text-decoration: none;

    a {
      color: #333;
      text-decoration: none;
      font-weight: bold;
      letter-spacing: 1px;
    }
  `,
};
