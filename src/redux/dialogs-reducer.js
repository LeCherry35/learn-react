const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type)  {
        case SEND_MESSAGE: 
            const newMessage = {
                user: 'me',
                message: state.newMessage,
            };
            state.messagesData.push(newMessage);
            state.newMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const onNewMessageTextChangeAtionCreator = text => ({
    type: UPDATE_NEW_MESSAGE, newMessage: text
});

export default dialogsReducer;