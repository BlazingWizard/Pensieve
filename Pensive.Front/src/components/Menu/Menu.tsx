import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Menu.css';
import logo from './logo.svg';

type MenuProps = {
  children: React.ReactElement;
};

function Menu(props: MenuProps): React.ReactElement {
  const { children } = props;
  return (
    <div className="menu">
      <div className="menu__nav">
        <Link className="menu__logo-block" to="/">
          <img className="menu__logo" src={logo} alt="logo" />
          <h1 className="menu__header header">Pensive</h1>
        </Link>

        <NavLink className="menu__item" to="Review">
          Reviews
        </NavLink>
        <NavLink className="menu__item" to="FamilyTree">
          Family Tree
        </NavLink>
      </div>
      <div className="menu__content"> {children}</div>
    </div>
  );
}

export default Menu;
