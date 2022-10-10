import { css } from '@emotion/react';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNavList = memo(() => {
  const activeStyle = {
    borderBottom: '2px solid #333',
  };

  return (
    <nav>
      <ul css={styles.ul}>
        <li>
          <NavLink to='clock' css={styles.navLink} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Clock
          </NavLink>
        </li>
        <li>
          <NavLink to='calendar' css={styles.navLink} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Calendar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
});

const styles = {
  ul: css`
    display: flex;
  `,

  navLink: css`
    color: #333;
    font-weight: bold;
    letter-spacing: 0.6px;
    text-decoration: none;
    padding: 10px 20px;
    font-size: 20px;
  `,

  activeLink: css`
    border-bottom: 2px solid #333;
  `,
};
