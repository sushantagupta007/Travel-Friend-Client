import React from 'react';
// import { Col, Container, Image, Row } from 'react-bootstrap';



import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './ClientFeed.js'
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
            fetch('http://localhost:5000/Clients')
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
        <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
          {clients.map((client)=>
            <Card key={client._id} style={{ width: '25rem' }}>
            <Card.Img  className="img"variant="top" src={client.img} />
            <Card.Body>
              <Card.Title>{client.name}</Card.Title>
              <Card.Text>
                {client.quote}
              </Card.Text>
                 
                  {Array.from(Array(client.rating).keys()).map((item)=>
                  <div key={item.key}className="d-inline-block text-warning"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> </div>)}
            
            </Card.Body>
          </Card> 
            )}
        </OwlCarousel>  
      </div>  
  
      </div>  
          )  




        //   <Container>
        //     <h2 className="text-center my-3 text-primary"> Our Client's Feedback </h2>
        //     <Row>
        //         <Col lg={6} xs={12} md={6} sm={6}>
        //             <Image style={{width:'100%', height:'100%'}} rounded src={Tourist} />
        //         </Col>
        //         <Col lg={6} xs={12} md={6} sm={6} className=" text-white bg-dark d-flex align-items-center">
        //             <cite className="text-white text-center "> 
        //                 Eextra ounce of customer feedback. The added insights that sharpen competitive advantage and ensure they remain as relevant as possible in a changing world. The good news is that there are many ways of getting hold of customer feedback. And you can use it to improve your products, tune-up customer service operations, boost marketing and train staff.  
        //             </cite> <br/>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col lg={6} xs={12} md={6} sm={6}>
        //             <cite className="text-white text-center "> 
        //                 Eextra ounce of customer feedback. The added insights that sharpen competitive advantage and ensure they remain as relevant as possible in a changing world. The good news is that there are many ways of getting hold of customer feedback. And you can use it to improve your products, tune-up customer service operations, boost marketing and train staff.  
        //             </cite> <br/>
        //         </Col>
        //         <Col lg={6} xs={12} md={6} sm={6} className=" text-white  d-flex align-items-center">
        //             <Image style={{width:'100%', height:'100%'}} rounded src={Tourist} />
                    
        //         </Col>
        //     </Row>
        // </Container>

};

export default ClientFeed;