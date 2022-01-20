import * as React from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';


import './FollowMeCard.css'

export default function FollowMeCard({img,width=270,des}) {

  const handleClick=()=>{
    console.log("Clicked")
  }
  return (
    <Card id="customCard" sx={{ width:`%${width}` }}>
      <CardMedia
        component="img"
        height="300"
        image={img}
        alt="green iguana"
      />
      <CardContent id="cardInfo" sx={{display:'flex', justifyContent:'center'}}>
        <Button onClick={handleClick} id="cardButon" size="small">Know More {des}</Button>
      </CardContent>
   
    </Card>
  );
}
