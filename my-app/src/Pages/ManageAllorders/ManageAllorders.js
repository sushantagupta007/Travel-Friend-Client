import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import useAuth from './../../Hooks/useAuth';


const ManageAllorder = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {user} = useAuth(); 
    const [orders,setOrder] = useState([]); 
    const admin = 'sushanta.gupta007@gmail.com'
    
    const modalShow = () =>{
        handleShow(); 
    }

    let i=1; 
    useEffect(()=>{
        fetch('http://localhost:5000/managemyorder?')
        .then(res=>res.json())
        .then(data=>{
            setOrder(data)
        })
    },[])
    
    const handleDecline=(id)=>{

        if(user.email===admin){
            fetch(`http://localhost:5000/managemyorder/${id}`,{
            method:'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                const remainingUsers = orders.filter(order=>order._id!==id)
                setOrder(remainingUsers)
                alert("Deleted Successfully")

            }
        })
        }
        else{
            modalShow(); 
            return
            
        }
    }

    return (        
    <div className="border w-75 mx-auto mt-4 bg-light p-4"> 
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Authorization Text</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-danger fw-bold">{user.email} is not authorized!!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
        <h2 className="text-center border-bottom"> Manage Order</h2>

        <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Service Name</th>
                <th scope="col">User Name</th>
                <th scope="col">User Email</th>
                <th scope="col">User Date</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                orders.map((order)=> <tr>
                    <th key={order._id}scope="row">{i++}</th>
                        <td>{order.service}</td>
                        <td>{order.UserName}</td>
                        <td>{order.email}</td>
                        <td>{order.date}</td>
                        <td> <button onClick={()=>handleDecline(order._id)}type="button" className="btn btn-danger">Delete</button></td>
                    </tr>)
                }
        </tbody>
        </table>
        
    </div>
    );
};

export default ManageAllorder; 