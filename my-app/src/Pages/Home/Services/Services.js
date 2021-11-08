import React from 'react';
import { Container,Row } from 'react-bootstrap';
import Service from './../Service/Service';
import { useEffect } from 'react';
import { useState } from 'react';




const Services = () => {
    const [services,setServices]= useState([]); 
    
    useEffect(()=>{
        fetch('http://localhost:5000/Services')
            .then(res=>res.json())
            .then(data=>{
                setServices(data)
                console.log(data)
        })

    },[])
        

    return (
        <Container className="mt-2">
            <h2 className="text-center text-primary"> Our Services </h2>
            <Row>
               {services.map((service)=><Service key={service._id} service={service}></Service>)}
            </Row>
        </Container>
    );
};

export default Services;

//Domestic Tour Package
//Internation Tour Package
//Visa Arragement
//Hotel Reservation
//Student Tour Package
//Expert Guide Service
//Expert Nurse Service