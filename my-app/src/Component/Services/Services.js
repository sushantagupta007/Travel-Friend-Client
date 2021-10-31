import React, { useEffect, useState } from 'react';
// 
import './Services.css'
import ServiceCard from './../ServiceCard/ServiceCard';
const Services = () => {

    const [services,setServices] = useState([])

    const handleNewsletter =() =>{
        console.log("clicked")
    }
    useEffect(()=>{
        fetch('https://radiant-everglades-28341.herokuapp.com/Services')
            .then(res=>res.json())
            .then(data=>{
                setServices(data)
                console.log(data)
        })

    },[])
    return (

        <div className="container-fluid border">
        <div className="row">
            <div className="col-lg-9 col-sm-12">
                <h1 className="text-center"> Our Services </h1>
                <div className="row customGrid">
                {services.map((service)=><ServiceCard key={service._id} id={service._id} service={service}></ServiceCard>)}
                </div>
            </div>
            
            
            <div className="col-lg-3 col-sm-12 ">
                <div className="row mt-5">
                    <h4> Bangladesh Office</h4>
                    <address>
                    House-1, Road-2, Section-7 <br></br>
                    Mirpur-11 Bus stand, <br></br>
                    Pallabi Dhaka-1 <br></br>
                    Bangladesh, Dhaka-1216
                    </address>
                </div>

                <div className="row border mt-5 p-3">
                    <h4>Important Link</h4>
                   <ul id="newsContainer">
                       <li> <a className=""href="https://www.epassport.gov.bd/landing">E-Passport Bangladesh</a> </li>
                       <li> <a href="https://www.gov.uk/world/organisations/british-high-commission-dhaka"> British Highcommissioner </a> </li>
                       <li> <a href="https://bd.usembassy.gov/"> US Embassay </a> </li>
                       <li> <a href="http://www.bhutan.gov.bt/foreigner/embassies.php"> Bhutan Embassay</a> </li>
                       <li> <a href="https://www.maldivesbd.org/"> High Commission of Maldives</a> </li>
                       <li> <a href="https://kemlu.go.id/dhaka/en"> Indonesia Embassay</a> </li>
                   </ul>

                </div>
                <div className="row my-2 border p-3">
                    <h4>Our Foreign Office</h4>
                    <div className="row">
                        <div className="col-4 border d-flex justify-content-center align-items-center">
                            <h5> United Kingdom  Office</h5>
                        </div>
                        <div className="col-8 border">
                            <address>
                                <a href="www.facebook.com">Mrs Smith 71 Cherry Court SOUTHAMPTON SO53 5PD UK </a>
                            </address>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 border d-flex justify-content-center align-items-center">
                            <h5> United States of America Office</h5>
                        </div>
                        <div className="col-8 border">
                            <address>
                                <a href="www.facebook.com">Mrs Smith 71 Cherry Court SOUTHAMPTON SO53 5PD UK </a>
                            </address>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 border d-flex justify-content-center align-items-center">
                            <h5> Indonesia Office</h5>
                        </div>
                        <div className="col-8 border">
                            <address>
                                <a href="www.facebook.com">Mrs Smith 71 Cherry Court SOUTHAMPTON SO53 5PD UK </a>
                            </address>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 border d-flex justify-content-center align-items-center">
                            <h5> Europe Office</h5>
                        </div>
                        <div className="col-8 border">
                            <address>
                                <a href="www.facebook.com">Mrs Smith 71 Cherry Court SOUTHAMPTON SO53 5PD UK </a>
                            </address>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 border d-flex justify-content-center align-items-center">
                            <h5> Maldives Office</h5>
                        </div>
                        <div className="col-8 border">
                            <address>
                                <a href="www.facebook.com">Mrs Smith 71 Cherry Court SOUTHAMPTON SO53 5PD UK </a>
                            </address>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 border d-flex justify-content-center align-items-center">
                            <h5>Bhutan Office</h5>
                        </div>
                        <div className="col-8 border ">
                            <address>
                                <a href="www.facebook.com">Mrs Smith 71 Cherry Court SOUTHAMPTON SO53 5PD UK </a>
                            </address>
                        </div>
                    </div>
                </div>
                <div className="row mt-2 border p-3">
                    <h4> Subscribe to Our Newsletter</h4>
                    <input type="email" placeholder="Your email"/>
                    <button className="btn btn-danger w-25 mt-4"onClick={handleNewsletter}>Subscribe</button>
                </div>
            </div>
        </div>
        </div>
    
        
    );
};

export default Services;