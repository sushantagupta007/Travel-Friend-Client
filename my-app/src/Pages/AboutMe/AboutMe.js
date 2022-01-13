import React from 'react';
import Footer from '../../Component/Footer/Footer';
import Nav from './../../Component/Nav/Nav';
import FollowMe from './../../Component/FollowMe/FollowMe';
import AboutMe from '../../Component/AboutMe/AboutMe';

import aboutBG from '../../Image/aboutBG.jfif'

const AboutComp = () => {
    return (
        <>
         <Nav img={aboutBG} text="About Me" textcolor="black"></Nav>  
         <AboutMe></AboutMe>
         <FollowMe></FollowMe>
         <Footer></Footer> 
        </>
    );
};

export default AboutComp; 