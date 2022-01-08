import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container, Divider } from '@mui/material';
import NavBar from './../NavBar/NavBar';

import './Nav.css'
import TopHeader from './../Header/TopHeader';
import { Typography } from '@mui/material';
import { createTheme } from '@mui/material';
import { Box } from '@mui/material';

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
export default function Nav() {
  return (
  
    <div id="customBG">
      <TopHeader></TopHeader>
      <NavBar></NavBar>
      <Box sx={{display:'flex', flexDirection:'column',alignItems:'center',justifyContent:'center',p:{lg:4, xs:0}, width:{lg:"50%",xs:'100%'}, mx:'auto',color:{xs:'white'}}}> 
        <Typography  theme={theme} sx={{fontFamily:'Poppins'}} variant="h3" textAlign="Center">
          Where Will You Go To Next?  
        </Typography>
        <Typography theme={theme} sx={{fontFamily:'Poppins', textAlign:'center'}} component="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Typography>
        <Typography theme={theme} sx={{fontFamily:'Poppins', textAlign:'center',color:'orange',fontWeight:'bold',marginTop:'10px'}} variant="h5">
          Lets go..
        </Typography>
      </Box>
     
    </div>
    
   
  );
}
