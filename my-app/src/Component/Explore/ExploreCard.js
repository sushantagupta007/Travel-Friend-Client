import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material';

import { fontFamily, ThemeProvider } from '@mui/system';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },
  });

const useStyles = makeStyles({
  root:{
    fontSize:"1.4rem",
    fontFamily:`'Poppins',sans-serif`
  },
  customTransform:{
    transform:'scaleY(1)',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'transform 0.8s'
    }
  }
})
const ExploreCard = (props) => {
  const classes = useStyles(); 

    const handleClick =() =>{
        window.location.href="https://www.holidify.com/places/murudeshwar/murudeshwar-temple-sightseeing-2926.html"
    }
    
    return (
    <ThemeProvider theme={theme} sx={{mx:'auto'}}>
    <Card sx={{ maxWidth: 280,p:1, m:1,boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.img}
        alt="green iguana"
        sx={{borderRadius: 1,xs:{width:260},mx:'auto'}}
        className={classes.customTransform}
      />
      <CardContent>
        <Typography gutterBottom variant="h7" className={classes.root}>
        {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {props.des}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="small" sx={{color:'orange'}}>To Know More</Button>
      </CardActions>
        </Card>
    </ThemeProvider>
       
    );
};

export default ExploreCard;