import React from 'react';
import { useForm } from 'react-hook-form';
import { Col, Container, Row } from 'react-bootstrap';

import Information from '../Home/Information/Information';
import useAuth from '../../Hooks/useAuth';
import { useLocation, useParams } from 'react-router';
import { useState } from 'react';


const Placeorder = () => {
        const[bookInfo,setbookInfo] = useState(); 
    const {user} = useAuth();     
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    console.log(location)
    const {_id}= useParams(); 
        console.log(_id)
        
    const onSubmit = data => {  
        fetch(`http://localhost:5000/placeorder`,{
                method:'POST',
                headers:{"content-type":"application/json"},
                body:JSON.stringify(data)
        })
        .then(setbookInfo(data))
        
        }
       
       
    
    return (
        <Container>
                <Row>
            <Col lg={9} xs={12}>
            
            <h2 className="text-center border-bottom bg-light"> Order details</h2>
                
            <form className="border p-2"onSubmit={handleSubmit(onSubmit)}>
                <Row>
                <Col lg={6} className="d-flex flex-column">
                <input 
                        readOnly
                        placeholder="Booking Name"
                        defaultValue= {user.displayName}
                        className="my-1 p-2"    
                        type="text"
                        {...register("UserName", { required: true, maxLength: 20 })} 
                />
                    <label>Your Email</label>
                <input 
                        readOnly
                        defaultValue={user.email}
                        className="my-1 p-2"  
                        {...register("email", { required:true })} 
                        type="email"
                />
                    <label className="fw-bold">What types of service do you need?</label>
                <input 
                        
                        defaultValue={location.state?.name}
                        className="my-1 p-2"  
                        {...register("service", { required:true })} 
                        type="text"
                />
                <input 
                        
                        placeholder="Your Prefered Destination"
                        className="my-1 p-2"  
                        {...register("prefered destination",)} 
                        type="text"
                />
                <input 
                        
                        placeholder="Your Prefered Destination"
                        className="my-1 p-3"  
                        {...register("prefered destination",)} 
                        type="text"
                />
                </Col>

                <Col lg={6} className="d-flex flex-column">
                <input 
                        
                        placeholder="Preferable Hotel"
                        className="my-1 p-2"  
                        {...register("preferable hotel",)} 
                        type="text"
                />
                <textarea 
                        style={{resize:'none'}} 
                        placeholder="How can we assist you in visa?"
                        className="my-1 p-2"  
                        {...register("visa assistance",)} 
                        type="text"
                />

                <textarea 
                        style={{resize:'none'}} 
                        className="my-1 p-2"  
                        placeholder="Your Address"
                        {...register("address", { required:true })} 
                        type="text"
                />
                <textarea 
                        style={{resize:'none'}} 
                        className="my-1 p-2"  
                        placeholder="Your Address"
                        {...register("address", { required:true })} 
                        type="text"
                />
                    
                <input 
                        className="my-1 p-2"  
                        placeholder="Date for visit"
                        {...register("date", { required:true })} 
                        type="date"
                />
                 <input 
                        readOnly
                        defaultValue="Pending"
                        className="my-1 p-2"  
                        placeholder="Order Status"
                        {...register("status", { required:true })} 
                        type="text"
                />
                </Col>
            </Row>
                    
               <input type="submit" className="mb-2 btn-warning"/>
               
            </form>
            {bookInfo?.email ? alert("Successfully Booked"):"" }
                
        </Col>
                    <Col lg={3} xs={12}>
                        <Information></Information>
                    </Col>
                </Row>
            </Container>



        
    );
};

export default Placeorder;