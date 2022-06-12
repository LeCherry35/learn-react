import React from 'react';
import classes from './../Dialogs.module.css';




const Message = (props) => {
    if(props.messageData.user == 'me'){
        return (
    <div className={classes.message__my} >
        <div className={classes.avatar}></div>
        <div><div className={classes.text}>{props.messageData.message}</div></div>
    </div>
    )
    } else {
        let bg = "url('" + props.messageData.ava + "')"
        let style = {
            backgroundImage: bg,
            backgroundSize: '100% 100%'
        }
        return (
            <div className={classes.message__user} >
                <div className={classes.avatar} style={style}></div>
                <div><div className={classes.text}>{props.messageData.message}</div></div>
            </div>
            )
    }
    
}


export default Message;