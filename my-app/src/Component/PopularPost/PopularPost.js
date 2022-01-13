import React from 'react';
import { Paper, Box, Typography, Grid, createTheme } from '@mui/material';
import Tower from '../../Image/8.jpg'
import { makeStyles } from '@material-ui/core/styles';


//Theme for Typography
const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
  
};

const useStyles = makeStyles({
    root:{
        color:"#FFA902"
    },
    root1:{
        color:"rgba(105, 105, 105, 0.6)"
    },
    root2:{
        color:"#868383"
    }
})
const PopularPost = () => {
    const classes = useStyles(); 
    return (      
        <Paper elevation={2} sx={{borderRadius:1,p:1, my:1}} > 
            <Box>
                <Typography theme={theme} component="div" variant="h6" gutterBottom sx={{fontWeight:'medium',mb:2}}>Popular Post </Typography>
            </Box>
            
            <Grid container spacing={1} sx={{my:1}}>
                <Grid item lg={4} md={4} xs={4} sx={{px:2}} >
                <Box component="img"
                    sx={{height: '100%', width:"100%",borderRadius:'5px'} }
                    alt="The house from the offer."
                    src={Tower}/>
                </Grid>
                <Grid item lg={8} md={8} xs={8}>
                    <Typography  component="p"  sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.9rem'}} >    
                        13 Thing I Would Tell You New Traveller
                    </Typography>
                    <Box> 
                        <Typography 
                            sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.8rem'}} 
                            component="p" 
                            theme={theme}>
                            <span className={classes.root}> Post </span> <span className={classes.root1}> By </span>  sffd
                        </Typography>
                    </Box>
                    <Box > 
                        <Typography 
                            sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.8rem'}} 
                            component="p"
                            theme={theme}>
                            <span className={classes.root2}> dfdff </span> <span className={classes.root1}> -- </span>  <span className={classes.root}> sdfdf</span>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            
            <Grid container spacing={1} sx={{my:1}}>
                <Grid item lg={4} md={4} xs={4} sx={{px:2}} >
                <Box component="img"
                    sx={{height: '100%', width:"100%",borderRadius:'5px'} }
                    alt="The house from the offer."
                    src={Tower}/>
                </Grid>
                <Grid item lg={8} md={8} xs={8}>
                    <Typography  component="p"  sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.9rem'}} >    
                        13 Thing I Would Tell You New Traveller
                    </Typography>
                    <Box> 
                        <Typography 
                            sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.8rem'}} 
                            component="p" 
                            theme={theme}>
                            <span className={classes.root}> Post </span> <span className={classes.root1}> By </span>  sffd
                        </Typography>
                    </Box>
                    <Box> 
                        <Typography 
                            sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.8rem'}} 
                            component="p"
                            theme={theme}>
                            <span className={classes.root2}> dfdff </span> <span className={classes.root1}> -- </span>  <span className={classes.root}> sdfdf</span>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            
            <Grid container spacing={1} sx={{my:1}}>
                <Grid item lg={4} md={4} xs={4} sx={{px:2}} >
                <Box component="img"
                    sx={{height: '100%', width:"100%",borderRadius:'5px'} }
                    alt="The house from the offer."
                    src={Tower}/>
                </Grid>
                <Grid item lg={8} md={8} xs={8}>
                    <Typography  component="p"  sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.9rem'}} >    
                        13 Thing I Would Tell You New Traveller
                    </Typography>
                    <Box> 
                        <Typography 
                            sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.8rem'}} 
                            component="p" 
                            theme={theme}>
                            <span className={classes.root}> Post </span> <span className={classes.root1}> By </span>  sffd
                        </Typography>
                    </Box>
                    <Box > 
                        <Typography 
                            sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.8rem'}} 
                            component="p"
                            theme={theme}>
                            <span className={classes.root2}> dfdff </span> <span className={classes.root1}> -- </span>  <span className={classes.root}> sdfdf</span>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            
            <Grid container spacing={1} sx={{my:1}}>
                <Grid item lg={4} md={4} xs={4} sx={{px:2}} >
                <Box component="img"
                    sx={{height: '100%', width:"100%",borderRadius:'5px'} }
                    alt="The house from the offer."
                    src={Tower}/>
                </Grid>
                <Grid item lg={8} md={8} xs={8}>
                    <Typography  component="p"  sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.9rem'}} >    
                        13 Thing I Would Tell You New Traveller
                    </Typography>
                    <Box> 
                        <Typography 
                            sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.8rem'}} 
                            component="p" 
                            theme={theme}>
                            <span className={classes.root}> Post </span> <span className={classes.root1}> By </span>  sffd
                        </Typography>
                    </Box>
                    <Box> 
                        <Typography 
                            sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.8rem'}} 
                            component="p"
                            theme={theme}>
                            <span className={classes.root2}> dfdff </span> <span className={classes.root1}> -- </span>  <span className={classes.root}> sdfdf</span>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default PopularPost;