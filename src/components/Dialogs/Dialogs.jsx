import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import NewMessageContainer from './Message/AddMessage/NewMessageContainer';

const Dialogs = (props) => {
    // console.log('Dialogs', props)
    // console.log('DialogsData', props.dialogsPage.dialogsData)
    
    let dialogsElements = props.dialogsPage.dialogsData.map((dialog,id) => {
        return  (<Dialog name={dialog.name} key={id}/>)
    });

    let messagesElements = props.dialogsPage.messagesData.map((messageData,id) => {
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
                <NewMessageContainer />
            </div>
            
            
        </div>
    )
}

export default Dialogs;