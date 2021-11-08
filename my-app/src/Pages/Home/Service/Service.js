import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";


const Service = (props) => {
    const history = useHistory(); 
    
    // const handleClick =(id)=>{
    //     console.log(id)
    //     history.push({
    //         pathname:'/myorder',
    //         state:id
    //     })
    // }
    
    const {_id,name,img,description} = props.service
    // console.log(_id); 
    return (
        <Col xs={12} sm={6} md={6} lg={4} className="p-2">
            <Card style={{ width: '16rem' }}>
            <Card.Img style={{width:'254px',height:'180px'}}variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                <Link to={`/placeorder/${_id}`}><Button variant="danger">Book {name}</Button> </Link>
            </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;

// onClick={()=>handleClick(props.service)}