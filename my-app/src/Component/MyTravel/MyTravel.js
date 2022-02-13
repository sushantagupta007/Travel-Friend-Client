import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';


import useAuth from './../../Hooks/useAuth';



import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import NoteIcon from '@mui/icons-material/Note';
import ContactsIcon from '@mui/icons-material/Contacts';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link as RouterLink, BrowserRouter as Router, Switch, Route,useHistory } from "react-router-dom"

import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TourIcon from '@mui/icons-material/Tour';
import ManageTour from '../ManageTour/ManageTour';
import { Button } from '@mui/material';
import MyTour from './../ManageTour/MyTour';




const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));



export default function MyTravel() {

    
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const history = useHistory()
    const { logOut } = useAuth()


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    

const {user}= useAuth(); 
console.log(user)
    return (
    <Router>
        <h1> lfkjsflk </h1>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Tourist Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,

                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <TourIcon />
                        </ListItemIcon>
                        <RouterLink to="/mytravel/mytour"> MyTour</RouterLink>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ManageAccountsIcon />
                        </ListItemIcon>
                        <RouterLink to="/mytravel/managetour"> ManageTours</RouterLink>
                    </ListItem>

                </List>

                <Divider />
                <List >
                    <ListItem button  >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <a href="/home"> Home </a>
                    </ListItem>
                    <ListItem button  >
                        <ListItemIcon>
                            <InfoIcon />
                        </ListItemIcon>
                        <a href="/about"> About </a>
                    </ListItem>
                    <ListItem button  >
                        <ListItemIcon>
                            <NoteIcon />
                        </ListItemIcon>
                        <a href="/blog"> Blog </a>
                    </ListItem>
                    <ListItem button  >
                        <ListItemIcon>
                            <ContactsIcon />
                        </ListItemIcon>
                        <a href="/contact"> Contact </a>
                    </ListItem>
                    <ListItem button  >
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <Button onClick={()=>logOut(history)}> Logout </Button>
                    </ListItem>
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                    <Switch>
                        <Route exact path="/mytravel/mytour">
                            <MyTour />
                        </Route>
                        <Route exact path="/mytravel/managetour">
                            <ManageTour />
                        </Route>
                    </Switch>
            </Main>
        </Box>
    </Router>
    );
}
