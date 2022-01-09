import React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';


import Typography from '@mui/material/Typography';
import { createTheme, Container } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { Stack } from '@mui/material';
import { Avatar } from '@mui/material';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


import Image from '../../Image/Project.jpg';

const theme = createTheme();

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2rem',
    },

};

const customStyle = makeStyles({
    customAvatar: {
        backgroundColor: "white",
        color: "#868383",
        '&:hover': {
            color: "#FFA902",
        }
    }
})
const AboutMeCard = () => {

    const avatarClass = customStyle();

    return (
        <Card sx={{ width: '100%' }}>
            <Avatar
                alt="Remy Sharp"
                src={Image}
                sx={{ width: 190, height: 202 }}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Adam Smith
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ borderBottom: 1 }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <Container sx={{ display: 'flex', flexDirection: 'column', marginBottom: "1rem" }} >
                <Typography theme={theme} sx={{ fontFamily: 'Poppins' }} variant="p">
                    Follow Me
                </Typography>
                <Stack direction="row" spacing={2} >
                    <a href="https://web.facebook.com/">
                        <Avatar sx={{ bgcolor: "#FFA902", width: 30, height: 30, }} className={avatarClass.customAvatar} >
                            <FontAwesomeIcon style={{ width: "15px", height: "15px", color: "white", }} icon={faFacebookF}></FontAwesomeIcon>
                        </Avatar>
                    </a>
                    <a href="https://web.facebook.com/">
                        <Avatar sx={{ bgcolor: "#FFFFFF", width: 30, height: 30, boxShadow: 3, borderColor: 'grey.500' }} className={avatarClass.customAvatar} >
                            <FontAwesomeIcon style={{ width: "15px", height: "15px", color: "#696969", }} icon={faTwitter}></FontAwesomeIcon>
                        </Avatar>
                    </a>
                    <a href="https://web.facebook.com/">
                        <Avatar sx={{ bgcolor: "#FFFFFF", width: 30, height: 30, boxShadow: 3, borderColor: 'grey.500' }} className={avatarClass.customAvatar} >
                            <FontAwesomeIcon style={{ width: "15px", height: "15px", color: "#696969" }} icon={faInstagram}></FontAwesomeIcon>
                        </Avatar>
                    </a>
                    <a href="https://web.facebook.com/">
                        <Avatar sx={{ bgcolor: "#FFFFFF", width: 30, height: 30, boxShadow: 3, borderColor: 'grey.500' }} className={avatarClass.customAvatar} >
                            <FontAwesomeIcon style={{ width: "15px", height: "15px", color: "#696969" }} icon={faYoutube}></FontAwesomeIcon>
                        </Avatar>
                    </a>
                </Stack>

            </Container>
        </Card>
    )
};

export default AboutMeCard;