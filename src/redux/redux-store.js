import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import navbarReducer from './navbar-reducer';
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navData: navbarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);
window.store = store;
export default store;