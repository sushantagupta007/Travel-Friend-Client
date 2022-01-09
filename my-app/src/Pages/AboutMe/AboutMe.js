import React from 'react';
import Footer from '../../Component/Footer/Footer';
import Nav from './../../Component/Nav/Nav';
import FollowMe from './../../Component/FollowMe/FollowMe';
import AboutMe from '../../Component/AboutMe/AboutMe';


const AboutComp = () => {
    return (
        <>
         <Nav></Nav>  
         <AboutMe></AboutMe>
         <FollowMe></FollowMe>
         <Footer></Footer> 
        </>
    );
};

export default AboutComp; 