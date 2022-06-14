import React from 'react';
import classes from './Dialogs.module.css';

import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import NewMessage from './Message/AddMessage/NewMessage';

const Dialogs = (props) => {
    // console.log(props)
    
    let dialogsElements = props.dialogsData.dialogsData.map((dialog,id) => {
        return  (<Dialog name={dialog.name} key={id}/>)
    });

    let messagesElements = props.dialogsData.messagesData.map((messageData,id) => {
        return (<Message messageData={messageData} key={id}/>)
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog__names}>
            {dialogsElements}              
            </div>
            <div>
                <div className={classes.dialog__messages}>
                    <div>
                        {messagesElements}
                    </div>
                                  
                </div>
                <NewMessage newMessage={props.dialogsData.newMessage}
                    dispatch={props.dispatch}/>
            </div>
            
            
        </div>
    )
}

export default Dialogs;