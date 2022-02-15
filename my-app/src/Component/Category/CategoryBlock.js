import React  from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import { makeStyles } from '@material-ui/core/styles';

import {createTheme, Typography, Container } from '@mui/material';

import SoloTravel from '../../Image/1.jpg'
import MountTravel from '../../Image/2.jpg'
import RoadTravel from '../../Image/3.jpg'
import OldCiry from '../../Image/4.jfif'
import JungleTravel from '../../Image/5.jfif'
import OceanTravel from '../../Image/6.jpg'

import FollowMeCard from './../FollowMeCard/FollowMeCard';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const useStyles = makeStyles({
    root:{ 
      
        marginLeft:"px",
        marginRight:"5px",
        backgroundColor:'transparent'
    }
})
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

const CategoryBlock = () => {

    const classes= useStyles()
    return (
    <Container sx={{fontFamily:'Poppins',flexGrow: 1}} >
      <Typography theme={theme} sx={{xs:{fontSize:'1rem'}}} variant="h3" textAlign="center">
            Choose Category 
        </Typography>
      <Carousel responsive={responsive} >
        <div className={classes.root}> <FollowMeCard source="category" country="India"      img={SoloTravel} des="Solo Travel"> Solo Travel </FollowMeCard> </div>
        <div className={classes.root}> <FollowMeCard source="category" country="Bangladesh" img={MountTravel} des="Mount Travel"> Mount Travel</FollowMeCard> </div>
        <div className={classes.root}> <FollowMeCard source="category" country="Srilanka"   img={RoadTravel} des="Road Travel"> Road Travel </FollowMeCard> </div>
        <div className={classes.root}> <FollowMeCard source="category" country="Singapore"  img={OldCiry} des="Old City Travel"> Old City Travel </FollowMeCard> </div>
        <div className={classes.root}> <FollowMeCard source="category" country="Malaysia"   img={JungleTravel} des="Jungle Travel"> Jungle Travel </FollowMeCard> </div>
        <div className={classes.root}> <FollowMeCard source="category" country="Indonesia"  img={OceanTravel} des="Ocean Trvel"> Ocean Travel </FollowMeCard> </div>
    </Carousel>
    </Container>
    )
};

export default CategoryBlock;