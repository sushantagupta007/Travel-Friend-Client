import React from 'react';
import Nav from './../Nav/Nav';
import CategoryCard from './../Category/CategoryCard';
import FollowMe from './../FollowMe/FollowMe';
import Footer from './../Footer/Footer';
import BlogCategory from './../Blog/BlogCategory';


const Author = () => {
    return (
        <>
          <Nav height="100%" padding="5px"></Nav> 
          <BlogCategory></BlogCategory> 
          <FollowMe></FollowMe>
          <Footer></Footer>
          
        </>
    );
};

export default Author;