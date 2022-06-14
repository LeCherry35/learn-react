const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const store = {

    _state: {
        profilePage: {
            postsData: [
                {id: 1, user: 'Tolik', likesCount: '23', text: 'Omine'},
                {id: 2, user: 'Loh', likesCount: '2', text: 'Lorem ipsum dolor'},
                {id: 3, user: 'Me', likesCount: '110', text: 'First here!'},
            ],
            newPostText: 'job',
        },
        dialogsPage: {
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
            newMessage: '',
        },
        navData: {
            friends: [
                {name: 'Alisa', ava: './img/IMG_3522.PNG'},
                {name: 'Boris', ava: './img/photo_2022-02-19_09-42-47.jpg'},
                {name: 'Nom', ava: './img/photo_2022-02-19_20-13-34.jpg'},
            ]
        }
            
    },

    _callSubscriber() {
        console.log('state changed');
    },

    getState() {

        return this._state;
    },

    subscribe(observer){
        this._callSubscriber = observer;
    }, 

    dispatch(action) {

        if(action.type === ADD_POST) {
            let newPost = {
                id: 1,
                text: this._state.profilePage.newPostText,
                likesCount: 0
            };
            
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = ''; 
            this._callSubscriber();
        } else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        } else if(action.type === 'SEND-MESSAGE') {
            const newMessage = {
                user: 'me',
                message: this._state.dialogsPage.newMessage,
            };
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessage = 'Yo!';
            this._callSubscriber();
        } else if(action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessage = action.newMessage;
            this._callSubscriber();
        }
    },
};

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, 
    newText: text
})
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const onNewMessageTextChangeAtionCreator = text => ({
    type: UPDATE_NEW_MESSAGE, newMessage: text
})




export default store;

window.state = store;