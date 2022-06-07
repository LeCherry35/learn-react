
import React from 'react';
import classes from './Dialogs.module.css';
const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog__names}>
                <div className={classes.name}>TOm</div>
                <div className={classes.name}>Mentor</div>
                <div className={classes.name}>Student</div>
                <div className={classes.name}>Alisa</div>
                <div className={classes.name}>Kot</div>
                
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Yo</div>
                <div className={classes.message}>Cmon</div>
                <div className={classes.message}>Wassup</div>
                <div className={classes.message}>Yep</div>
                <div className={classes.message}>Cmon</div>
            </div>
            
        </div>
    )
}

export default Dialogs;