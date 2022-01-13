import * as React from 'react';
import NavBar from './../NavBar/NavBar';
import TopHeader from './../Header/TopHeader';
import { Typography } from '@mui/material';
import { createTheme } from '@mui/material';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { useHistory } from 'react-router-dom';

import './Nav.css'
const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.5rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },

};

export default function Nav({ img, text, textcolor }) {

  const history = useHistory();


  const MyComponent = styled('div')({
    backgroundImage: `url(${img})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '10px',
    margin: '0px',
  })

  const Ui = () => {
    if(history.location.pathname==='/blog'){
      return 
    }
    else{
      <>
      <Typography theme={theme} sx={{ fontFamily: 'Poppins', textAlign: 'center', p: { lg: 10, xs: 1 }, height: "100%" }} component="div">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Typography>
      <Typography theme={theme} sx={{ fontFamily: 'Poppins', textAlign: 'center', color: 'orange', fontWeight: 'bold', marginTop: { lg: '10px', xs: '0px' }, }} variant="h5">
        Lets go..
      </Typography>
    </>
    }

  }

  return (

    <MyComponent >
      <TopHeader></TopHeader>
      <NavBar></NavBar>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', p: { lg: 4, xs: 0 }, width: { lg: "50%", xs: '100%' }, mx: 'auto', color: { xs: `${textcolor}` } }}>
        <Typography theme={theme} sx={{ fontFamily: 'Poppins' }} variant="h3" textAlign="Center">
          {text}
        </Typography>
        {Ui()}
        
        {/* <Typography theme={theme} sx={{ fontFamily: 'Poppins', textAlign: 'center', p: { lg: 10, xs: 1 }, height: "100%" }} component="div">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
        <Typography theme={theme} sx={{ fontFamily: 'Poppins', textAlign: 'center', color: 'orange', fontWeight: 'bold', marginTop: { lg: '10px', xs: '0px' }, }} variant="h5">
          Lets go..
        </Typography> */}
      </Box>

    </MyComponent>


  );
}
