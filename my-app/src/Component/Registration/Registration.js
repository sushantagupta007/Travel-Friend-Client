import React from 'react';
import { useForm } from 'react-hook-form';

import './Registration.css'


const Registration = () => {
    const { register, handleSubmit, } = useForm();
    const onSubmit = data => console.log(data);

    const handleNewsletter = () =>{
        console.log("clicked")
    }
 
    
    return (
        <div className="container-fluid border" id="registration">
        <div className="row">
            <div className="col-lg-9 col-sm-12 w-75 mx-auto">
                <h1 className="text-center"> Registration </h1>
                <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} className=" w-50 mx-auto d-flex flex-column">
                        <input type="text"className="my-4 p-2 "placeholder="Your Full Name" {...register("FullName", { required: true, pattern: /^[A-Za-z]+$/i, maxLength: 20 })} />
                        <input type="email" className="my-4 p-2"placeholder="Your Email" {...register("Email", { required:true})} />
                        <input type="text" className="my-4 p-2 "placeholder="Your Address" {...register("Address", { required: true, maxLength: 50 })} />               
                        <label >Your Preferabel Place</label>
                        <select placeholder="" className="my-4 p-2" {...register("Favourite Place")}>
                            <option value="Europe">Europe</option>
                            <option value="USA">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Bhutn">Bhutan</option>
                            <option value="Switzerland">Switzerland</option>
                        </select>
                        <label >Your Preferabel Time</label>
                        <select className="my-4 p-2" {...register("Preferable Time")}>
                            <option value="Summer">Summer</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1">
                                Do You Need Any Visa Help? 
                            </label>
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label class="form-check-label" for="defaultCheck1">
                                Subscription for newletter ?  
                            </label>
                        <input type="submit" />
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
                    <button className="btn btn-danger w-25 mt-4"onClick={handleNewsletter}>Subscribe</button>
                </div>
            </div>
        </div>
        </div>
    
        
    );
};

export default Registration;