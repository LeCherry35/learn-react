const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const initialState = {
    dialogsData: [
        {name: 'Nom'},
        {name: 'Alisa'},
        {name: 'BOsrd'},
        {name: 'Boris'},
        {name: 'Loh'},
    ],
    messagesData: [
        {user: 'Nom', message: 'Hi', ava: './img/photo_2022-02-19_20-13-34.jpg'},
        {user: 'me', message: 'Yosip,asfjnflaflkenfejfnaelsfnaslkjf fa;nefj nsljanf kjldfn akjdsf nakjlen falkjefn kaejsnlkjsn kejnfkjakjdnf ajdsfn aj;nglfj;alng ladf;kgn;alk kngl;a'},
        {user: 'Nom', message: 'Wassup', ava: './img/photo_2022-02-19_20-13-34.jpg'},
        {user: 'me', message: 'So'},
        {user: 'Nom', message: 'Go', ava: './img/photo_2022-02-19_20-13-34.jpg'},
    ],
    newMessageText: '',
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type)  {
        case SEND_MESSAGE: {
            const newMessage = {
                user: 'me',
                message: state.newMessageText,
            };
            let stateCopy = {...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            };
            
            return stateCopy;
        }
            
        case UPDATE_NEW_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.newMessageText = action.newMessage;
            return stateCopy;
        }
            
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const onNewMessageTextChangeAtionCreator = text => ({
    type: UPDATE_NEW_MESSAGE, newMessage: text
});

export default dialogsReducer;