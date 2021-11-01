import React from 'react';
import './ServiceCard.css'
import { Link } from 'react-router-dom';


const ServiceCard = (props) => {
    
    const {img,name,description}= props.service

    console.log(props.service); 

    const handlePostData = () =>{
        fetch('https://radiant-everglades-28341.herokuapp.com/Manageorder',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(props.service)
        })

        console.log(props.id); 
    }
   
    return (
        <div id="cardImage" className="card" style={{width: '20rem'}}>
        <img src={img} className="customImage card-img-top" alt="..."/>
        <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <div>{description.map((item)=><ul key={item.name}><li key={item.name}>{item}</li></ul>)}</div>
            <Link to={`/Myorder/${props.id}`}> <button onClick={handlePostData} className="btn btn-danger"> Book {name }</button> </Link>
        </div>
        </div>
    );
};

export default ServiceCard;