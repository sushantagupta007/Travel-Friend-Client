import React,{useEffect, useState} from 'react';

import { Grid, Typography, Box, createTheme, Container } from '@mui/material';
import ExploreCard from './ExploreCard';

import { Pagination } from '@mui/material';
import { Stack } from '@mui/material';



const Explore = () => {
   const [exploreData,setExploreData]= useState([]); //Total DataSet
   const [currentPage,setCurrentPage] = useState(1); 
   const [loading,setLoading] = useState(false);
   const [postperpage] = useState(6) //Item in per page

   useEffect(()=>{
        setLoading(true)
        fetch('exploreData.json')
        .then(res=>res.json())
        .then(data=>{
           setExploreData(data)
           setLoading(false)
        }
   )},[])
   
    const indexofLastDataInEachPage = currentPage*postperpage; //
    const indexofFirstDataInEachPage = indexofLastDataInEachPage-postperpage; 
    const currentArray = exploreData.slice(indexofFirstDataInEachPage,indexofLastDataInEachPage)
    const pageCount = exploreData.length/postperpage    
    console.log(pageCount)

    //Here currentpost means the current page actually. But Difference is that
    //currentPost is an array and currentpage is the number which contains that array page. 
    // When I click the number in
    //pagination ui,it sets a new page value to 

    const handleChange = (event, value) => {
        setCurrentPage(value);
      };

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
      
    console.log(currentPage)
    return (
    <Container sx={{fontFamily:'Poppins',marginTop:'1rem',marginBottom:'1rem'}}>
        <Typography theme={theme} sx={{xs:{fontSize:'1rem'}}} variant="h3" textAlign="center">
            Explore Places
        </Typography>
        <Grid container spacing={2} sx={{ mx: "auto",width:{xs:'100%',lg:'75%'}}}> 
            {currentArray.map((item)=>
            <Grid   key={item.id}lg={4} sm={4} xs={12} item sx={{display: 'flex', justifyContent: 'center'}}>
                <ExploreCard  
                   
                    loading={loading}
                    name={item.name} 
                    img={item.img} 
                    des={item.des} >
                </ExploreCard>
            </Grid>
            )}
        </Grid>
        {/* Paginatin in Material UI is easy. I need only two props. count = How many page
        and onChange Handler function which change the page number */}
        <Box sx={{display: 'flex',justifyContent: 'center'}}>
            <Stack spacing={2}>
                <Typography color="primary">Page: {currentPage}</Typography>
                <Pagination  
                    color="primary"
                    count={pageCount}
                    onChange={handleChange}>
                </Pagination>
            </Stack>
        </Box>
        
    </Container>
      

    );
};

export default Explore;