import React from 'react';

import './Client.css'
const ClientIndividual = (props) => {
    const {name,rating,img,feedback} = props.client
    return (
        <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src={img} alt="Card"/>
        <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{feedback}</p>
            <p class="card-text">{rating}</p>
        </div>
        </div>
    )
                
};

export default ClientIndividual;