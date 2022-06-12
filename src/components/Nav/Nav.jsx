import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import FriendsBar from './FriendsBar/FriendsBar'

const Nav = (props) => {

  const getClassNames = navData => {
    const className = [classes.nav__item];
    if (navData.isActive) {
      className.push(classes.nav__item__active);
    }
    return className.join(' ');
}
        return (
      <nav className={classes.nav}>
        <NavLink className={ getClassNames } to="/profile" ><div>Profile</div></NavLink>   
        <NavLink className={ getClassNames } to="/dialogs"><div>Messages</div></NavLink>
        <NavLink className={ getClassNames } to="/news"><div>News</div></NavLink>
        <NavLink className={ getClassNames } to="/settings"><div>Settings</div></NavLink>
        <NavLink className={ getClassNames } to="/friends">
          Friends
          <FriendsBar friends={props.navData.friends} />
        </NavLink>     
      </nav>
    )
};

export default Nav;