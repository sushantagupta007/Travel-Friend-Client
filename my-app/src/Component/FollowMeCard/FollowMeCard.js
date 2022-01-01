import * as React from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './FollowMeCard.css'

export default function FollowMeCard(props) {
  const img = props.img
  return (
    <Card id="customCard" sx={{ width:270 }}>
      <CardMedia
        component="img"
        height="300"
        image={img}
        alt="green iguana"
      />
      <CardContent id="cardInfo">
        <Button id="cardButon" size="small">Know More</Button>
      </CardContent>
   
    </Card>
  );
}
