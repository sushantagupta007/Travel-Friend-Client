import { Typography, Box, createTheme, Container } from '@mui/material';

import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';
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

const useStyles = makeStyles({
    root: {
        color: "#FFA902"
    },
    root1: {
        color: "rgba(105, 105, 105, 0.6)"
    },
    root2: {
        color: "#868383"
    }
})
const BlogCard = ({ title, author, img, date, des, comment, r, d }) => {
    const classes = useStyles();
    return (
        <Container sx={{my: 1, pl: { xs: 0, md: 0 } }}>
            <Box
                component="img"
                sx={{
                    p: 1,
                    height: '100%',
                    width: "100%",
                    borderRadius: '25px'
                }}
                alt="The house from the offer."
                src={img}
            ></Box>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 'medium',pl:2 }} variant="h6" theme={theme}>{title}</Typography>
            <Box sx={{ mt: 1 }}>
                <Typography
                    component="div"
                    sx={{ fontFamily: 'Poppins', fontWeight: 'medium',pl:2 }}
                    variant="h7"
                    theme={theme}>
                    <span className={classes.root}> Post </span> <span className={classes.root1}> By </span>  {author}
                </Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography
                    sx={{ fontFamily: 'Poppins', fontWeight: 'medium',pl:2 }}
                    component="p"
                    theme={theme}>
                    <span className={classes.root2}> {date} </span>
                    <span className={classes.root1}> -- </span>
                    <span className={classes.root}> {comment}</span>
                </Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
                <Typography
                    theme={theme}
                    sx={{ fontFamily: 'Poppins', fontWeight: 'medium', fontSize: '0.9rem' }}
                    className={classes.root1}
                    component="p"
                >
                    {d ? des : ""}
                </Typography>
            </Box>
            {d ? <Button sx={{ p: 0 }} variant="text"><span className={classes.root}>Read More </span></Button> : ""}
        </Container>
    )
};

export default BlogCard;