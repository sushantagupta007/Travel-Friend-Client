import React from 'react';
import { useEffect, useState } from 'react';


import './Client.css'
import ClientIndividual from './ClientIndividual';


const Client = () => {

    const [clients,setClients] = useState([]); 

    useEffect(()=>{
        fetch('https://radiant-everglades-28341.herokuapp.com/Client')
            .then(res=>res.json())
            .then(data=>setClients(data))
    })

    return (
        <div className="container">
            <h1 className="text-center"> Client's Feedback </h1>
            <div className="row serviceGrid d-flex justify-content-center align-items-center" id="responsiveGrid">
                {clients.map((client)=><ClientIndividual  client={client}></ClientIndividual>)}  
            </div>
        </div>
    
    );
};

export default Client;