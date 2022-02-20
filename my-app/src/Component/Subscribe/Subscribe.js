
import { Alert, Container, createTheme, TextField } from '@mui/material';

import React, { useState,useEffect } from 'react';

import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Controller, useForm } from 'react-hook-form';




const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },

};

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: 'rgb(255, 160, 5)',
    borderColor: 'rgb(255, 160, 5)',
    boxShadow: 'none',
    color: 'white'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

const Subscribe = () => {
  const { handleSubmit, control, } = useForm()
  const [subscribe, setSubscribe] = useState({})
  const [num,setNum]= useState(0)

  const onSubmit = data => {
    fetch('https://fathomless-brook-26757.herokuapp.com/subscriber', {
      method: "POST",
      body: JSON.stringify(data), //When Post Request Make JSON 
      headers: { "Content-type": "application/json;charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => {
        setSubscribe(json)
        setNum(1)
        console.log(json)
      }
      )
  };

  const alertDisplay =() =>{
    if(subscribe._id){
      return <Alert severity="success">This is a success alert — check it out!</Alert>
    }
  }

    useEffect(()=>{
      setInterval(() => {
        setSubscribe({})
      }, 1000);
    },[num])


  return (
    <>
      {subscribe._id? alertDisplay():""}
      <Container elevation={2} sx={{ borderRadius: 1, p: { xs: 1, lg: 3 }, mt: 2, bgcolor: "#FFA902", color: "#FFFFFF", width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ fontWeight: 'medium', mb: 2 }}>Subscribe Today </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: 'justify', lineHeight: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        </Typography>

        <div sx={{ display: 'flex', flexDirection: 'column' }}>
          <form onSubmit={handleSubmit(onSubmit)} >
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  label="First Name"
                  fullWidth
                  variant="filled"
                  value={value}
                  onChange={onChange}
                  sx={{ my: 1, bgcolor: "white", borderRadius: 1 }}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: 'First name required' }}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  label="Email"
                  fullWidth
                  variant="filled"
                  value={value}
                  onChange={onChange}
                  sx={{ my: 1, bgcolor: "white", borderRadius: 1 }}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: 'Email name required' }}
            />
            <BootstrapButton sx={{ width: "100%", bgcolor: "#FFFFFF", color: 'rgb(255, 170, 0)' }} variant="contained" disableRipple type="submit"> Submit </BootstrapButton>
          </form>
        </div>
      </Container>
    

    </>

  );
};

export default Subscribe;