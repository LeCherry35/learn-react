const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const initialState ={
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FOLLOW: {
            let stateCopy = { 
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        u.followed = !u.followed;
                    }
                    return u;
                })
            }
            return stateCopy;
        }
        case SET_USERS: {
            debugger;
            // console.log('act',action.users)
            // console.log('st',state.users)
            const stateCopy = { ...state, users: [ ...state.users, ...action.users]}
            return stateCopy;
        }
        default:
            return state;
    }
}

export const toggleFollowAC = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})
export default usersReducer;