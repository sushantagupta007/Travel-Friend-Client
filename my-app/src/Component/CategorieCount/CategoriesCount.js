import React from 'react';
import { Box, createTheme, Paper, Stack } from '@mui/material';
import { Typography } from '@mui/material';


const theme = createTheme();

theme.typography.h7 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },

};



const CategoriesCount = () => {
    return (
        <Paper elevation={2} sx={{ p: 1, mb: 1 }}>
            <Typography sx={{ fontFamily: 'Poppins', color: "black", fontWeight: 'bold' }} theme={theme} textAlign="left" variant="h6">
                Categories
            </Typography>
            <Box component="div">
                <Stack spacing={2}>
                   <Typography sx={{fontFamily:'Poppins',borderBottom: 1, borderColor: 'grey.500', mb:1}}> Solo Travel () </Typography>
                   <Typography sx={{fontFamily:'Poppins',borderBottom: 1, mt:1,borderColor: 'grey.500'}}> Jungal Travel () </Typography>
                   <Typography sx={{fontFamily:'Poppins',borderBottom: 1, mt:1,borderColor: 'grey.500'}}> Mount Travel () </Typography>
                   <Typography sx={{fontFamily:'Poppins',borderBottom: 1, mt:1,borderColor: 'grey.500'}}> Old City Travel () </Typography>
                   <Typography sx={{fontFamily:'Poppins',borderBottom: 1, mt:1,borderColor: 'grey.500'}}> River Travel () </Typography>
                   <Typography sx={{fontFamily:'Poppins',borderBottom: 1, mt:1,borderColor: 'grey.500'}}> Oceal Travel Travel () </Typography>
                </Stack>
            </Box>
        </Paper>
    );
};
 export default CategoriesCount