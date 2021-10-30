import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css'
import { Link } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import { useLocation, useHistory } from 'react-router';
import { useState } from 'react';


const Login = () => {

    const {googleSignIn}= useAuth();  
    const location = useLocation(); 
    const [user,setUser] = useState(); 
    const history = useHistory(); 

    const redirect = location.state?.from || '/home'
    console.log('came from', location.state?.from)
    
    console.log(location.state)

    const handleGoogle =() =>{
        googleSignIn()
        .then((result) => {
            const user = result.user;
            setUser(user)
            if(user.email){
                history.push(redirect);
            }
            else {}
            
            console.log(history)
            console.log(user)
        })
        .finally(()=>{})
        .catch((error) => {
            
        });

        console.log("Clicked Google")
    }

    const handleEmail =() =>{
        console.log("Clicked Email")
    }


    return (
 <>       
    <div className="d-flex flex-column w-50 mx-auto border p-2">
        <input 
            className="my-2 p-2"
            placeholder="Username" 
            type="text"
        />
        <input 
            className="my-2 p-2"
            placeholder="Email" 
            type="email"
        />
          <input 
            className="my-2 p-2"
            placeholder="Password" 
            type="email" 
        />
        <div className="container">
            <div className="row mb-2">
                <div className="col-lg-6 col-sm-12 d-flex justify-content-center"> 
                    <input 
                    type="button" 
                    className="btn btn-primary"
                    value="Email SignIn"
                    onClick={handleEmail}
                    />
                </div>
                <div className=" col-lg-6 col-sm-12 d-flex justify-content-center"> 
                <input 
                    type="button" 
                    className="btn btn-danger" 
                    value="Google SignIn"
                    onClick={handleGoogle}
                />
                </div>
            </div>            
        </div>   
        <h5 className="text-center"> Not Our Client? <Link to="/Registration"> Please Registration </Link> </h5>
      </div>
      
</>
    );
};

export default Login;