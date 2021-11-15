import React from 'react';

import './Client.css'
const ClientIndividual = (props) => {
    const {name,rating,img,feedback} = props.client
    return (
        <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={img} alt="Card"/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{feedback}</p>
            <p className="card-text">{rating}</p>
        </div>
        </div>
    )
                
};

export default ClientIndividual;