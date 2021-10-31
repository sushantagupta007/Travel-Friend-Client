import React from 'react';
import Banner from './../Banner/Banner';
import Services from './../Services/Services';

import Client from '../Client Feedback/Client';
import Footer from './../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Client></Client>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;