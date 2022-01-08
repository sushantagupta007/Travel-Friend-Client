import { Typography, Box, createTheme, Grid, Container,  Avatar, Paper, TextField, Checkbox } from '@mui/material';

import React,{useEffect, useRef, useState} from 'react';

import Tower from '../../Image/8.jpg'
import { styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';
import BlogCard from './BlogCard';
import { Pagination,Stack } from '@mui/material';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

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
   
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

//Bootstrap Button
const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: 'rgb(255, 160, 5)',
      borderColor: 'rgb(255, 160, 5)',
      boxShadow: 'none',
      color:'white'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });



//Component
const Blog = () => {

    const nameRef = useRef();
    const emailRef = useRef(); 

    const handleClick =() =>{
    const name = nameRef.current; 
    const email = emailRef.current; 
    console.log(name,email)
}

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
                        <Paper elevation={2} sx={{borderRadius:1,p:2,bgcolor:"#FFA902",color:"#FFFFFF"}}>
                            <Typography variant="h6" sx={{fontWeight:'medium',mb:2}}>Subscribe Today </Typography>
                            <Typography variant="body1" gutterBottom sx={{textAlign:'justify',lineHeight: 2}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            </Typography>

                            <div sx={{display:'flex', flexDirection: 'column'}}> 
                                <TextField ref={nameRef} type="text" fullWidth label="Full Name" id="fullWidth" sx={{my:1,bgcolor:"white",borderRadius:1}}/>
                                <TextField ref={emailRef} type="email" fullWidth label="Email" id="fullWidth" sx={{bgcolor:"white"}}/>
                                <Stack direction="row" sx={{display:'flex', alignItems:'center'}}>
                                    <Checkbox {...label} /> <span> You Agree To Our Company Privacy Policy</span>
                                </Stack>
                                
                                <BootstrapButton onClick={handleClick} sx={{width:"100%",bgcolor:"#FFFFFF", color:'rgb(255, 170, 0)'}} variant="contained" disableRipple> 
                                   Subscribe
                                </BootstrapButton>
                            </div>    
                            
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Blog;