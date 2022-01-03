import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import { makeStyles } from '@material-ui/core/styles';
import CategoryCard from './CategoryCard';
import { Box, createTheme, Typography } from '@mui/material';

import SoloTravel from '../../Image/1.jpg'
import MountTravel from '../../Image/2.jpg'
import RoadTravel from '../../Image/3.jpg'
import OldCiry from '../../Image/4.jfif'
import JungleTravel from '../../Image/5.jfif'
import OceanTravel from '../../Image/6.jpg'

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
    <Box sx={{width:"75%",mx:'auto',fontFamily:'Poppins'}} >
      <Typography theme={theme} sx={{xs:{fontSize:'1rem'}}} variant="h3" align="Center">
            Choose Category
        </Typography>
      <Carousel responsive={responsive} >
        <div className={classes.root}> <CategoryCard img={SoloTravel} des="Solo Travel"> fsfdfdf </CategoryCard> </div>
        <div className={classes.root}> <CategoryCard img={MountTravel} des="Mount Travel"> hello</CategoryCard> </div>
        <div className={classes.root}> <CategoryCard img={RoadTravel} des="Road Travel"> hello</CategoryCard> </div>
        <div className={classes.root}> <CategoryCard img={OldCiry} des="Old City Travel"> hello</CategoryCard> </div>
        <div className={classes.root}> <CategoryCard img={JungleTravel} des="Jungle Travel"> hello</CategoryCard> </div>
        <div className={classes.root}> <CategoryCard img={OceanTravel} des="Ocean Trvel" >hello</CategoryCard> </div>
    </Carousel>
    </Box>
    )
};

export default CategoryBlock;