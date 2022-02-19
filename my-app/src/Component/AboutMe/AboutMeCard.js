import React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';


import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

import { Avatar } from '@mui/material';



import Image from '../../Image/Project.jpg';
import FollowMeCamp from '../FollowMeComp/FollowMeCamp';

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
                sx={{ width: 150, height: 150 }}
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
            <FollowMeCamp></FollowMeCamp>
        </Card>
    )
};

export default AboutMeCard;