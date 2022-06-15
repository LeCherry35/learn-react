import React from 'react';
import classes from './../../Dialogs.module.css';

const NewMessage = (props) => {
    // console.log('NMT', props.newMessageText)

    const sendMessage = () => {
        props.sendMessage();
    }

    const onNewMessageTextChange = (e) => {
        let text = e.target.value;
        props.onNewMessageTextChange(text);
    }

    return (
        <div className={classes.addMessage}>
            <textarea placeholder='Enter' value={props.newMessageText} onChange={ onNewMessageTextChange }/>
            <div>
                <button onClick={ sendMessage }>Send</button>
            </div>
        </div>
    )
}

export default NewMessage;
