
import React, { Fragment } from 'react';




import Explore from '../../Component/Explore/Explore';

import Footer from '../../Component/Footer/Footer';
import FollowMe from './../../Component/FollowMe/FollowMe';
import CategoryBlock from '../../Component/Category/CategoryBlock';
import Blog from '../../Component/Blog/Blog';
import Map from '../../Component/Map/Map';
import Nav from './../../Component/Nav/Nav';

import homeBG from '../../Image/homeBG.jfif'

const HomePage = () => {
    return (
        <Fragment>
            <Nav img={homeBG} textcolor="white"></Nav>
            <CategoryBlock></CategoryBlock>
            <Explore></Explore>
            <Blog></Blog>
            {/* <Map></Map> */}
            <FollowMe></FollowMe>
            <Footer></Footer>
        </Fragment>
    );
};

export default HomePage;