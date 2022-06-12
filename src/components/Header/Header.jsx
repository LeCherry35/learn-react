import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
    <header className={classes.header}>
        <div><a href='./'><img  className={classes.logo} src="/img/cat-01.png" alt="cat" /></a></div>
        <div><span>Best Social Network On Da Web</span></div>
        
    </header>
    )
};

export default Header;