import { createTheme, Grid, Typography } from '@mui/material';
import React from 'react';
import Subscribe from '../Subscribe/Subscribe';
import AboutMeCard from './AboutMeCard';
import { Container } from '@mui/material';
import { Box } from '@mui/material';

import './AboutMe.css'

import MasonaryComp from '../Masonry/Masonary';
import ShortContact from '../ShortContact/ShortContact';

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
                <ShortContact></ShortContact>
                <Subscribe></Subscribe>
                </Box>
            </Grid>
            </Grid>
        </Container>
       
    );
};

export default AboutMe;