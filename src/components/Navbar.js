import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/image/logo.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/myprofile',
      text: 'MyProfile',
    },
  ];
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
