import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core/styles';


import { FaArrowCircleDown } from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom';

import useAuth from './../../Hooks/useAuth';
const pages = ['home', 'about', 'category', 'Blog', 'contact'];


const useStyles = makeStyles({
  root: {
    fontFamily: 'Poppins',
    fontWeight: 400,
    textTransform: 'capitalize'
  }
})

const NavBar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const {googleSign, logOut,user} = useAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  const history = useHistory();
  const blogPath = history.location.pathname
  console.log(blogPath)
  const [blog, setBlog] = useState(false);

  useEffect(() => {
    if (blogPath === '/Blog' || blogPath === '/Author') {
      setBlog(true)
    }
    else {
      setBlog(false)
    }

  }, [blogPath])

  const handleLogin = () => {
    googleSign()
  }

  const handleLogout = () => {
    logOut()
  }
  return (
    <Container>

      <AppBar position="static" sx={{ bgcolor: "transparent", boxShadow: 0 }} >
        <Container maxWidth="xl" >
          <Toolbar disableGutters >
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ color: blog ? "black" : "white" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to={`/${page}`}> <Typography textAlign="center">{page}</Typography> </Link>

                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: { sm: 'center' } }}>
              {pages.map((page) => (
                <Button
                  component={Link}
                  to={`/${page}`}
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ mt: 2, color: blog ? "black" : "white", display: 'block' }}
                >
                  <Typography className={classes.root}> {page} <FaArrowCircleDown sx={{ width: "4px" }}></FaArrowCircleDown> </Typography>
                </Button>
              ))}
            </Box>
            <Box sx={{display:'flex',flexDirection:{xs:'column', md:'row'},alignItems:'center'}}>
              <Typography sx={{ fontFamily: "Poppins", me: 2 }}> Mr. {user.displayName} </Typography>
              {user.displayName ?
                <Button onClick={handleLogout} variant="outlined">Logout</Button> :
                <Button onClick={handleLogin} sx={{ mr: 1 }} variant="outlined">Login</Button>
              }
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Container>
  )
};
export default NavBar;
