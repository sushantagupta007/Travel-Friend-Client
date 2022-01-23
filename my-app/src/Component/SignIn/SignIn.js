import { Typography, Container, Box, Button, Grid } from '@mui/material';
import React, { useState, } from 'react';
import { useForm } from 'react-hook-form';

import { Link, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from './../../Hooks/useAuth';



import './SignIn.css'







const SignIn = () => {
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const { googleSign, signInUser,updatePass, facebookSign} = useAuth();
    const [newpassword, setnewpassword] = useState(null);
    const [phoneUser] = useState({}); 


    

    const onSubmit = data => {
        const email = data.email
        const password = data.password
        signInUser(email, password, history) 
        reset() 
    };

    console.log(phoneUser)
    var generator = require('generate-password');
    const getASecureRandomPassword = () => {
        var password = generator.generate({
            length: 10,
            numbers: true
        })
        return password
    }

    const handlePassword = (history) => {
        const newpassword = getASecureRandomPassword()
        setnewpassword(newpassword);
        updatePass(newpassword, history);
    }

    setTimeout(() => {
        setnewpassword(null)
    }, 1500);

    return (
        <Box component="div" id="signMainContainer">
            <Container id="regForm" sx={{ width: '50%', mx: 'auto', py: 4, borderRadius: 1, my: 2 }}>
                <Container component="div">

                    <Typography variant="h4" sx={{ fontFamily: "Poppins", textAlign: 'center' }}>
                        SignIn
                    </Typography>
                </Container>
                <form onSubmit={handleSubmit(onSubmit)} className='my-2'>
                    <Box id="sign-in-button"> </Box>
                    <Container component="div" sx={{ p: 1 }}>
                        <Box component="div" >
                            <Box component="div" sx={{ p: 1, display: 'flex', flexDirection: 'column', m: 0 }} >
                                <Typography component="label" sx={{ fontWeight: 'bold' }} > Email </Typography>
                                <Box
                                    component="input"
                                    sx={{ fontFamily: 'Poppins', m: 0, py: 2, border: 0, borderBottom: 1 }}
                                    type="email"
                                    placeholder='&#xF007; sushanta.sust@gmail.com'
                                    {...register("email", { required: false })}

                                />
                            </Box>
                        </Box>
                        <Box component="div" >
                            <Box component="div" sx={{ p: 1, display: 'flex', flexDirection: 'column', m: 0 }} >
                                <Typography component="label" sx={{ fontWeight: 'bold' }} > Password </Typography>
                                <Box
                                    component="input"
                                    sx={{ fontFamily: 'Poppins', m: 0, py: 2, border: 0, borderBottom: 1 }}
                                    type="password"
                                    placeholder='******'
                                    {...register("password", { required: false })}
                                />
                            </Box>
                        </Box>
                    </Container>
                    <Container sx={{ display: 'flex', flexDirection: { xs: "column", md: 'row' }, justifyContent: { xs: 'space-evenly', md: 'space-around' }, my: 1, alignItems: 'center' }} >
                        <Box component={Link} to="/forgotpass" sx={{ ml: 1, fontFamily: 'Poppins', color: 'text.secondary' }} > Forget Password ?</Box>
                        <Button variant="outlined" onClick={handlePassword} sx={{ ml: 1, fontFamily: 'Poppins', color: 'text.secondary', p: 1 }} > Update Password</Button>
                        <Typography sx={{ fontFamily: 'Poppins' }}>New Password: {newpassword} </Typography>
                    </Container>
                    <Container>
                        <Button sx={{ width: '100%' }} id="loginBtn" type="submit"> SIGN IN</Button>
                    </Container>
                </form>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        my: 2,
                        border: 0, borderBottom: 1, borderBottomColor: 'grey.500'
                    }}
                >
                    <Typography variant="body2" sx={{ textAlign: 'center', fontFamily: 'Poppins' }}> or Login Using</Typography>
                    <Container sx={{ py: 1, marginLeft: '3.8px' }}>
                        <Box component="div" id="fontAwesomeDiv" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 2, }}>
                            <Grid container spacing={2} sx={{ mb: 2 }}>
                                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                    <Typography sx={{ p: 1, bgcolor: '#1F2B6C', borderRadius: '50%', color: 'white' }} component="a" onClick={()=>googleSign(history)}>
                                        <FontAwesomeIcon icon={faGoogle}>
                                        </FontAwesomeIcon>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{ p: 1, bgcolor: '#1F2B6C', borderRadius: '50%', color: 'white' }} component="a" onClick={()=>facebookSign(history)}>
                                        <FontAwesomeIcon icon={faFacebook}>
                                        </FontAwesomeIcon>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                                <Box component={Link} to="/signup" sx={{ color: 'text.secondary' }} >
                                    <Typography sx={{ fontFamily: "Poppins" }}> New User? Please Sign Up </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Container>
            </Container>

        </Box>
    );
};

export default SignIn;