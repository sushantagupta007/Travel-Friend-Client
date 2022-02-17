import React from 'react';
import BlogCategory from '../../Component/Blog/BlogCategory';
import FollowMe from '../../Component/FollowMe/FollowMe';
import Footer from '../../Component/Footer/Footer';
import Nav from '../../Component/Nav/Nav';

import categoryBG from '../../Image/categoryBG.jfif'
const Category = () => {
    return (
        <>
          {/* <Nav  img={categoryBG} text="Solo Travel Post" textcolor="white"></Nav> */}
          <BlogCategory></BlogCategory>
          {/* <FollowMe></FollowMe>
          <Footer></Footer> */}
        </>
    );
};

export default Category;