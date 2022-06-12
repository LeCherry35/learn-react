let rerenderEntireTree = () => {
    console.log('state changed');
}

let state = {
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
         
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 1,
        text: state.profilePage.newPostText,
        likesCount: 0
    };
    
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = ''; 
    rerenderEntireTree();
}

export const updateNewPostText = newText => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const sendMessage = () => {
    const newMessage = {
        user: 'me',
        message: state.dialogsPage.newMessage,
    }
    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.newMessage = 'Yo!';
    rerenderEntireTree();
}

export const updateNewMessage = newMessage => {
    state.dialogsPage.newMessage = newMessage;
    rerenderEntireTree();
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
export default state;