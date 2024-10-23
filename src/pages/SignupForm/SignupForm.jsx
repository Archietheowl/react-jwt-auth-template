// SignupForm.jsx

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../../services/authService'

const SignupForm = (props) => {
    //Variables
    const navigate = useNavigate();
    
    //States
    const [message, setMessage] = useState(['']);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        passwordConf: '',
    });

    //Functions/Handlers
    const updateMessage = (msg) => {
        setMessage(msg);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const { data} = await signup(formData)
            props.setUser(formData) // Modify the state in the App component (so is this lifting state)
            navigate('/')    
        } catch (error) {
            updateMessage(error.message)
        }
    };

    const { username, password, passwordConf } = formData;

    const isFormInvalid = () => {
        return !(username && password && password === passwordConf);
    };

    return (
        <main>
            <h1>Sign Up</h1>
            <p>{message}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="name"
                        value={username}
                        name="username"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        name="password"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="confirm">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirm"
                        value={passwordConf}
                        name="passwordConf"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button disabled={isFormInvalid()}>Sign Up</button>
                    <Link to="/">
                        <button>Cancel</button>
                    </Link>
                </div>
            </form>
        </main>
    );
};

export default SignupForm;
