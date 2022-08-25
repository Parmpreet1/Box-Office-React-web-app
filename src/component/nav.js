import React from 'react';
import { Link } from 'react-router-dom';
export const Nav = () => {
  const link = [
    { to: '/', goto: 'Home' },
    { to: '/starred', goto: 'Starred' },
  ];
  return (
    <div>
      <ul>
        {link.map(item => {
          return <li key={item.to}><Link to={item.to}>{item.goto}</Link></li>;
        })}
      </ul>
    </div>
  );
};
