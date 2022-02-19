import React from 'react';
import { Typography,Container } from '@mui/material';


const MyTour = ({data}) => {
    console.log(data)

   
    
    return (
        <Container>
            <Typography sx={{color:"black"}}> MyTour </Typography>
            <Typography sx={{textAlign:'center',fontSize:"2rem"}} component="h4"  > Details Coming soon. </Typography>
        </Container>
    );
};

export default MyTour;