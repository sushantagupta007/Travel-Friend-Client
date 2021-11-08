import { GoogleAuthProvider,getAuth, signInWithPopup, signOut,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from './../Firebase/firebase.init';
import { useLocation, useHistory } from 'react-router';




initialization(); 

const GoogleProvider =  new GoogleAuthProvider();


const auth = getAuth();

const useFirebase = () =>{
  
    const [user,setUser] = useState([])
    const [error,setError] = useState(""); 

    const [loading,setIsLoading] = useState(true); 

    const googleSign = (history,location) =>{
      setIsLoading(true); 
      signInWithPopup(auth, GoogleProvider)     
        .then((result)=>{
            const user = result.user;
            const destination = location?.state?.from || '/';
            history.replace(destination);
            console.log(user); 
        })
        .catch((error)=>{
        console.log(error)
        })
        .finally(()=>setIsLoading(false))      
    }

    const googleSignOut = ()=>{
      setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            console.log(error)
          })
          .finally(()=>setIsLoading(false))
       
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
        }
        )},[]);
     

      
      return(
          {
            googleSign,
            googleSignOut,
            user,
            loading,
            setIsLoading
            
          }
      )
}

export default useFirebase; 