import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Addnewservice = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {  
        fetch(`http://localhost:5000/Services`,{
                method:'POST',
                headers:{"content-type":"application/json"},
                body:JSON.stringify(data)
        })
        
        
        }
    return (
        <Container className="w-50 p-4 border mx-auto mt-4">
            <h2> Add New Service </h2>
        <form className="border p-2 d-flex flex-column"onSubmit={handleSubmit(onSubmit)}>    
            <input 
                    placeholder="service name"
                    className="my-1 p-2"    
                    type="text"
                    {...register("name", { required: true, maxLength: 20 })} 
            />
             <textarea 
                    style={{resize:'none'}} 
                    placeholder="Description of Service"
                    className="my-1 p-2"  
                    {...register("description",)} 
                    type="text"
            />
              <input 
                    placeholder="service image"
                    className="my-1 p-2"    
                    type="file"
                    {...register("img", { required: true})} 
            />   
             
            
           <input type="submit" className="mb-2 btn-warning"/>
           
        </form>
        </Container>
            
        
    );
};

export default Addnewservice;