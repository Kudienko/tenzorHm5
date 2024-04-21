import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import RegisterPage from './register/registerPage';
import './style.scss';
import { Box } from '@mui/material';
import { instance } from '../../utils/axios';

function AuthRootComponent() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        const user = await instance.post('auth/login', userData)
        console.log(user.data);
    }

    const location = useLocation();

    return (
        <div className='root'>
            <form className="form" onSubmit={handleSubmit}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                >
                    {(location.pathname === '/login' ? <LoginPage setEmail={setEmail} setPassword={setPassword} /> : location.pathname === '/register' ? <RegisterPage /> : null)}
                </Box>
            </form>
        </div>
    )
}

export default AuthRootComponent