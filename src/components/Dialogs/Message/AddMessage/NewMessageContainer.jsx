import NewMessage from './NewMessage';
import { onNewMessageTextChangeAtionCreator, sendMessageActionCreator } from '../../../../redux/dialogs-reducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageTextChange: (text) => {
            dispatch(onNewMessageTextChangeAtionCreator(text));
        },
        sendMessage:() => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)

export default NewMessageContainer;
