import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged} from "firebase/auth";
import { useState,useEffect } from "react";

import initialization from "../Firebase/firebase.init";


initialization(); 

const useFirebase = () =>{
    const [isloading, setIsloading] = useState(true)
    const [user,setUser] = useState({}); 
    const [error,setError] = useState(''); 
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = () =>{
        setIsloading(true)
        return signInWithPopup(auth, provider)
        
    }

    const googleLogOut =()=>{
        
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
          setError(error)
        });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              // ...
            } else {
              setUser({})
            }
          });
    },[auth])
    return{
        user,
        googleSignIn, 
        googleLogOut,
        error
    }
}

export default useFirebase; 

