import React from 'react';
import Nav from '../../Component/Nav/Nav';
import Footer from './../../Component/Footer/Footer';
import FollowMe from './../../Component/FollowMe/FollowMe';
import Comment from '../../Component/Comment/Comment';

import CommentBox from './../../Component/CommentBox/CommentBox';
import TotalComment from '../../Component/TotalComment/TotalComment';
import CategoryBlock from '../../Component/Category/CategoryBlock';

const Post = () => {
    return (
        <>
        <Nav></Nav>
        <CategoryBlock></CategoryBlock>
        <TotalComment></TotalComment>       
        <FollowMe></FollowMe>
        <Footer></Footer>
        </>
    );
};

export default Post;