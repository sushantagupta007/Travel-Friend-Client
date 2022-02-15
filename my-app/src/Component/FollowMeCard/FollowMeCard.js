import * as React from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';


import './FollowMeCard.css'
import { useHistory } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';

const FollowMeCard = (props)=> {
  const history = useHistory(); 

  const {img,des,width,source,country} = props
  const {user}= useAuth()

  
  const handleClick=()=>{
    if(source==='category') {
      history.push({ 
        pathname: '/cdetails',
        state: {
          img:img,
          des:des,
          user:user.displayName,
          email:user.email,
          country:country
          
        }
       });
    }
    else{
      history.replace('/blog')
    }
  
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
  )
}

export default FollowMeCard; 