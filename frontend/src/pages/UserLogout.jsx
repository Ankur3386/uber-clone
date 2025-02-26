import React, { useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if (!token) {
            navigate('/login');
            return;
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((response) => {
            if (response.status === 200) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        })
        .catch((error) => {
            console.error("Logout failed:", error);
            localStorage.removeItem('token'); // Ensure token is removed on failure
            navigate('/login');
        });
    }, [navigate]);

    return null; // No need to render anything
};


export default UserLogout