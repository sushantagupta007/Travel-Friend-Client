import React from 'react';
import Nav from './../../Component/Nav/Nav';

import contactBG from '../../Image/contactbg.jpg'
import FollowMe from '../../Component/FollowMe/FollowMe';
import ContactForm from '../../Component/ContactForm/ContactForm';
import Footer from '../../Component/Footer/Footer';

// const contactBG= 'https://i.stack.imgur.com/07hHM.jpg'; 

const Contact = () => {
    return (
        <>
            <Nav img={contactBG} text="Contact Me" textcolor="white"></Nav>  
            <ContactForm></ContactForm>
            <FollowMe></FollowMe>   
            <Footer></Footer>
        </>
    );
};

export default Contact;