import { Container, Grid, Typography, } from '@mui/material';
import React from 'react';
import Map from '../Map/Map';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';


const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: 'rgb(255, 160, 5)',
      borderColor: 'rgb(255, 160, 5)',
      boxShadow: 'none',
      color:'white'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });


const ContactForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
    <Container sx={{flexGrow:1}}>
        <Grid container spacing={2}>
            <Grid item xs={12} lg={6} sx={{p:3}}>
                <form onSubmit={handleSubmit(onSubmit)} style={{display:'flex',flexDirection: 'column',width:"100%",padding:"2rem"}}>
                    <input 
                        typ="text"
                        placeholder="Full Name" 
                        style={{marginBottom:"10px", padding:"12px",borderRadius:"5px"}} 
                        {...register("fulltName", { required: true, maxLength: 20 })} />
                    <input 
                        placeholder="Email" 
                        type="email"
                        style={{marginBottom:"10px", marginTop:"10px", padding:"12px",borderRadius:"5px"}} 
                        {...register("email", { required: true})} 
                    />
                    <input 
                        type="number" 
                        {...register("age", { min: 18, max: 99 })} 
                        style={{marginBottom:"10px", marginTop:"10px", padding:"12px",borderRadius:"5px"}} 
                        />
                    <textarea
                        placeholder='Your message'
                        style={{marginBottom:"10px", marginTop:"10px",  padding:"12px",borderRadius:"5px"}} 
                        rows="20"
                        >
                        
                    </textarea>  
                    <BootstrapButton sx={{width:"100%",bgcolor:"#FFFFFF", color:'rgb(255, 170, 0)'}} variant="contained" disableRipple type="submit"> Submit </BootstrapButton>
                </form>
            </Grid>
            <Grid item xs={12} lg={6} sx={{p:3}}>
                <Box>
                    <Typography variant="h7" component="p" sx={{ fontFamily: 'Poppins', p: 3 }} >
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.

                    </Typography>
                </Box>
                <Box>
                    <Map ></Map>
                </Box>
            </Grid>
        </Grid>
    </Container>    
    );
};

export default ContactForm;