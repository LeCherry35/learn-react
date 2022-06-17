const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    postsData: [
        {id: 1, user: 'Tolik', likesCount: '23', text: 'Omine'},
        {id: 2, user: 'Loh', likesCount: '2', text: 'Lorem ipsum dolor'},
        {id: 3, user: 'Me', likesCount: '110', text: 'First here!'},
    ],
    newPostText: 'job',
}
const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
        
        case ADD_POST: {

            let newPost = {
                id: 1,
                text: state.newPostText,
                likesCount: 0
            };
            
            const stateCopy = {...state,
                postsData: [...state.postsData]
            };
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            const stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, 
    newText: text
});

export default profileReducer;