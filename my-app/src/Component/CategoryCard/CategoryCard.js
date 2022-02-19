import React from 'react';
import { Box, Typography, createTheme, Grid, Button,CardContent } from '@mui/material';




import { makeStyles } from '@material-ui/core/styles';

import './CategoryCard.css'

const theme = createTheme();

theme.typography.h7 = {
    fontSize: '1rem',
    '@media (min-width:600px)': {
        fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },

};

const CategoryCarD = ({ image }) => {

    const useStyles = makeStyles({
        demowrap: {
            paddingTop: '0px',
            position: 'relative',
            height: '350px',
            borderRadius: "50px",
            '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                opacity: 0.7,
                borderRadius: "10px",
            }
        },
        demoContent: {
            position: 'relative',
            display: 'flex',
            justifyContent: "center",
            alignItems: 'flex-end',
            height: '100%', 
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        },
    })

    const classes = useStyles();

    return (
        <Box id="customCard" sx={{ m: 1 }} component="div" className={classes.demowrap}>
            <Box component="div" className={classes.demoContent} >
                <Box id="cardInfo" component="div" sx={{ width: '100%' }}>
                    <Typography sx={{ fontFamily: 'Poppins', color: "black", fontWeight: 'bold', pl: 2, pt: 0 }} theme={theme} textAlign="center" variant="h7">
                        14 Things To See and Do in Bangladesh
                    </Typography>
                    <Grid container spacing={1} sx={{ my: 1, color: 'black', pl: 2 }}>
                        <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', }} variant="p">
                                <i className="fas fa-clock" style={{ color: "#141414" }}></i>  30 Minutes Ago
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px' }} variant="p">
                                <i className="fas fa-folder" style={{ color: "#141414" }}>  </i> Solo Travel
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px' }} variant="p">
                                <i className="fas fa-user" style={{ color: "#141414" }}> </i> Adam Smith
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px' }} variant="p">
                                <i className="fas fa-comment" style={{ color: "#141414" }}> </i> 502
                            </Typography>
                        </Grid>
                    </Grid>
                    <CardContent id="cardInfo">
                        <Button id="cardButon" size="small">Know More</Button>
                    </CardContent>
                </Box>

            </Box>
        </Box>
    )
};

export default CategoryCarD;