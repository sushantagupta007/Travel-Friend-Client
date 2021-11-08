
import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from './../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import './Login.css'
const Login = () => {
    const history = useHistory(); 
    const location = useLocation(); 

    const {googleSign,loading} = useAuth(); 
    console.log(loading)
    const redirect = location.state?.from || '/Home'
    
    const handleSignIn = () =>{
        googleSign(history,location); 
    }


    return (
        <div className="border w-50 mx-auto p-4">
            <h2 className="text-center border-bottom"> Login Here </h2>
            <div className="d-flex justify-content-evenly customDisplay">
                <button onClick={handleSignIn} type="button" className="btn btn-warning customMargin"> Google Login In  </button>
                <button type="button" className="btn btn-danger customMargin"> Facebook Login In  </button>
                <button type="button" className="btn btn-info customMargin"> Twitter Login In  </button>
            </div>
            <div className="text-center my-2">
                <p> Already Reistered? If not then follow <Link to="/registration">Registration</Link></p>
            </div>
            {loading && <Spinner animation="grow" variation="danger" />}
        </div>
    );
};

export default Login;