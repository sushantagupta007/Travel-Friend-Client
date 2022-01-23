import { createTheme, Grid, Container, Box, Stack, Pagination} from '@mui/material';
import React, { useState, useEffect } from 'react';

import FollowMeCamp from '../FollowMeComp/FollowMeCamp';
import PopularPost from '../PopularPost/PopularPost';

import BlogCard from './BlogCard';


import CategoryCard from './../CategoryCard/CategoryCard';
import CategoriesCount from '../CategorieCount/CategoriesCount';
import { useHistory } from 'react-router-dom';
import AuthorCard from './../AuthorCard/AuthorCard';
import ShortContact from '../ShortContact/ShortContact';
import Subscribe from './../Subscribe/Subscribe';


const sky = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkijiEfzoDNYj5RUv5YLR6HHTLTeYooJ8Eg&usqp=CAU'; 
const night = 'https://wallpaperaccess.com/full/429104.jpg'; 


const sand = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeuvOyj_M5l9VYF_uQqvis-m9rojXh4mDP0g&usqp=CAU'; 
const forest = 'https://deih43ym53wif.cloudfront.net/schwarzwald-germany-black-forest-shutterstock_1212988969.jpg_c2d9b92afe.jpg';

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
const BlogCategory = () => {
    const history = useHistory(); 
    
    const pathName = history.location.pathname
    console.log(pathName)

    const [authorCompoent,setauthorComponent] = useState(true)

    useEffect(()=>{
        if(pathName==='/Author'){
            setauthorComponent(true)
        }
        else{
            setauthorComponent(false)
        }
       
    },[pathName])

    const [blogData, setBlogData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [blogperpage] = useState(4);
    const [loading, setLoading] = useState(false);

    //Data Fetch From JSON
    useEffect(() => {
        setLoading(true)
        fetch('/blogData.json')
            .then(res => res.json())
            .then(data => {
                setBlogData(data)
                console.log(data)
                setLoading(false)
            }
            )
    }, [pathName])

    const indexofLastDataInEachPage = currentPage * blogperpage; //
    const indexofFirstDataInEachPage = indexofLastDataInEachPage - blogperpage;
    const currentArray = blogData.slice(indexofFirstDataInEachPage, indexofLastDataInEachPage)
    const pageCount = blogData.length / blogperpage
    const pageRound = Math.ceil(pageCount)
    //If I don't use event in handleChange function , then the pagination does not function
    //well
    const handleChange = (event, value) => {
        setCurrentPage(value);
    };


    console.log(loading)

    return (
        <Container sx={{ flexGrow: 1 }}>
            <Box >
                <Grid container spacing={{ xs: 1, md: 2 }} sx={{ pl: { xs: 0 } }}>
                    <Grid item lg={8}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap',mb: 9, borderRadius:"25px" }}>
                            <Grid spacing={0} container rowSpacing={10} columnSpacing={{ xs: 0 }}>
                                <Grid item lg={6} xs={12} sx={{width:{lg:'340px'},height:{lg:'369px'},}}>
                                    <CategoryCard image={sand}></CategoryCard>
                                </Grid>
                                <Grid item lg={6} xs={12} sx={{width:{lg:'340px'},height:{lg:'369px'}}}>
                                    <CategoryCard image={night}></CategoryCard>
                                </Grid>
                                <Grid item lg={6} xs={12} sx={{width:{lg:'340px'},height:{lg:'369px'}}}>
                                    <CategoryCard image={forest}></CategoryCard>
                                </Grid>
                                <Grid item lg={6} xs={12} sx={{width:{lg:'340px'},height:{lg:'369px'}}}>
                                    <CategoryCard image={sky}></CategoryCard>
                                </Grid>
                            </Grid>
                        </Box>
                      
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', my:2, }}>
                            {currentArray.map((item) =>
                                <Grid item lg={6} >
                                    <BlogCard
                                        
                                        d={false}
                                        r={12}
                                        key={item.id}
                                        title={`${item.count} Things I Would Tell Any New Traveller`}
                                        img={item.img}
                                        date={item.date}
                                        author={item.author}
                                        comment="50 Comments"
                                        des={item.des}
                                       
                                    ></BlogCard>
                                </Grid>
                            )}
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Stack spacing={2}>
                                <Pagination
                                    onChange={handleChange}
                                    count={pageRound}
                                >
                                </Pagination>
                            </Stack>
                        </Box>
                    </Grid>
                                
                    <Grid item lg={4}>
                        <Box >
                            {
                                authorCompoent ? 
                                
                                <> 
                                  <AuthorCard></AuthorCard>  
                                  <ShortContact></ShortContact>
                                  <Subscribe></Subscribe>
                                </>
                                :
                                <>
                                    <CategoriesCount></CategoriesCount>
                                    <PopularPost></PopularPost>
                                    <FollowMeCamp></FollowMeCamp>
                                    <Subscribe></Subscribe>
                                </>
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default BlogCategory;