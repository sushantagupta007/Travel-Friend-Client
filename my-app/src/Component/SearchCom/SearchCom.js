import React from 'react';

import { styled } from '@mui/system';
import { Typography,Box } from '@mui/material';
import { useForm } from 'react-hook-form';




const SearchCom = ({ img, height }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const MyComponent = styled('div')({
        backgroundImage: `url(${img})`,
        height: height,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: '0px',
    })


    return (
        <>
            <MyComponent>
                    <Box 
                        sx={{display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center',
                        height:'100%',
                        m:0
                    }}>
                    <Typography
                        sx={{
                            display: 'flex',
                            color: 'white',
                            fontWeight: 'bold',
                            fontFamily: 'Poppins',
                            fontSize:'2rem'
                        }}> Hi! What Are You Looking For?
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={{border:"1px solid black"}}>
                        <input 
                            style={{padding:'10px'}}
                            type="text" 
                            placeholder='Search Your Option' {...register("Search")} />
                        <input 
                            style={{padding:'10px',backgroundColor:'orange'}}    
                            type="submit" value="Search"/>
                    </form>
                </Box>
            </MyComponent>
        </>
    );
};

export default SearchCom;