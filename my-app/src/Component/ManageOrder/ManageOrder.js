import axios from 'axios';
import React, { useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import useAuth from './../../Hooks/useAuth';




const ManageOrder = () => {

    const { register, handleSubmit } = useForm();
    const [order,setOrder]= useState([]); 
    const userAdmin= useAuth(); 
    
    const onSubmit = data => {
        console.log(data)
        axios({
            method: 'post',
            url:'https://radiant-everglades-28341.herokuapp.com/Manageorder',
            
            data: {data}
          })
        
        .catch(error=>console.log(error))
        // .then(res=>console.log(res))
        
        
    }
        
        
    const handleDelete = (id) =>{
        if(userAdmin.user.email==='sushanta.sust@gmail.com'){
                console.log("can delter")
            }
        else{
            console.log("no permission")
        }
        console.log(id)

        fetch(`https://radiant-everglades-28341.herokuapp.com/Manageorder?id=${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>setOrder(data))
    }

    const handlePending = () =>{
      
    }

    console.log(order)
    useEffect(()=>{
        fetch('https://radiant-everglades-28341.herokuapp.com/Manageorder')
            .then(res=>res.json())
            .then(data=>setOrder(data))
    },[])


    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Service Name"{...register("Service Name", { required: true, maxLength: 20 })} /> <br></br>
                <input type="textarea" placeholder="Descriptioin" {...register("Description", { required:true, })} /> <br></br>
                <input type="file" placeholder="img" {...register("img", { required:true, })} /> <br></br>
                
                <input type="submit" />
            </form>

            <div>
                <h4>Already Book Service</h4> 
                    {order.map((individualorder)=>
                    <ul>
                        <li className ="border"key={individualorder._id}>{individualorder.name} 
                        <button className="p-4" onClick={()=>handleDelete(individualorder._id)}type="button" className="btn btn-danger"> X </button>
                        <button onClick={handlePending}  type ="button" className="btn btn-secondary"> Approval</button>
                        </li> 
                    </ul>)}
            </div>
            
        </div>
    );
};

export default ManageOrder;