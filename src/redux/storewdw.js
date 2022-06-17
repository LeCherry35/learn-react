import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

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
        
    },

    getState() {

        return this._state;
    },

    subscribe(observer){
        this._callSubscriber = observer;
    }, 

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.navData = navbarReducer(this._state.navData);
        this._callSubscriber();
    },
};

export default store;

window.state = store;