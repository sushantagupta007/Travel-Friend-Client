import React from 'react';
// import { Col, Container, Image, Row } from 'react-bootstrap';



import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

import { Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';


// const Clients = [
//     {   name: "MR. X", 
//         img:"https://www.pngall.com/wp-content/uploads/8/Tourist-People-PNG.png",
//         rating:5, 
//         quote: "See the world, it is more fantastic than dream"
//     },
//     {   name: "MR Y",
//         img:"https://cdn01.buxtonco.com/news/2661/istock-665028882__large.jpg",
//         rating:4,
//         quote:"Live, travel, adventure,bless and don't be sorry"
//     },
//     {
//         name: "MR Z",
//         img:"https://cdn01.buxtonco.com/news/2661/istock-665028882__large.jpg",
//         rating:5,
//         quote:"To travel, is to live. "
//     },
//     {
//         name: "MR T",
//         img:"https://cdn01.buxtonco.com/news/2661/istock-665028882__large.jpg",
//         rating:5,
//         quote:"To travel, is to live. "
//     },
// ]

// import './owl.css'


const ClientFeed = () => {
        const [clients,setClients] = useState([]); 

        useEffect(()=>{
            fetch('https://radiant-everglades-28341.herokuapp.com/Clients')
                .then(res=>res.json())
                .then(data=>{
                    setClients(data)
                    console.log(data)
                    
                })
        },[])

        return (  
        <div className="mb-2">  
            <div className='container-fluid' >      
                <div className="row title" style={{marginBottom: "10px"}} >      
                <div className="text-primary text-center ">      
                    <h2>  Client's Feedback </h2> 
                </div>      
                </div>  
            </div>  
        <div className='container-fluid' >  
        <OwlCarousel className='owl-theme container' loop margin={10} nav>
            {
                clients.map((client)=>
                <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={client.img} />
                    <Card.Body>
                    <Card.Title>{client.name}</Card.Title>
                        <Card.Text>
                            {client.quote}
                        </Card.Text>
                        <Card.Text>

                        {Array.apply(null, {length: client.rating}).map(Number.call, Number).map((number)=>
                            <div key={number}className="p-0 m-0"style={{display:"inline-flex"}}> 
                            <li style={{listStyleType:"none"}} className="m-0 text-center p-0"> 
                            <FontAwesomeIcon className="text-warning " icon={faStar}></FontAwesomeIcon>
                            </li>
                        </div>
                        )}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </div>)
            }
        </OwlCarousel>
        </div>
      </div>
        )
}

export default ClientFeed;