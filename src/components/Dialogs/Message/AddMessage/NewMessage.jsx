import React from 'react';
import classes from './../../Dialogs.module.css';
import { onNewMessageTextChangeAtionCreator, sendMessageActionCreator } from '../../../../redux/state';

const AddMessage = (props) => {
    // console.log(props)

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    const onNewMessageTextChange = (e) => {
        let text = e.target.value;
        props.dispatch(onNewMessageTextChangeAtionCreator(text));
    }

    return (
        <div className={classes.addMessage}>
            <textarea placeholder='Enter' value={props.newMessage} onChange={ onNewMessageTextChange }/>
            <div>
                <button onClick={ sendMessage }>Send</button>
            </div>
        </div>
    )
}

export default AddMessage;
