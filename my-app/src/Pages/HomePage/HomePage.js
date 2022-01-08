
import React, { Fragment } from 'react';




import Explore from '../../Component/Explore/Explore';

import Footer from '../../Component/Footer/Footer';
import FollowMe from './../../Component/FollowMe/FollowMe';
import CategoryBlock from '../../Component/Category/CategoryBlock';
import Blog from '../../Component/Blog/Blog';
import Map from '../../Component/Map/Map';
import Nav from './../../Component/Nav/Nav';


const HomePage = () => {
    return (
        <Fragment>
            <Nav></Nav>
            <CategoryBlock></CategoryBlock>
            <Explore></Explore>
            <Blog></Blog>
            <Map></Map>
            <FollowMe></FollowMe>
            <Footer></Footer>
        </Fragment>
    );
};

export default HomePage;