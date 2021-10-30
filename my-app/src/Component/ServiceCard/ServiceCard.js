import React from 'react';
import { Card,Button } from 'react-bootstrap';
import './ServiceCard.css'
import { useHistory } from 'react-router';

const ServiceCard = (props) => {
    const history = useHistory(); 

    const handleClick = (id) =>{
        history.push(
            {pathname:'/Myorder', 
            state:{id}
        })
        console.log(id)
    }
    const {description,img,name} = props.service
    console.log(img)
    console.log(description)
    return (
        <div id="cardImage" className="card" style={{width: '25rem'}}>
        <img src={img} className="customImage card-img-top" alt="..."/>
        <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <div>{description.map((item)=><ul><li>{item}</li></ul>)}</div>
            <button onClick={()=>handleClick(props)}type="button" className="btn btn-danger">Book Now</button>
        </div>
        </div>
    );
};

export default ServiceCard;