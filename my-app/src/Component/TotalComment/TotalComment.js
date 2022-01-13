import { Container } from '@mui/material';
import React, {useState,useEffect} from 'react';
import CommentBox from '../CommentBox/CommentBox';

const TotalComment = () => {
    const [usercomments,setuserComments] = useState([])
    useEffect(()=>{
        fetch('/userData.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setuserComments(data)  
        })
    },[])
    return (
        <Container sx={{width:'75%',mx:'auto'}}>
            {
                usercomments.map((usercomment)=>
                <CommentBox key={usercomment.id} storecomment={usercomment.comment} name={usercomment.user} image={usercomment.img}>

                </CommentBox>
                )
            }
        </Container>
        
    );
};

export default TotalComment;