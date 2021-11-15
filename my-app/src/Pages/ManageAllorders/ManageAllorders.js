import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import useAuth from './../../Hooks/useAuth';
import './Mageallorder.css'

const ManageAllorder = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {user} = useAuth(); 
    const [orders,setOrder] = useState([]); 
    const admin = 'admin@admin.com'
    const [singleOrder,setSingleOrder]= useState([]); 
    
    
    const modalShow = () =>{
        handleShow(); 
    }

    let i=1; 
    useEffect(()=>{
        fetch('https://radiant-everglades-28341.herokuapp.com/managemyorder')
        .then(res=>res.json())
        .then(data=>{
            setOrder(data)
        })
    },[])
    
    const handleDecline=(id)=>{

        if(user.email===admin){
            fetch(`https://radiant-everglades-28341.herokuapp.com/managemyorder/${id}`,{
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

    const handleUpdate =(id) =>{
        const url =`https://radiant-everglades-28341.herokuapp.com/managemyorder/${id}`
        fetch(url)
            .then(res=>res.json())
            .then(data=>{
                setSingleOrder(data)
                console.log(data)
            })
        fetch(`https://radiant-everglades-28341.herokuapp.com/managemyorder/updated/${id}`,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(singleOrder)
        })

        fetch('https://radiant-everglades-28341.herokuapp.com/managemyorder/updated')
        .then(res=>res.json())
        .then(data=>{
            setOrder(data)
            console.log(data) 
        })  
    }
        
      
    
    return (        
    <div className="container mx-auto mt-4  p-2"> 
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

        {
            window.innerWidth<450? (
                <table className="table w-75 p-0">
                    <thead>
                        <tr className="w-75 fs-6">
                            <th className="p-0 border w-50" scope="col">Service</th>
                            <th className="p-0 border w-50" scope="col">Name</th>
                            <th className="p-0 border w-50" scope="col">Status</th>
                            <th className="p-0 border w-50" scopt="col">Status </th>
                            <th className="p-0 border w-50" scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="p-0 m-0 fs-6">
                        {
                            orders.map((order)=> 
                                <tr  className="w-75">
                                
                                    <td className="p-0 border w-50">{order.service}</td>
                                    <td className="p-0 border w-50">{order.UserName}</td>
                                    
                                    
                                    <td className="p-0 border w-50">{order.status}</td>
                                    <td className="p-0 border w-50"> <button onClick={()=>handleUpdate(order._id)}type="button" className="btn btn-link">Update</button></td>
                                    <td className="p-0 border w-50"> <button onClick={()=>handleDecline(order._id)}type="button" className="btn btn-link">Delete</button></td>
                                </tr>)
                            }
                    </tbody>
                </table>) :
                (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Service Name</th>
                            <th scope="col">User Name</th>
                            <th scope="col">User Email</th>
                            <th scope="col">User Date</th>
                            <th scope="col">Status</th>
                            <th scopt="col">Update Status </th>
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
                                    <td>{order.status}</td>
                                    <td> <button onClick={()=>handleUpdate(order._id)}type="button" className="btn btn-info">Update</button></td>
                                    <td> <button onClick={()=>handleDecline(order._id)}type="button" className="btn btn-danger">Delete</button></td>
                                </tr>)
                            }
                    </tbody>
                </table>) 
                
            }
            
    </div>  
    );
};

export default ManageAllorder; 