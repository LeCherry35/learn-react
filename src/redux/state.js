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
            newMessage: 'Yo!',
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
    addPost(){

        let newPost = {
            id: 1,
            text: this._state.profilePage.newPostText,
            likesCount: 0
        };
        
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = ''; 
        this._callSubscriber();
    },
    
    updateNewPostText(newText){
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },

    sendMessage(){
        const newMessage = {
            user: 'me',
            message: this.state.dialogsPage.newMessage,
        };
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessage = 'Yo!';
        this._callSubscriber();
    },

    updateNewMessage(newMessage){
        this._state.dialogsPage.newMessage = newMessage;
        this._callSubscriber();
    },

}

export default store;

window.state = store;