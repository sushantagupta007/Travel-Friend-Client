import { Typography, Container, Box, Button, Grid } from '@mui/material';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import './SignUp.css'
import { Link, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from './../../Hooks/useAuth';

const SignUp = () => {

    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const {googleSign,userCreate,user } = useAuth();
    
   
    const idRef = useRef(); 
    const onSubmit = data => {
        const email = data.email
        const password = data.password
        const name = data.name
        const phone = data.number
        console.log(data.number)
        localStorage.setItem("phone",data.number)
        userCreate(name, email, password, phone, history)
      
        reset();

    };
    
    return (
        <Box component="div" id="signMainContainer">
            <Container  id="regForm" sx={{ width: '50%', mx: 'auto', py: 4, borderRadius: 1 }}>
                <Container component="div">
                    <Typography variant="h4" sx={{ fontFamily: "Poppins", textAlign: 'center' }}>
                        SignUp
                    </Typography>
                </Container>
                <form onSubmit={handleSubmit(onSubmit)} className='my-2'>
                    <Container component="div" sx={{ p: 1 }}>
                        {/* Name */}
                        <Box component="div" >
                            <Box component="div" sx={{ p: 1, display: 'flex', flexDirection: 'column', m: 0 }} >
                                <Typography component="label" sx={{ fontWeight: 'bold' }} > Name </Typography>
                                <Box
                                    component="input"
                                    sx={{ fontFamily: 'Poppins', m: 0, py: 2, border: 0, borderBottom: 1 }}
                                    type="text"
                                    placeholder='&#xF007; Mr.X '
                                    {...register("name", { required: true })}
                                />
                            </Box>
                        </Box>
                        {/* Email */}
                        <Box component="div" >
                            <Box component="div" sx={{ p: 1, display: 'flex', flexDirection: 'column', m: 0 }} >
                                <Typography component="label" sx={{ fontWeight: 'bold' }} > Email </Typography>
                                <Box
                                    component="input"
                                    sx={{ fontFamily: 'Poppins', m: 0, py: 2, border: 0, borderBottom: 1 }}
                                    type="email"
                                    placeholder='&#xF007; xyz@gmail.com'
                                    {...register("email", { required: true })}
                                />
                            </Box>
                        </Box>
                        {/* Number */}
                        <Box component="div" >
                            <Box component="div" sx={{ p: 1, display: 'flex', flexDirection: 'column', m: 0 }} >
                                <Typography component="label" sx={{ fontWeight: 'bold' }} > Mobile Number </Typography>
                                <Box
                                    component="input"
                                    sx={{ fontFamily: 'Poppins', m: 0, py: 2, border: 0, borderBottom: 1 }}
                                    type="text"
                                    placeholder='&#xF007; 017********'
                                    {...register("number", { required: true })}
                                />
                            </Box>
                        </Box>
                        {/* Password */}
                        <Box component="div" >
                            <Box component="div" sx={{ p: 1, display: 'flex', flexDirection: 'column', m: 0 }} >
                                <Typography component="label" sx={{ fontWeight: 'bold' }} > Password </Typography>
                                <Box
                                    component="input"
                                    sx={{ fontFamily: 'Poppins', m: 0, py: 2, border: 0, borderBottom: 1 }}
                                    type="password"
                                    placeholder='&#xF007; ******'
                                    {...register("password", { required: true })}
                                />
                            </Box>
                        </Box>
                    </Container>
                    
                    <Container>
                        <Button id="loginBtn" type="submit"> SIGN UP</Button>
                    </Container>
                </form>
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: 0, borderBottom: 1, borderBottomColor: 'grey.500'
                    }}
                >
                    <Typography variant="body2" sx={{ textAlign: 'center',fontFamily:"Poppins" }}> or Sign Up Using</Typography>
                    <Container sx={{ py: 1, marginLeft: '3.8px' }}>
                        <Box component="div" id="fontAwesomeDiv" sx={{ display: 'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center', py: 2, }}>
                            <Grid container spacing={2} sx={{mb:2}}>
                                <Grid item xs={6} sx={{ textAlign: 'right'}}>
                                    <Typography sx={{p:1, bgcolor: '#1F2B6C', borderRadius: '50%', color:'white'}} component="a" onClick={googleSign}>
                                        <FontAwesomeIcon icon={faGoogle}>
                                        </FontAwesomeIcon>
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={{p:1, bgcolor: '#1F2B6C', borderRadius: '50%', color:'white'}} component="a" onClick={googleSign}>
                                        <FontAwesomeIcon icon={faFacebook}>
                                        </FontAwesomeIcon>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box sx={{ display: 'flex', justifyContent: 'start' }}>
                                <Box component={Link} to="/signin" sx={{ color: 'text.secondary' }} >
                                    <Typography sx={{ fontFamily: "Poppins" }}> Already Use? Please Log In </Typography>
                                </Box>
                            </Box>
                        </Box>

                    </Container>
                </Container>
            </Container>

        </Box>
    );
};

export default SignUp;