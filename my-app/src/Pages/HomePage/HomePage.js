
import React, { Fragment } from 'react';




import Explore from '../../Component/Explore/Explore';

import Footer from '../../Component/Footer/Footer';
import FollowMe from './../../Component/FollowMe/FollowMe';
import CategoryBlock from '../../Component/Category/CategoryBlock';


const HomePage = () => {
    return (
        <Fragment>
            <CategoryBlock></CategoryBlock>
            <Explore></Explore>
            <FollowMe></FollowMe>
            <Footer></Footer>
        </Fragment>
    );
};

export default HomePage;