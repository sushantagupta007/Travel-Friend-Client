import React from 'react';


import Box from '@mui/material/Box';





import { Container, Grid, Stack } from '@mui/material';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


import './TopHeader.css';



// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(1),
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('sm')]: {
//             width: '12ch',
//             '&:focus': {
//                 width: '20ch',
//             },
//         },
//     },
// }));

const customStyle = makeStyles({
    customAvatar: {
        backgroundColor: "white",
        color: "#868383",
        '&:hover': {
            color: "#FFA902",
        }
    }
})


const TopHeader = () => {
    const history = useHistory();

    const avatarClass = customStyle();

    const handleClick = () => {
        history.replace('/home')
    }
    return (
        <Container>
            <Box >
                <Grid spacing={3} container sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }} >
                    <Grid item sm={4} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={handleClick}>
                            <span style={{ color: 'orange', fontSize: "1.5rem", fontWeight: 'medium' }}>Travel</span>
                            <span style={{ fontSize: "1.5rem", fontWeight: 'medium' }}>Friend</span>
                        </Button>
                    </Grid>
                    <Grid item sm={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', marginBottom: { xs: 6, sm: 0 } }}>
                        <form id="search-form">
                            <div className="search">
                                <input placeholder="&#xF002" type="text" name="search" className="round" />
                            </div>
                        </form>
                    </Grid>
                    <Grid item sm={4} xs={12} sx={{ display: 'flex', justifyContent: 'center', }}>
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
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default TopHeader;