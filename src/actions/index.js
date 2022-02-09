import axios from 'axios';


export const createContact = formValues => async dispatch => {

    const response = await axios.post('http://localhost:3000/api/add', formValues)

    //Add Contact to Redux Store
    dispatch({type: 'ADD_CONTACT', payload:response.data});


}

