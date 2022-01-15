import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Paper, Stack, Avatar, Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';



const customStyle = makeStyles({
    customAvatar: {
        backgroundColor: "white",
        color: "#868383",
        '&:hover': {
            backgroundColor: "#FFB902",
            color: "white",
        }
    }
})

const FollowMeCamp = () => {
    const avatarClass = customStyle();
    return (
        <Paper elevation={1} sx={{ borderRadius: 1, p: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 'medium', mb: 2 }}>Follow Me </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} lg={3} >
                    <a href="https://web.facebook.com/">
                        <Avatar sx={{ width: 30, height: 30, border: 1, bgcolor: '#FFA902' }}  >
                            <FontAwesomeIcon style={{ width: "15px", height: "15px", color: "white" }} icon={faFacebookF}></FontAwesomeIcon>
                        </Avatar>
                    </a>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <a href="https://web.facebook.com/">
                        <Avatar sx={{ width: 30, height: 30, border: 1 }} className={avatarClass.customAvatar} >
                            <FontAwesomeIcon style={{ width: "15px", height: "15px" }} icon={faTwitter}></FontAwesomeIcon>
                        </Avatar>
                    </a>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <a href="https://web.facebook.com/">
                        <Avatar sx={{ width: 30, height: 30, border: 1 }} className={avatarClass.customAvatar} >
                            <FontAwesomeIcon style={{ width: "15px", height: "15px" }} icon={faInstagram}></FontAwesomeIcon>
                        </Avatar>
                    </a>
                </Grid>
                <Grid item xs={12} lg={3}>
                    <a href="https://web.facebook.com/">
                        <Avatar sx={{ width: 30, height: 30, border: 1 }} className={avatarClass.customAvatar} >
                            <FontAwesomeIcon style={{ width: "15px", height: "15px" }} icon={faYoutube}></FontAwesomeIcon>
                        </Avatar>
                    </a>
                </Grid>
            </Grid>
            
            {/* <Box>
                <Stack direction="row" spacing={2}>
                    <a href="https://web.facebook.com/">
                        <Avatar sx={{ width: 30, height: 30, border: 1, bgcolor: '#FFA902' }}  >
                            <FontAwesomeIcon style={{ width: "15px", height: "15px", color: "white" }} icon={faFacebookF}></FontAwesomeIcon>
                        </Avatar>
                    </a>
                    <a href="https://web.facebook.com/">
                        <Avatar sx={{ width: 30, height: 30, border: 1 }} className={avatarClass.customAvatar} >
                            <FontAwesomeIcon style={{ width: "15px", height: "15px" }} icon={faTwitter}></FontAwesomeIcon>
                        </Avatar>
                    </a>
                    <a href="https://web.facebook.com/">
                        <Avatar sx={{ width: 30, height: 30, border: 1 }} className={avatarClass.customAvatar} >
                            <FontAwesomeIcon style={{ width: "15px", height: "15px" }} icon={faInstagram}></FontAwesomeIcon>
                        </Avatar>
                    </a>
                    <a href="https://web.facebook.com/">
                        <Avatar sx={{ width: 30, height: 30, border: 1 }} className={avatarClass.customAvatar} >
                            <FontAwesomeIcon style={{ width: "15px", height: "15px" }} icon={faYoutube}></FontAwesomeIcon>
                        </Avatar>
                    </a>
                </Stack>
            </Box> */}

        </Paper>
    );
};

export default FollowMeCamp;