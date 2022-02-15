import React from 'react';
import { Typography,Container } from '@mui/material';
import { useHistory } from 'react-router-dom';

const MyTour = () => {
    const history = useHistory(); 
    console.log(history)
    // console.log(history.location.state?.data)
    
    return (
        <Container>
            <Typography sx={{color:"black"}}> MyTour </Typography>
        </Container>
    );
};

export default MyTour;