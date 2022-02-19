import React from 'react';
import { Typography, createTheme,Paper,Stack } from '@mui/material';

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
const ShortContact = () => {
    return (
        <Paper elevation={2} sx={{ p: 1, my: 2 }}>
            <Typography theme={theme} sx={{ fontSize: { xs: '1rem' }, fontFamily: 'Poppins' }} variant="h3" textAlign="left">
                Contact Me
            </Typography>
            <Stack direction="row" sx={{ fontFamily: 'Poppins', fontWeight: 'normal', color: "#696969", my: 2 }} >
                <i className="fas fa-map-marker-alt">  Phulbari, Dinajpur </i>
            </Stack>
            <Stack direction="row" sx={{ fontFamily: 'Poppins', fontWeight: 'normal', color: "#696969", my: 2 }} >
                <i className="fas fa-envelope">  sushanta.sust@gmail.com</i>
            </Stack>
            <Stack direction="row" sx={{ fontFamily: 'Poppins', fontWeight: 'normal', color: "#696969", my: 2 }} >
                <i className="fas fa-mobile-alt"> 01737558258</i>
            </Stack>
        </Paper>
    );
};

export default ShortContact;