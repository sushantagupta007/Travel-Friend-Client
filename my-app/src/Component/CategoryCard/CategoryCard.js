import React  from 'react';
import { Box, Typography, createTheme, Grid } from '@mui/material';




import { makeStyles } from '@material-ui/core/styles';


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

const CategoryCard = ({ image }) => {

    const useStyles = makeStyles({
        demowrap: {
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
                backgroundImage: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 0',
                backgroundSize: 'cover',
                borderRadius: "10px",
            }
        },
        demoContent: {
            position: 'relative',
            display: 'flex',
            justifyContent: "center",
            alignItems: 'flex-end',
            height: '100%'
        }
    })

    const classes = useStyles();

    return (
        <Box sx={{ m: 1 }} component="div" className={classes.demowrap}>
            <Box component="div" className={classes.demoContent} >
                <Box component="div" sx={{width:'100%'}}>
                    <Typography sx={{ fontFamily: 'Poppins', color: "black",fontWeight:'bold',pl:2 }} theme={theme} textAlign="center" variant="h7">
                        14 Things To See and Do in Bangladesh
                    </Typography>
                    <Grid container spacing={1} sx={{my:1,color:'white'}}>
                        <Grid item xs={4} sx={{display:'flex',justifyContent:'center'}}>
                            <Typography sx={{ fontFamily: 'Poppins',fontSize:'12px'}} textAlign="center" variant="p">
                                <i className="fas fa-clock"> 30 Minutes Ago</i>
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography sx={{ fontFamily: 'Poppins',fontSize:'12px'}} textAlign="center" variant="p">
                            <i className="fas fa-folder"> Solo Travel </i> 
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography sx={{ fontFamily: 'Poppins',fontSize:'12px'}} textAlign="center" variant="p">
                            <i className="fas fa-user"> Adam Smith</i>
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography sx={{ fontFamily: 'Poppins',fontSize:'12px'}} textAlign="center" variant="p">
                                hello
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
};

export default CategoryCard;