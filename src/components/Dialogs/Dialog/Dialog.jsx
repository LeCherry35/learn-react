import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    const getClassNames = navData => {
        const className = [classes.dialog__name];
        if (navData.isActive) {
          className.push(classes.dialog__name_active);
        }
        return className.join(' ');
    }
    const path = '/dialogs/' + props.name;
    return (
        
            <NavLink className={ getClassNames} to={path}>
                <div>{props.name}</div>
            </NavLink>
        
    )
}

export default Dialog;