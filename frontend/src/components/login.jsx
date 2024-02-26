import { useState } from 'react';
import axios from 'axios';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState(''); // For displaying errors

    function handleChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        axios.post("http://localhost:8000/login", credentials)
            .then((res) => {
                if (res.data.success) {
                    // Successful login, redirect to home/dashboard
                    console.log("Login successful:", res.data);
                    // Example: 
                    // window.location.href = '/dashboard';  
                } else {
                    setErrorMessage(res.data.message || "Invalid email or password");
                }
            })
            .catch((e) => {
                console.error("Login error:", e);
                setErrorMessage("An error occurred. Please try again.");
            });
    }

    return (
        <div className="container px-4 py-8 mx-auto">
            <div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="py-4 text-lg font-semibold text-center">Login</div>
                <form className="px-6 py-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <img src={email_icon} alt="" className="inline-block w-6 h-6" />
                        <input type="email" placeholder="EMAIL ID" name="email" onChange={handleChange} className="w-full px-3 py-2 ml-2 border rounded-lg focus:outline-none" />
                    </div>
                    <div className="mb-4">
                        <img src={password_icon} alt="" className="inline-block w-6 h-6" />
                        <input type="password" placeholder="PASSWORD" name="password" onChange={handleChange} className="w-full px-3 py-2 ml-2 border rounded-lg focus:outline-none" />
                    </div>
                    {errorMessage && <div className="mb-4 text-red-500">{errorMessage}</div>}
                    <div className="text-center">
                        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
