// src/services/authService.js

import axios from 'axios'
const BACKEND_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/users`; 

const signup = async (formData) => {
    return axios.post(`${BACKEND_URL}/signup`, formData)

//!--- Bellow is using fetch but Sam has shown us with Axios and it looks way more efficent!
//!--- The lesson plan also put the try catch bock here but Sam's demo places that in the hanldeSubmit
    // try {
    //     const res = await fetch(`${BACKEND_URL}/users/signup`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(formData),
    //     });
    //     const json = await res.json();

    //     if (json.token) {
    //         localStorage.setItem('token', json.token); //adding this line to have the JWT stored in local storage
    //         const user = JSON.parse(atob(json.token.split('.')[1]));
    //         return user;
    //     }

    //     if (json.err) {
    //         throw new Error(json.err);
    //     }
    //     return json;
    // } catch (error) {
    //     console.log(error);
    //     throw error;
    // }
};


const signin = async (user) => {
    return axios.post(`${BACKEND_URL}/signin`)

    //!--- Lesson plan / FETCH version see not above.
    // try {
    //     const res = await fetch(`${BACKEND_URL}/signin`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(user),
    //     });
    //     const json = await res.json();

    //     if (json.token) {
    //         localStorage.setItem('token', json.token); //adding this line to have the JWT stored in local storage
    //         const user = JSON.parse(atob(json.token.split('.')[1]));
    //         return user;
    //     }

    //     if (json.error) {
    //         throw new Error(json.error);
    //     }


    // } catch (err) {
    //     console.log(err);
    //     throw err;
    // }
};

const getUser = () => {
    const token = localStorage.getItem('token');
    if(!token) return null;
    const user = JSON.parse(atob(token.split('.')[1]))
    return user;
}

const signout = () => {
    localStorage.removeItem('token');
};

export { signup, signin, getUser, signout };
