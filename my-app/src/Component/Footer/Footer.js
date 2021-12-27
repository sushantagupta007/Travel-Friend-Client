import { Container, Grid, Typography} from '@mui/material';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    customLink: {
      color:"white",
      marginRight:"1rem",
      textDecoration:"none",
      '&:hover':{
        textDecoration:"underline",
      }
    },
  });

const Footer = () => {
    const classes= useStyles()
    return (
    <Container  sx={{ bgcolor: '#FFA902',color:"white",padding:"" }}>
        <Grid container spacing={2} sx={{padding:"10px"}}>
            <Grid item xs={4} >
                <Typography sx={{textAlign:"center"}} >
                    &copy; 2020 Travel Friend All Rights Reserved 
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Link className={classes.customLink} to="https://www.facebook.com/">
                 Contact
                </Link>
                <Link to="/privacy" underline="hover">
                    Privacy
                </Link>
                <Link to="/terms" underline="hover">
                    Terms
                </Link>
                <Link to="/about" underline="hover">
                    About
                </Link>
            </Grid>
            <Grid item xs={4}>
            &copy; 2020 Travel Friend All Rights Reserved 
            </Grid>
        </Grid>
    
    </Container>    
    )    
}

export default Footer;