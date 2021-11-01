import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';



const Myorder = () => {
    const {id} = useParams(); 
    const [individualBook, setIndividualBook] = useState([]); 
    useEffect(()=>{
        fetch(`https://radiant-everglades-28341.herokuapp.com/Myorder/${id}`)
            .then(res=>res.json())
            .then(data=>{
                setIndividualBook(data)
                console.log(data)
            })
    },[id])

    console.log(individualBook.length)

    console.log(id)
    const {user } = useAuth(); 
    return (
        <div>
            {user.displayName}
            <h2> Thie is booking {id}</h2>
            <p>{individualBook}</p>
        </div>
    );
};

export default Myorder;