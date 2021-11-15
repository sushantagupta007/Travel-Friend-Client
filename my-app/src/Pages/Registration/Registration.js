import React from 'react';
import { useForm } from 'react-hook-form';

import './Registration.css'
import useAuth from './../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import { useState } from 'react';


const Registration = () => {
    const [response,setResponse] = useState({})
    const {registerEmail} = useAuth(); 
    const { register, handleSubmit, reset } = useForm();

    const history = useHistory();
    const location = useLocation(); 



    const onSubmit = data => {
        console.log(data)
        registerEmail(data.name, data.password, data.email,history,location); 
        
        fetch('https://radiant-everglades-28341.herokuapp.com/registeruser',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res=> {
            setResponse(res)
            console.log(res)
            if(response.status===200){
                alert("Successfully Registered") 
                reset(); 
            }
        })
    }
   
 
    
    return (
        <div className="container-fluid border" id="registration">
        <div className="row">
            <div className="col-lg-9 col-sm-12 w-75 mx-auto">
                <h1 className="text-center"> Registration </h1>
                <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} className=" w-50 mx-auto d-flex flex-column">
                        <input type="text"className="my-2 p-2 "placeholder="Your Full Name" {...register("name", { required: true, pattern: /^[A-Za-z]+$/i, maxLength: 20 })} />
                        <input type="email" className="my-2 p-2"placeholder="Your Email" {...register("email", { required:true})} />
                        <input type="password" className="my-2 p-2"placeholder="Password" {...register("password", { required:true})} />
                        <input type="text" className="my-2 p-2 "placeholder="Your Address" {...register("Address", { required: true, maxLength: 50 })} />               
                        <label >Your Preferabel Place</label>
                        <select placeholder="" className="my-2 p-2" {...register("Favourite Place")}>
                            <option value="Europe">Europe</option>
                            <option value="USA">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Bhutn">Bhutan</option>
                            <option value="Switzerland">Switzerland</option>
                        </select>
                        <label >Your Preferabel Time</label>
                        <select className="my-2 p-2" {...register("Preferable Time")}>
                            <option value="Summer">Summer</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" for="defaultCheck1">
                                Do You Need Any Visa Help? 
                            </label>
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"/>
                            <label className="form-check-label" for="defaultCheck1">
                                Subscription for newletter ?  
                            </label>
                        <input type="submit" value="Register"/>
                </form>
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
                       <li> <a href="https://www.epassport.gov.bd/landing">E-Passport Bangladesh</a> </li>
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
                    <button className="btn btn-danger w-25 mt-4">Subscribe</button>
                </div>
            </div>
        </div>
        </div>
    
        
    );
};

export default Registration;