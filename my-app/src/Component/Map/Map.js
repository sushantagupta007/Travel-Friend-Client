import React,{useEffect, useState} from 'react';
import { Button, Box, Paper, Typography, Container, createTheme } from '@mui/material';
import ReactMapGL, { Marker, Popup }  from 'react-map-gl';

import './Map.css'
const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
  
};


const Token = `pk.eyJ1Ijoic3VzaGFudGEtZ3VwdGEiLCJhIjoiY2t4M2M4dmdxMHV3ZDJvcGh0Y2ttdXg3NSJ9.bLEusf6lzlf0bT5XBHUK4w`
const Map = () => {
    const [data,setData] = useState([])
    const [park,setPark] = useState(null)
    const [view,setView] = useState(false); 
    const [viewport, setViewport] = useState({
        width: '100%',
        height: 400,
        latitude: 23.76233,
        longitude: 90.37858,
        zoom: 5
      });

      useEffect(()=>{
          fetch('./touristPlace.json')
          .then(res=>res.json())
          .then(data=>{setData(data.features) 
            })
        const listenr =(e)=>{
            if(e.key==='Escape'){
                setPark(null)
            }
        }
        window.addEventListener('keydown',listenr)
        return ()=>{
            window.addEventListener('keydown',listenr)
        }
      },[])

    const handleClick =()=>{
        if(view){
            setView(false)
        }
        if(!view){
            setView(true)
        }
        
    }
  
  
    return (
        <Container id="mapContainer" sx={{ flexGrow: 1, display: { xs: 'flex', md: 'block' },flexDirection:{xs: 'column', md: 'row'} }} >
            <Typography  theme={theme} sx={{fontFamily:'Poppins'}} variant="h3" textAlign="Center">
                Tourist Place of Bangladesh 
            </Typography>
            {
                view ? 
                <ReactMapGL {...viewport}
                id="map"
                mapboxApiAccessToken={Token}
                mapStyle="mapbox://styles/sushanta-gupta/cky1i1ejj03vi15nu2hnicxtz"
                onViewportChange={nextViewport => setViewport(nextViewport)}
                
            >
                {data.map((item)=>
                <Marker key={item.properties.PARK_ID} latitude={item.geometry.coordinates[1]}
                longitude={item.geometry.coordinates[0]}>
                    <Button onClick={(e)=>{
                        e.preventDefault();
                        setPark(item)
                    }}>
                        <Box component="img" sx={{ borderRadius: 1,bgcolor:"blueviolet", width:"20px"}} src="https://img.icons8.com/material-outlined/24/000000/marker.png" alt=""></Box>
                        <Typography sx={{color:"orange",fontSize:"12px"}}>{item.properties.NAME}</Typography>
                        
                    </Button>
                    
                    
                </Marker>
                )}
                {park ?    
                    <Popup 
                        longitude={park.geometry.coordinates[0]} 
                        latitude={park.geometry.coordinates[1]} 
                        onClose={()=>setPark(null)}
                        >
                        <Paper elevation={2} sx={{width:"300px", height:"100%",boxShadow: 2}}component="div">
                            <Box component="img" sx={{ borderRadius: 1 }} src={park.properties.img} alt=""></Box>
                        
                        <Typography component="figcaption" sx={{fontWeight: 'medium'}}>{park.properties.NAME}</Typography>

                        <Box sx={{p:1}}>
                                <Typography >{park.properties.DESCRIPTIO}</Typography>
                        </Box>
                        
                        </Paper>
                    </Popup>: ""
                }
                </ReactMapGL>
                : 
                <ReactMapGL {...viewport}
                mapboxApiAccessToken={Token}
                mapStyle="mapbox://styles/sushanta-gupta/ckx3eqt0n524x14o34wmi2yaa"
                onViewportChange={nextViewport => setViewport(nextViewport)}
            >
                {data.map((item)=>
                <Marker key={item.properties.PARK_ID} latitude={item.geometry.coordinates[1]}
                longitude={item.geometry.coordinates[0]}>
                    <Button onClick={(e)=>{
                        e.preventDefault();
                        setPark(item)
                    }}>
                        <Box component="img" sx={{ borderRadius: 1,bgcolor:"blueviolet", width:"20px"}} src="https://img.icons8.com/material-outlined/24/000000/marker.png" alt=""></Box>
                        <Typography sx={{color:"orange",fontSize:"12px"}}>{item.properties.NAME}</Typography>
                        
                    </Button>
                    
                    
                </Marker>
                )}
                {park ?    
                    <Popup 
                        longitude={park.geometry.coordinates[0]} 
                        latitude={park.geometry.coordinates[1]} 
                        onClose={()=>setPark(null)}
                        >
                        <Paper elevation={2} sx={{width:"300px", height:"100%",boxShadow: 2}}component="div">
                            <Box component="img" sx={{ borderRadius: 1 }} src={park.properties.img} alt=""></Box>
                        
                        <Typography component="figcaption" sx={{fontWeight: 'medium'}}>{park.properties.NAME}</Typography>

                        <Box sx={{p:1}}>
                                <Typography >{park.properties.DESCRIPTIO}</Typography>
                        </Box>
                        
                        </Paper>
                    </Popup>: ""
                }
                </ReactMapGL>

            }
            
            <Button sx={{my:1,bgcolor:"orange"}} onClick={handleClick} variant="contained">Switch View</Button>
        </Container>    
    );
};

export default Map;