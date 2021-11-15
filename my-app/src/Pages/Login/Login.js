
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import './Login.css'
import { useForm } from 'react-hook-form';
const Login = () => {
    
     
   
    const { register, handleSubmit } = useForm();
    
    const {user, googleSign,loading,signinEmail} = useAuth(); 
    console.log(loading)
    // const redirect = location.state?.from || '/Home'
    
    const history = useHistory(); 
    const location = useLocation(); 
    const handleGoogleSignIn = () =>{
        googleSign(history,location); 
    }

    const onSubmit = data => {
        const {email,password} = data
        signinEmail(email,password,history,location)
        console.log(data)
    };

  
    return (
        <div className="border w-50 mx-auto p-4 d-flex flex-column">
            <h2 className="text-center border-bottom"> Login Here </h2>
            <form onSubmit={handleSubmit(onSubmit)} className=" w-50 mx-auto d-flex flex-column">
                <input type="email" className="my-2 p-2"placeholder="Your Email" {...register("email", { required:true})} />
                <input type="password" className="my-2 p-2"placeholder="Password" {...register("password", { required:true})} />               
                <input className="my-2 p-2 btn btn-warning"  type="submit" value="Sign In"/>
            </form>
            <div className="d-flex justify-content-evenly customDisplay">
                <button onClick={handleGoogleSignIn} type="button" className="btn btn-warning customMargin w-50"> Google Sign  </button>
            </div>
            <div className="text-center my-2">
                <p> Already Reistered? If not then follow <Link to="/registration">Registration</Link></p>
            </div>
            {loading && <Spinner animation="grow" variation="danger" />}
        </div>
    );
};

export default Login;