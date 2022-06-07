import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
      <nav className={classes.nav}>
        <div className={classes.nav__item}><NavLink className={ navData => navData.isActive ? classes.active : undefined} to="/profile" >Profile</NavLink></div>
        <div className={classes.nav__item}><NavLink className={ navData => navData.isActive ? classes.active : undefined} to="/dialogs"><div>Messages</div></NavLink></div>
        <div className={classes.nav__item}><NavLink className={ navData => navData.isActive ? classes.active : undefined} to="/news">News</NavLink></div>
        <div className={classes.nav__item}><NavLink className={ navData => navData.isActive ? classes.active : undefined} to="/settings">Settings</NavLink></div>
       
      </nav>
    )
};

export default Nav;