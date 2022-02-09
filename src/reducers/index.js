import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import contactsReducer from '../reducers/contactsReducer';

export default combineReducers ({
    form : formReducer,
    contacts: contactsReducer
});