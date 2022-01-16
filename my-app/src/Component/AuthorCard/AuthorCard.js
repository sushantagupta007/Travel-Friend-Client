import React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';


import Typography from '@mui/material/Typography';
import avatarImage from '../../Image/Project.jpg';
import FollowMeCamp from '../FollowMeComp/FollowMeCamp';
import { Avatar } from '@mui/material';

const AuthorCard = () => {
    return (
        <Card>
            <Avatar
                alt="Remy Sharp"
                src={avatarImage}
                sx={{ width: 152, height: 152 }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Adam Smith
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit am consectetur adipisc ing elit.
                    In sed et donec purus viverra. Sit justo
                </Typography>
            </CardContent>
            <FollowMeCamp></FollowMeCamp>
        </Card>
    );
};

export default AuthorCard;