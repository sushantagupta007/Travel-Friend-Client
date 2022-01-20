import React from 'react';
import { Typography, Container, Box, Button,} from '@mui/material';

import { useForm } from 'react-hook-form';

import {useHistory } from 'react-router-dom';


import useAuth from './../../Hooks/useAuth';

import './ForgotPass.css'



const ForgotPass = () => {
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const {  resetPassword } = useAuth();
 
   
  
    const onSubmit = data => {
        const email = data.email
        resetPassword(email,history)
        
        console.log("clicked")
        reset()
    };

    return (
        <Box component="div" id="signMainContainer">
        <Container id="regForm" sx={{ width: '50%', mx: 'auto', py: 4, borderRadius: 1, my: 2 }}>
            <Container component="div">
                <Typography variant="h4" sx={{ fontFamily: "Poppins", textAlign: 'center' }}>
                    Password Reset
                </Typography>
            </Container>
            <form onSubmit={handleSubmit(onSubmit)} className='my-2'>
                <Container component="div" sx={{ p: 1 }}>
                    <Box component="div" >
                        <Box component="div" sx={{ p: 1, display: 'flex', flexDirection: 'column', m: 0 }} >
                            <Typography component="label" sx={{ fontWeight: 'bold' }} > Email </Typography>
                            <Box
                                component="input"
                                sx={{ fontFamily: 'Poppins', m: 0, py: 2, border: 0, borderBottom: 1 }}
                                type="email"
                                placeholder='&#xF007; sushanta.sust@gmail.com'
                                {...register("email", { required: true })}
                            />
                        </Box>
                    </Box>
                </Container>
                <Container>
                    <Button sx={{width:'100%'}} id="loginBtn" type="submit"> Reset Password</Button>
                </Container>
            </form>
        </Container>

    </Box>
    );
};

export default ForgotPass;