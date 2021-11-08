import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from './../../Hooks/useAuth';


const ManageMyorder = () => {
    const {user} = useAuth(); 
    const [myorder,setmyorder] = useState([]); 
    let i=1; 
    useEffect(()=>{
        fetch('http://localhost:5000/managemyorder')
        .then(res=>res.json())
        .then(data=>{
            const filtereddata = data.filter(item=>item.email===user.email)
            setmyorder(filtereddata); 
            
            
        })
    },[])
    
    // const handleDecline=(id)=>{
    //     const permission = prompt("Do you want to delte")
    //     if(permission==='ok'|| permission==='yes'){
    //         fetch(`http://localhost:5000/managemyorder/${id}`,{
    //         method:'DELETE',
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         if(data.deletedCount>0){
    //             const remainingUsers = orders.filter(order=>order._id!==id)
    //             setmyorder(remainingUsers)
    //             alert("Deleted Successfully")
    //         }
    //     })
    //     }
    //     else{
    //         return
    //     }
        
        
    // }

    return (        
    <div className="border w-75 mx-auto mt-4 bg-light p-4"> 
        <h2 className="text-center border-bottom"> Manage Order</h2>

        <table className="table table-striped">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Service Name</th>
            <th scope="col">User Name</th>
            <th scope="col">User Email</th>
            <th scope="col">User Date</th>
            
            
            </tr>
        </thead>
        <tbody>
            {
                myorder.map((order)=> <tr>
                    <th key={order._id}scope="row">{i++}</th>
                        <td>{order.service}</td>
                        <td>{order.UserName}</td>
                        <td>{order.email}</td>
                        <td>{order.date}</td>
                        
                        {/* <td> <button onClick={()=>handleDecline(order._id)}type="button" className="btn btn-danger">Delete</button></td> */}
                    </tr>)
            }
            
        </tbody>
        </table>
        
    </div>
    );
};

export default ManageMyorder; 