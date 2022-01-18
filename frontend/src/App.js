import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
// Components
import Login from './components/Login';
import Home from './container/Home';
// Data
import { fetchUser } from './utils/fetchUser';



const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const User = fetchUser();

        if(!User) navigate("/login");
    }, [])

    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/*" element={<Home />} />
        </Routes>
    )
}

export default App;
