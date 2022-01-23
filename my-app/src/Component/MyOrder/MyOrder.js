import { Avatar, Container, Typography,Box } from '@mui/material';
import React from 'react';



const MyTour = ({username}) => {
    
    
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
                <Typography>{username}</Typography>
                
            </Box>
        </Container>
    );
};

export default MyTour;