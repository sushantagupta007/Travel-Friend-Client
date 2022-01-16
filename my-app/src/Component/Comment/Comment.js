import { Container, Typography,Box,Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const Comment = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Container>
           
            <Box sx={{width:'50%',mx:'auto'}}> 
            <Typography sx={{fontFamily:'Poppins', fontWeight:'bold'}} variant="h7">
                Leave a comment
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} style={{display:'flex',flexDirection:'column'}}>
                <input style={{padding:'0.8rem',marginBottom:"1rem", borderRadius:"5px"}} placeholder='Full Name' type="text"{...register("firstName", { required: true, maxLength: 20 })} />
                <input style={{padding:'0.8rem',marginBottom:"1rem", borderRadius:"5px"}} placeholder='Email' type="text"{...register("lastName")} />
                <input style={{padding:'0.8rem',marginBottom:"1rem", borderRadius:"5px"}} placeholder='Number' type="number" {...register("age", { min: 18, max: 99 })} />
                <textarea placeholder='Your Message Here' style={{padding:'0.8rem',marginBottom:"1rem", borderRadius:"5px"}} rows="10">
                </textarea>
                <Button sx={{bgcolor:'orange'}}variant="contained">Contained</Button>
            </form>
            </Box>
           
        </Container>
      
    );
};

export default Comment;