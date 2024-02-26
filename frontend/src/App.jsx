import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react';
import Login from './components/login'
import axios from 'axios';
import Navbar from './components/navbar'; // Import the Navbar component
import Home from './components/home';
import LibraryManagementSystem from './components/library'; // Import your library management system component
import Signup from './components/signup';
import Add from './components/addbook'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/user', { withCredentials: true });
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/auth/logout', {}, { withCredentials: true });
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <BrowserRouter>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add/>}/>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/library" element={<LibraryManagementSystem />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App;
