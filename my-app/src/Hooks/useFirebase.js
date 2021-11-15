import {signInWithEmailAndPassword,updateProfile, createUserWithEmailAndPassword, GoogleAuthProvider,getAuth, signInWithPopup, signOut,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from './../Firebase/firebase.init';






initialization(); 

const GoogleProvider =  new GoogleAuthProvider();


const auth = getAuth();

const useFirebase = () =>{
     
    const [user,setUser] = useState([])
    // const [error,setError] = useState(""); 
    console.log(user)
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

    const registerEmail =(name, password, email,history,location,) =>{
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = {displayName:name, email:email}
          console.log(result)
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });
        history.replace('/'); 
      })
      .catch((error) => {
        
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      })
      .finally(()=>setIsLoading(false))
    }

    const signinEmail =(email,password,history,location)=>{
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in 
        const user = userCredential.user;
       console.log(user)
        const destination = location?.state?.from || '/';
        history.replace(destination);
        console.log(user)
          // ...
        })
      .catch((error) => {
        
        
      })
      .finally(()=>setIsLoading(false))
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log(user)
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
            setIsLoading, 
            registerEmail,
            signinEmail
          }
      )
}

export default useFirebase; 