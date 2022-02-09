import axios from 'axios';


export const createContact = formValues => async dispatch => {

    const response = await axios.post('https://calm-veiled-queen.glitch.me/api/add', formValues)

    //Add Contact to Redux Store
    dispatch({type: 'ADD_CONTACT', payload:response.data});


}

