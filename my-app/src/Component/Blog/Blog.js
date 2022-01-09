import { Typography, Box, createTheme, Grid, Container,  Avatar, Paper} from '@mui/material';

import React,{useEffect, useRef, useState} from 'react';

import Tower from '../../Image/8.jpg'
import { makeStyles } from '@material-ui/core/styles';
import BlogCard from './BlogCard';
import { Pagination,Stack } from '@mui/material';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Subscribe from '../Subscribe/Subscribe';

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

//Custom Style
const useStyles = makeStyles({
    root:{
        color:"#FFA902"
    },
    root1:{
        color:"rgba(105, 105, 105, 0.6)"
    },
    root2:{
        color:"#868383"
    }
})

const customStyle = makeStyles({
    customAvatar:{
        backgroundColor:"white",
        color:"#868383",
        '&:hover':{
            color:"#FFA902",
        }
    }
})
   


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

    //If I don't use event in handleChange function , then the pagination does not function
    //well
    const handleChange = (event,value) => {
        setCurrentPage(value);
      };

    console.log(pageCount)

    
   
    const classes = useStyles(); 
    const avatarClass = customStyle(); 
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
                                count={pageCount}
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
                        {/* Popular Post */}
                        
                        <Paper elevation={2} sx={{borderRadius:1,p:1}} > 
                            <Box>
                                <Typography  component="div" variant="subtitle1" gutterBottom sx={{fontWeight:'medium',mb:2}}>Popular Post </Typography>
                            </Box>
                            {/* First */}
                            <Grid container spacing={1} sx={{my:1}}>
                                <Grid item lg={4} md={4} xs={4} sx={{px:2}} >
                                <Box component="img"
                                    sx={{height: '100%', width:"100%",borderRadius:'5px'} }
                                    alt="The house from the offer."
                                    src={Tower}/>
                                </Grid>
                                <Grid item lg={8} md={8} xs={8}>
                                    <Typography  component="p"  sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.9rem'}} >    
                                        13 Thing I Would Tell You New Traveller
                                    </Typography>
                                    <Box> 
                                        <Typography 
                                            sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.8rem'}} 
                                            component="p" 
                                            theme={theme}>
                                            <span className={classes.root}> Post </span> <span className={classes.root1}> By </span>  sffd
                                        </Typography>
                                    </Box>
                                    <Box > 
                                        <Typography 
                                            sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.8rem'}} 
                                            component="p"
                                            theme={theme}>
                                            <span className={classes.root2}> dfdff </span> <span className={classes.root1}> -- </span>  <span className={classes.root}> sdfdf</span>
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            {/* Second */}
                            <Grid container spacing={1} sx={{my:1}}>
                                <Grid item lg={4} md={4} xs={4} sx={{px:2}} >
                                <Box component="img"
                                    sx={{height: '100%', width:"100%",borderRadius:'5px'} }
                                    alt="The house from the offer."
                                    src={Tower}/>
                                </Grid>
                                <Grid item lg={8} md={8} xs={8}>
                                    <Typography  component="p"  sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.9rem'}} >    
                                        13 Thing I Would Tell You New Traveller
                                    </Typography>
                                    <Box> 
                                        <Typography 
                                            sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.8rem'}} 
                                            component="p" 
                                            theme={theme}>
                                            <span className={classes.root}> Post </span> <span className={classes.root1}> By </span>  sffd
                                        </Typography>
                                    </Box>
                                    <Box> 
                                        <Typography 
                                            sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.8rem'}} 
                                            component="p"
                                            theme={theme}>
                                            <span className={classes.root2}> dfdff </span> <span className={classes.root1}> -- </span>  <span className={classes.root}> sdfdf</span>
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            {/* Third */}
                            <Grid container spacing={1} sx={{my:1}}>
                                <Grid item lg={4} md={4} xs={4} sx={{px:2}} >
                                <Box component="img"
                                    sx={{height: '100%', width:"100%",borderRadius:'5px'} }
                                    alt="The house from the offer."
                                    src={Tower}/>
                                </Grid>
                                <Grid item lg={8} md={8} xs={8}>
                                    <Typography  component="p"  sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.9rem'}} >    
                                        13 Thing I Would Tell You New Traveller
                                    </Typography>
                                    <Box> 
                                        <Typography 
                                            sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.8rem'}} 
                                            component="p" 
                                            theme={theme}>
                                            <span className={classes.root}> Post </span> <span className={classes.root1}> By </span>  sffd
                                        </Typography>
                                    </Box>
                                    <Box > 
                                        <Typography 
                                            sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.8rem'}} 
                                            component="p"
                                            theme={theme}>
                                            <span className={classes.root2}> dfdff </span> <span className={classes.root1}> -- </span>  <span className={classes.root}> sdfdf</span>
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            {/* Fourth */}
                            <Grid container spacing={1} sx={{my:1}}>
                                <Grid item lg={4} md={4} xs={4} sx={{px:2}} >
                                <Box component="img"
                                    sx={{height: '100%', width:"100%",borderRadius:'5px'} }
                                    alt="The house from the offer."
                                    src={Tower}/>
                                </Grid>
                                <Grid item lg={8} md={8} xs={8}>
                                    <Typography  component="p"  sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.9rem'}} >    
                                        13 Thing I Would Tell You New Traveller
                                    </Typography>
                                    <Box> 
                                        <Typography 
                                            sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.8rem'}} 
                                            component="p" 
                                            theme={theme}>
                                            <span className={classes.root}> Post </span> <span className={classes.root1}> By </span>  sffd
                                        </Typography>
                                    </Box>
                                    <Box> 
                                        <Typography 
                                            sx={{fontFamily:'Poppins',fontWeight: 'medium',fontSize:'0.8rem'}} 
                                            component="p"
                                            theme={theme}>
                                            <span className={classes.root2}> dfdff </span> <span className={classes.root1}> -- </span>  <span className={classes.root}> sdfdf</span>
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>
                        
                        {/* Follow Me */}
                        <Paper elevation={2} sx={{borderRadius:1,p:1}}>
                            <Typography variant="h6" sx={{fontWeight:'medium',mb:2}}>Follow Me </Typography>
                            <Box>
                            <Stack direction="row" spacing={2}>
                                <a  href="https://web.facebook.com/"> 
                                    <Avatar   sx={{bgcolor:"#FFA902", width: 30, height: 30, }}  className={avatarClass.customAvatar} >
                                        <FontAwesomeIcon style={{width:"15px",height:"15px",color:"white",}}  icon={faFacebookF}></FontAwesomeIcon>
                                    </Avatar>
                                </a>
                                <a  href="https://web.facebook.com/"> 
                                    <Avatar   sx={{bgcolor:"#FFFFFF", width: 30, height: 30,boxShadow: 3,borderColor: 'grey.500' }}  className={avatarClass.customAvatar} >
                                        <FontAwesomeIcon style={{width:"15px",height:"15px",color:"#696969",}}  icon={faTwitter}></FontAwesomeIcon>
                                    </Avatar>
                                </a>
                                <a  href="https://web.facebook.com/"> 
                                    <Avatar   sx={{bgcolor:"#FFFFFF", width: 30, height: 30 ,boxShadow:3,borderColor: 'grey.500'}}  className={avatarClass.customAvatar} >
                                        <FontAwesomeIcon style={{width:"15px",height:"15px",color:"#696969"}}  icon={faInstagram}></FontAwesomeIcon>
                                    </Avatar>
                                </a>
                                <a  href="https://web.facebook.com/"> 
                                    <Avatar   sx={{bgcolor:"#FFFFFF", width: 30, height: 30 ,boxShadow:3,borderColor: 'grey.500'}}   className={avatarClass.customAvatar} >
                                        <FontAwesomeIcon style={{width:"15px",height:"15px",color:"#696969"}}  icon={faYoutube}></FontAwesomeIcon>
                                    </Avatar>
                                </a>
                            </Stack>
                            </Box>
                           
                        </Paper>

                        {/* Subscribe Form */}
                        <Subscribe></Subscribe>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Blog;