import { createTheme, Grid, Paper, Typography, Stack } from '@mui/material';
import React from 'react';
import Subscribe from '../Subscribe/Subscribe';
import AboutMeCard from './AboutMeCard';
import { Container } from '@mui/material';
import { Box } from '@mui/material';

import './AboutMe.css'

import MasonaryComp from '../Masonry/Masonary';

const theme = createTheme();

      theme.typography.h3 = {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
          fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '2rem',
        },
        
      };
const AboutMe = () => {
    return (
        <Container sx={{flexGrow:1}}>
            <Grid container spacing={1}>
            <Grid item lg={8} xs={12} sx={{m:{xs:0}}}>
                <Container> 
                    <Typography sx={{textAlign:'left',my:2}} id="newsPaper"  component="p"> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a 
                        galley of type and scrambled text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled
                    </Typography>
                    <Typography sx={{textAlign:'left',my:2}}  component="p"> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a 
                        galley of type and scrambled text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled
                    </Typography>
                    <Typography sx={{textAlign:'left',my:2}}  component="p"> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took a 
                        galley of type and scrambled text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled
                    </Typography>
                </Container>
                <Container>
                    <MasonaryComp></MasonaryComp>
                </Container>   
            </Grid>
            <Grid item lg={4} xs={12} sx={{mt:{xs:0,lg:2}, mb:{xs:0,lg:2}}}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection:'column',
                        
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        
                        width: 'auto',
                        height: 'auto',
                        },    
                        }}
                    >
                <AboutMeCard></AboutMeCard>
                <Paper elevation={2} sx={{p:1, my:2}}>
                    <Typography theme={theme} sx={{fontSize:{xs:'1rem'},fontFamily:'Poppins'}} variant="h3" textAlign="left">
                        Contact Me
                    </Typography>
                    <Stack direction="row" sx={{fontFamily:'Poppins' , fontWeight:'normal',color:"#696969", my:2}} >
                        <i className="fas fa-map-marker-alt">  Phulbari, Dinajpur </i> 
                    </Stack>
                    <Stack direction="row" sx={{fontFamily:'Poppins' , fontWeight:'normal',color:"#696969", my:2}} >
                        <i className="fas fa-envelope">  sushanta.sust@gmail.com</i> 
                    </Stack>
                    <Stack direction="row" sx={{fontFamily:'Poppins' , fontWeight:'normal',color:"#696969", my:2}} >
                        <i class="fas fa-mobile-alt"> 01737558258</i> 
                    </Stack>
                    
                </Paper>
                <Subscribe></Subscribe>
                </Box>
            </Grid>
            </Grid>
        </Container>
       
    );
};

export default AboutMe;