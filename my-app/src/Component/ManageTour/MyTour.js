import React from 'react';
import { Typography,Container } from '@mui/material';


const MyTour = ({data}) => {
    console.log(data)

    
    
    return (
        <Container>
            <Typography sx={{color:"black"}}> MyTour </Typography>
        </Container>
    );
};

export default MyTour;