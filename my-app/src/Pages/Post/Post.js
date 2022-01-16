import React from 'react';
import Nav from '../../Component/Nav/Nav';
import Footer from './../../Component/Footer/Footer';
import FollowMe from './../../Component/FollowMe/FollowMe';

import TotalComment from '../../Component/TotalComment/TotalComment';
import CategoryBlock from '../../Component/Category/CategoryBlock';
import BlogDoc from './../../Component/BlogDoc/BlogDoc';

const Post = () => {
    return (
        <>
        <Nav height="100%" padding="5px"></Nav>
        <BlogDoc></BlogDoc>
        <CategoryBlock></CategoryBlock>
        <TotalComment></TotalComment>       
        <FollowMe></FollowMe>
        <Footer></Footer>
        </>
    );
};

export default Post;