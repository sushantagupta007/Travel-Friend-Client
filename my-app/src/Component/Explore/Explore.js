import React,{useEffect, useState} from 'react';

import { Grid, Typography, Box } from '@mui/material';
import ExploreCard from './ExploreCard';

import { Pagination } from '@mui/material';
import { Stack } from '@mui/material';


const Explore = () => {
   const [exploreData,setExploreData]= useState([]); //Total DataSet
   const [currentPage,setCurrentPage] = useState(1); 
   const [loading,setLoading] = useState(false);
   const [postperpage] = useState(3) //Item in per page

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

    console.log(currentPage)
    return (
    <Box>
        <Typography variant="h4" component="h4" sx={{ textAlign: 'center' }}>
            Feature Details
        </Typography>;
    <Grid container spacing={2} sx={{ mx: "auto",width:'75%'}}> 
            {currentArray.map((item)=>
            <Grid lg={4} item sx={{display: 'flex', justifyContent: 'center'}}>
                <ExploreCard  
                    loading={loading}
                    name={item.name} 
                    img={item.img} 
                    des={item.des} key={item.id}>
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
        
    </Box>
      

    );
};

export default Explore;