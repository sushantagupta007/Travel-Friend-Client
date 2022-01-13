import { Typography, Box, createTheme, Grid, Container,  } from '@mui/material';

import React,{useEffect,useState} from 'react';



import BlogCard from './BlogCard';
import { Pagination,Stack } from '@mui/material';



import Subscribe from '../Subscribe/Subscribe';
import PopularPost from './../PopularPost/PopularPost';
import FollowMeCamp from '../FollowMeComp/FollowMeCamp';

//Theme for Typography
const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
  
};


   


//Component
const Blog = () => {

    const [blogData,setBlogData] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [blogperpage] = useState(5); 
    const [loading,setLoading] = useState(false);

     //Data Fetch From JSON
     useEffect(()=>{
        setLoading(true)
        fetch('/blogData.json')
        .then(res=>res.json())
        .then(data=>
            {
                setBlogData(data)
                console.log(data)
                setLoading(false)
            }
                )
    },[])
    
    const indexofLastDataInEachPage = currentPage*blogperpage; //
    const indexofFirstDataInEachPage = indexofLastDataInEachPage-blogperpage; 
    const currentArray = blogData.slice(indexofFirstDataInEachPage,indexofLastDataInEachPage)
    const pageCount = blogData.length/blogperpage
    const pageRound = Math.floor(pageCount); 

    //If I don't use event in handleChange function , then the pagination does not function
    //well
    const handleChange = (event,value) => {
        setCurrentPage(value);
      };

   

    console.log(loading)
   

    
    return (
        <Container sx={{ flexGrow: 1,fontFamily:'Poppins'}}>
            <Typography sx={{fontFamily:'Poppins'}} theme={theme} textAlign="center" variant="h3">
                My Latest Blog
            </Typography>
            <Grid container spacing={2} sx={{pt:2}}>
                <Grid item lg={8} md={8} xs={12} sx={{my:1}} > 
                    <Box> 
                        {
                            currentArray.map((item)=>
                                <BlogCard 
                                    d = {true}
                                    r={6}
                                    key={item.id}
                                    title={`${item.count} Things I Would Tell Any New Traveller`}
                                    img={item.img}
                                    date={item.date}
                                    author={item.author}
                                    comment="50 Comments"
                                    des={item.des}
                                />
                            )
                        }
                    </Box>
                        <Box sx={{display: 'flex',justifyContent: 'center'}}>
                        <Stack spacing={2}>
                            <Pagination  
                                onChange={handleChange}
                                count={pageRound}
                                >
                            </Pagination>
                        </Stack>
                        </Box>
                 
                </Grid>
              
                <Grid item lg={4} md={4} xs={12} sx={{my:1}}>
                    
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection:'column',
                            
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            width: 'auto',
                            height: 'auto',
                            },
                        }}
                        >
                        <PopularPost></PopularPost>
                        {/* Follow Me */}
                        <FollowMeCamp></FollowMeCamp>

                        {/* Subscribe Form */}
                        <Subscribe></Subscribe>
                    </Box> 
                </Grid>
            </Grid>
        </Container>
    )
};

export default Blog;