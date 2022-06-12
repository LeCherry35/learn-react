import React from 'react';
import classes from './../../Dialogs.module.css';

const AddMessage = (props) => {
    // console.log(props)

    let newMessage = React.createRef();

    const onNewMessageTextChange = () => {
        let text = newMessage.current.value;
        props.updateNewMessage(text);
    }

    return (
        <div className={classes.addMessage}>
            <textarea ref={ newMessage } value={props.newMessage} onChange={ onNewMessageTextChange }/>
            <div>
                <button onClick={props.sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default AddMessage;
