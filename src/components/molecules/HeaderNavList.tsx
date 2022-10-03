import { memo } from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNavList = memo(() => {
  const activeStyle = {
    color: 'red',
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='clock' style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Clock
          </NavLink>
        </li>
        <li>
          <NavLink to='calendar' style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            Calendar
          </NavLink>
        </li>
      </ul>
    </nav>
  );
});
