import React from 'react';
import { Breadcrumbs, Grid, Container, Box, Typography, Stack, Avatar, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import BlogDocImage from '../../Image/BlogDoc.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { makeStyles } from '@material-ui/core/styles';

import blog1 from '../../Image/Blog1.jfif';
import blog2 from '../../Image/blog2.png'
import avatarImage from '../../Image/Project.jpg';
import PopularPost from './../PopularPost/PopularPost';
import FollowMeCamp from '../FollowMeComp/FollowMeCamp';
import Subscribe from './../Subscribe/Subscribe';

const customStyle = makeStyles({
    customAvatar: {
        backgroundColor: "white",
        color: "#868383",
        '&:hover': {
            color: "#FFA902",
        }
    }
})

const BlogDoc = () => {
    const avatarClass = customStyle();

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" to="/">
                                Solo
                            </Link>
                            <Link to="/"
                                underline="hover"
                                color="inherit"
                            >
                                Mount
                            </Link>
                            <Link to="/"
                                underline="hover"
                                color="inherit"
                            >
                                Jungal
                            </Link>
                            <Link to="/"
                                underline="hover"
                                color="inherit"
                            >
                                Road
                            </Link>
                            <Link to="/"
                                underline="hover"
                                color="inherit"
                            >
                                Ocean
                            </Link>
                            <Link to="/"
                                underline="hover"
                                color="inherit"
                            >
                                Old City
                            </Link>

                        </Breadcrumbs>
                    </div>
                    {/* Image */}
                    <Box sx={{ borderRadius: 1, width: '100%' }} component="img" src={BlogDocImage}></Box>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }} variant="h5">
                        14 Things To See and Do In Portland, Orgeon
                    </Typography>
                    {/* Social Link and Other FontAwesomeIcon */}
                    <Box sx={{ my: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item lg={8} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Grid container spacing={1} sx={{ my: 1 }}>
                                    <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px' }} variant="p">
                                            <i className="fas fa-clock" style={{ color: "#141414" }}></i>  30 Minutes Ago
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px' }} variant="p">
                                            <i className="fas fa-folder" style={{ color: "#141414" }}>  </i> Solo Travel
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px' }} variant="p">
                                            <i className="fas fa-user" style={{ color: "#141414" }}> </i> Adam Smith
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px' }} variant="p">
                                            <i class="fas fa-comment" style={{ color: "#141414" }}> </i> 502
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={4} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box>
                                    <Stack direction="row" spacing={2}>
                                        <a href="https://web.facebook.com/">
                                            <Avatar sx={{ width: 30, height: 30, border: 1, bgcolor: '#FFA902' }}  >
                                                <FontAwesomeIcon style={{ width: "15px", height: "15px", color: "white" }} icon={faFacebookF}></FontAwesomeIcon>
                                            </Avatar>
                                        </a>
                                        <a href="https://web.facebook.com/">
                                            <Avatar sx={{ width: 30, height: 30, border: 1 }} className={avatarClass.customAvatar} >
                                                <FontAwesomeIcon style={{ width: "15px", height: "15px" }} icon={faTwitter}></FontAwesomeIcon>
                                            </Avatar>
                                        </a>
                                        <a href="https://web.facebook.com/">
                                            <Avatar sx={{ width: 30, height: 30, border: 1 }} className={avatarClass.customAvatar} >
                                                <FontAwesomeIcon style={{ width: "15px", height: "15px" }} icon={faInstagram}></FontAwesomeIcon>
                                            </Avatar>
                                        </a>
                                        <a href="https://web.facebook.com/">
                                            <Avatar sx={{ width: 30, height: 30, border: 1 }} className={avatarClass.customAvatar} >
                                                <FontAwesomeIcon style={{ width: "15px", height: "15px" }} icon={faYoutube}></FontAwesomeIcon>
                                            </Avatar>
                                        </a>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Text */}
                    <Box sx={{ my: 2 }}>
                        <Typography sx={{ color: "rgba(105, 105, 105, 1)", fontFamily: "Poppins", textAlign: 'justify' }} variant="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.
                            <br /> <br />
                            It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </Typography>
                    </Box>

                    {/* Highlighted Text */}
                    <Box sx={{ my: 1, bgcolor: "rgba(255, 241, 212, 1)", p: 1, borderRadius: 1 }}>
                        <Typography style={{ textAlign: 'justify' }} sx={{ fontFamily: "Poppins", fontWeight: 'bold' }} variant="h7">
                            It has survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more

                        </Typography>
                    </Box>

                    {/* Text and Image */}
                    <Box sx={{ my: 4 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={6}>

                                <Typography sx={{ color: "rgba(105, 105, 105, 1)" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vulputate magna ultrices est.
                                    Sed adipiscing blandit pellentesque aenean at pulvinar cursus. Vitae egestas pellentesque
                                    dolor ut nibh blandit eget. Vitae ut turpis imperdiet aenean massa.
                                    <br /> <br />
                                    Suspendisse pulvinar
                                    semper pharetra elit morbi facilisis habitant. Eleifend ut vulputate lobortis sapien curabitur
                                </Typography>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Box sx={{ width: '100%', borderRadius: 1 }} component="img" src={blog1} alt="" />
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Text and Image */}
                    <Box sx={{ my: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} lg={6}>
                                <Box sx={{ width: '100%', borderRadius: 1 }} component="img" src={blog2} alt="" />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Typography sx={{ color: "rgba(105, 105, 105, 1)" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac vulputate magna ultrices est.
                                    Sed adipiscing blandit pellentesque aenean at pulvinar cursus. Vitae egestas pellentesque
                                    dolor ut nibh blandit eget. Vitae ut turpis imperdiet aenean massa.
                                    <br /> <br />
                                    Suspendisse pulvinar
                                    semper pharetra elit morbi facilisis habitant. Eleifend ut vulputate lobortis sapien curabitur
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Author Des */}
                    <Box sx={{ my: 2, bgcolor: "rgba(255, 241, 212, 1)", p: 1, borderRadius: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item lg={3} xs={12}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={avatarImage}
                                    sx={{ width: 152, height: 152 }}
                                />
                                <Box sx={{my:1}}>
                                    <Stack direction="row" spacing={2}>
                                        <a href="https://web.facebook.com/">
                                            <Avatar sx={{ width: 30, height: 30, border: 1, bgcolor: '#FFA902' }}  >
                                                <FontAwesomeIcon style={{ width: "15px", height: "15px", color: "white" }} icon={faFacebookF}></FontAwesomeIcon>
                                            </Avatar>
                                        </a>
                                        <a href="https://web.facebook.com/">
                                            <Avatar sx={{ width: 30, height: 30, border: 1 }} className={avatarClass.customAvatar} >
                                                <FontAwesomeIcon style={{ width: "15px", height: "15px" }} icon={faTwitter}></FontAwesomeIcon>
                                            </Avatar>
                                        </a>
                                        <a href="https://web.facebook.com/">
                                            <Avatar sx={{ width: 30, height: 30, border: 1 }} className={avatarClass.customAvatar} >
                                                <FontAwesomeIcon style={{ width: "15px", height: "15px" }} icon={faInstagram}></FontAwesomeIcon>
                                            </Avatar>
                                        </a>
                                        <a href="https://web.facebook.com/">
                                            <Avatar sx={{ width: 30, height: 30, border: 1 }} className={avatarClass.customAvatar} >
                                                <FontAwesomeIcon style={{ width: "15px", height: "15px" }} icon={faYoutube}></FontAwesomeIcon>
                                            </Avatar>
                                        </a>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item lg={9} xs={12}>
                                <Typography sx={{fontFamily:"Poppins",fontWeight:'bold'}} variant='h5'>
                                    Adam Smith
                                </Typography>
                                <Typography sx={{fontFamily:"Poppins",color:'orange'}} variant='h7'>
                                    Author
                                </Typography>
                                <Typography sx={{color:"rgba(20, 20, 20, 1)", fontFamily:"Poppins"}} variant="body1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Sem nisl rutrum vitae ac elementum amet, et. Non et nulla 
                                nisl, libero ac. Proin vitae quis maecenas elit. Lectus a m
                                assa mi
                                </Typography>

                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{display:'flex',flexDirection:'column',my:{xs:8,lg:3}}}>
                   <PopularPost></PopularPost>
                   <FollowMeCamp></FollowMeCamp>
                   <Subscribe></Subscribe>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BlogDoc;