import React from 'react';
import Nav from './../Nav/Nav';

import FollowMe from './../FollowMe/FollowMe';
import Footer from './../Footer/Footer';
import BlogCategory from './../Blog/BlogCategory';


const Author = () => {
    return (
        <>
          <Nav height="100%" padding="0px"></Nav> 
          <BlogCategory></BlogCategory> 
          <FollowMe></FollowMe>
          <Footer></Footer>
          
        </>
    );
};

export default Author;