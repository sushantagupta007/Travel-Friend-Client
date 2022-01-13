import React,{useState,useEffect} from 'react';
import { Stack, Button, Grid, Box } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';


import './SingleComment.css'; 

const SingleComment = ({name,storecomment}) => {
    const { register, handleSubmit } = useForm();
    let i =1; 
    
    
    let existingArray = []
    const [comments,setComments] = useState(existingArray)
    
    const [localArray,setlocalArray] = useState([])   

    const onSubmit = data => {
        console.log(data.reply)
        const newReply = data.reply
        const newReplyArray = [...comments,newReply] //It is alternative to push method 
        setComments(newReplyArray)  
        localStorage.setItem("comment",JSON.stringify(newReplyArray))  
    }

    // useEffect(()=>{
    //     const storedArray = JSON.parse(localStorage.getItem("comment")) //At the time of retrieval need to use JSON.parse() JSON.parse((localStorage.getItem('myDataStorage')))
    //     setComments(storedArray)
    //     console.log(storedArray)
    // },[])
  
  
    const handleRemove =() =>{

    }
    return (
        <Stack>
            <Typography sx={{ fontFamily: "Poppins", fontWeight: 'bold' }} variant="h6">
                {name}
            </Typography>
            <Typography sx={{ fontFamily: "Poppins" }} variant="h7">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the.
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} lg={3} sx={{display:'flex',alignItem:'center'}}>
                    <i className="fas fa-clock"></i><Typography sx={{ fontFamily: 'Poppins', mx: 1 }}> 30 minutes ago </Typography>
                </Grid>
                <Grid item xs={12} lg={9}>
                    <form onSubmit={handleSubmit(onSubmit)}  >
                        <input  placeholder='Write you comment here' style={{width:'80%',marginRight:'10px',padding:'8px',borderRadius:"5px"}} {...register("reply", { required: true, maxLength: 100 })}></input>
                        <input style={{padding:'8px',backgroundColor:'orange', borderColor:"gray",borderRadius:"5px"}} type="submit" value="Reply" />
                    </form>
                </Grid>
                
                    <Accordion elevation={0} sx={{ width: '100%' }}>
                        <AccordionSummary
                            // expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>
                                <i class="fas fa-comment-dots"></i><Button sx={{ fontFamily: 'Poppins', mx: 1, color: 'orange' }}> Comments </Button>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                                {comments.map((item)=>
                                    <Stack key={item} direction="row" spacing={2} sx={{display:'flex',alignItems:'center'}}>
                                        <Box sx={{width:'75%',my:1}}> <Typography sx={{fontFamily:'Poppins'}}> {storecomment}</Typography> </Box>
                                        
                                        <Button onClick={handleRemove}variant="outlined"> Remove </Button>
                                    </Stack>
                                )}
                           
                        </AccordionDetails>
                    </Accordion>
            </Grid>
        </Stack>
    );
};

export default SingleComment;