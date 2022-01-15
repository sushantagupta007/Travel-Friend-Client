import { Avatar, Container, Grid, Typography,} from '@mui/material';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Stack } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles({
    customLink: {
      color:"white",
      marginRight:"1rem",
      textDecoration:"none",
      '&:hover':{
        textDecoration:"underline",
      }
    },
    
})

const customStyle = makeStyles({
    customAvatar:{
        backgroundColor:"white",
        color:"#868383",
        '&:hover':{
            color:"#FFA902",
        }
    }
})
    
 

const Footer = () => {
    const classes= useStyles()
    const avatarClass = customStyle(); 
    return (
    <Container  maxWidth="false"  sx={{width:1, bgcolor: '#FFA902',color:"white", paddingTop:"1rem" }}>
        <Grid container spacing={2} sx={{padding:"10px"}}>
            <Grid item xs={12} sm={4} md={4} lg={4}  sx={{display:"flex",justifyContent:{xs:'center',sm:'flex-start', md:'flex-start',lg:'flex-start'},alignItems:{md:'flex-start'}}} >
                <Typography sx={{textAlign:"center"}} >
                    &copy; 2020 Travel Friend All Rights Reserved 
                </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} sx={{display:"flex", justifyContent:{xs:'center',sm:'center', md:'center',lg:'center'}}}>
                <a className={classes.customLink}  href="https://web.facebook.com/">
                 Contact
                </a>
                <a className={classes.customLink}  href="https://web.facebook.com/">
                 Privacy
                </a>
                <a className={classes.customLink}  href="https://web.facebook.com/">
                 Terms 
                </a>
                <a className={classes.customLink}  href="https://web.facebook.com/">
                 About
                </a>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} sx={{display:"flex",justifyContent:{xs:'center', sm:'flex-end', md:'center',lg:'flex-end'}}}>
                <Stack direction="row" spacing={2}>
                    <a  href="https://web.facebook.com/"> 
                        <Avatar   sx={{ width: 30, height: 30 }}  className={avatarClass.customAvatar} >
                            <FontAwesomeIcon style={{width:"15px",height:"15px",color:"#FFA902"}}  icon={faFacebookF}></FontAwesomeIcon>
                        </Avatar>
                    </a>
                    <a  href="https://web.facebook.com/"> 
                        <Avatar   sx={{ width: 30, height: 30 }}  className={avatarClass.customAvatar} >
                            <FontAwesomeIcon style={{width:"15px",height:"15px"}}  icon={faTwitter}></FontAwesomeIcon>
                        </Avatar>
                    </a>
                    <a  href="https://web.facebook.com/"> 
                        <Avatar   sx={{ width: 30, height: 30 }}  className={avatarClass.customAvatar} >
                            <FontAwesomeIcon style={{width:"15px",height:"15px"}}  icon={faInstagram}></FontAwesomeIcon>
                        </Avatar>
                    </a>
                    <a  href="https://web.facebook.com/"> 
                        <Avatar   sx={{ width: 30, height: 30 }}  className={avatarClass.customAvatar} >
                            <FontAwesomeIcon style={{width:"15px",height:"15px"}}  icon={faYoutube}></FontAwesomeIcon>
                        </Avatar>
                    </a>
                </Stack>
            </Grid>
        </Grid>
    
    </Container>    
    )    
}

export default Footer;