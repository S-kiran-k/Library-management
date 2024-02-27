import { useState } from 'react';
import axios from 'axios';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';
import user_icon from '../assets/person.png';

const Signup = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault(); // Prevent default form submission
        axios.post("https://library-management-backend-ipeu.onrender.com/signup", values)
            .then((res) => {
                console.log(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <div className="container px-4 py-8 mx-auto">
            <div className='max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg'>
                <div className="py-4 text-lg font-semibold text-center">Sign Up</div>
                <form className="px-6 py-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <img src={user_icon} alt="" className="inline-block w-6 h-6" />
                        <input type="text" placeholder="NAME" name="name" onChange={handleChange} className="w-full px-3 py-2 ml-2 border rounded-lg focus:outline-none" />
                    </div>
                    <div className="mb-4">
                        <img src={email_icon} alt="" className="inline-block w-6 h-6" />
                        <input type="email" placeholder="EMAIL ID" name="email" onChange={handleChange} className="w-full px-3 py-2 ml-2 border rounded-lg focus:outline-none" />
                    </div>
                    <div className="mb-4">
                        <img src={password_icon} alt="" className="inline-block w-6 h-6" />
                        <input type="password" placeholder="PASSWORD" name="password" onChange={handleChange} className="w-full px-3 py-2 ml-2 border rounded-lg focus:outline-none" />
                    </div>
                    <div className="text-center">
                        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
