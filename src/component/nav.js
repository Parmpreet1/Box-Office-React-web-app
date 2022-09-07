import React from 'react';
import { useLocation } from 'react-router-dom';

import { LinkStyled, NavList } from '../MainAppStyle';
export const Nav = () => {
  const link = [
    { to: '/', goto: 'Home' },
    { to: '/starred', goto: 'Starred' },
  ];
  const location=useLocation().pathname;

  return (
    <div>
      <NavList>
        {link.map(item => {
          return (
            <li key={item.to}>
              <LinkStyled className={location===item.to? `active`:``} to={item.to}>{item.goto}</LinkStyled>
            </li>
          );
        })}
      </NavList>
    </div>
  );
};
