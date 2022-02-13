import { Avatar, Container, Typography,Box } from '@mui/material';
import React from 'react';
import useAuth from './../../Hooks/useAuth';
import TourData from './../TourData/TourData';
import { useHistory } from 'react-router-dom';



const MyTour = () => {
    const {user} = useAuth();

    const history= useHistory()
    const object = history.location.state // Geting object using history.location.state
    const objectParse = JSON.parse(object) // JSON.parse() to convert text into a JavaScript object:

    console.log(objectParse)
    return (
        <Container>
            <Box component="div" 
                sx={{display:'flex', 
                    width:'100%',
                    alignItems:'center',
                    justifyContent:'space-between',
                    padding:1

                    }}>
                <Avatar
                    alt="Remy Sharp"
                    src=""
                    sx={{ width: 56, height: 56 }}
                />
                <Typography>{user && user.displayName}</Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:{xs:"column", md:'row'}}}> 
                <Box sx={{width: {xs:'100%', md:'70%'}}}> 
                    <TourData object={objectParse}></TourData>
                </Box>
                <Box>
                    <Typography > Hello </Typography>
                </Box>
            </Box>  
                
            

        </Container>
    );
};

export default MyTour;