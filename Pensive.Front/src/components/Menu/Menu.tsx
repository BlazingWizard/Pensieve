import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.css';

type MenuProps = {
  children: React.ReactElement;
};

function Menu(props: MenuProps): React.ReactElement {
  const { children } = props;
  return (
    <div className="menu">
      <div className="menu__nav">
        <NavLink to="Review">Reviews</NavLink>
        <NavLink to="FamilyTree">FamilyTree</NavLink>
      </div>
      <div className="menu__content"> {children}</div>
    </div>
  );
}

export default Menu;
