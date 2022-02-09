import axios from 'axios';

export const createContact = formValues => async dispatch => {

    const response = await axios.post('http://localhost:3001/contacts', formValues)

    //Add Contact to Redux Store
    dispatch({type: 'ADD_CONTACT', payload:response.data});
    dispatch(reset('contactUs')); 

}
