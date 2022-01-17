import { GoogleAuthProvider, getAuth, signInWithPopup,signOut,onAuthStateChanged,FacebookAuthProvider  } from "firebase/auth";
import firebaseInitialization from './../Firebase/firebase.init';
import { useState } from 'react';



firebaseInitialization();
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
const facebookprovider = new FacebookAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [errors, setError] = useState("")

    const googleSign = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                      setUser(user)
                    } else {
                        setError(errors)
                    }
                  });
            }).catch((error) => {
                setError(error)
            });
    }

    const facebookSign =() =>{
        signInWithPopup(auth, facebookprovider)
        .then((result) => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  setUser(user)
                } else {
                    setError(errors)
                }
              });
        })
        .catch((error) => {
          setError(error)
        });
    }
    const logOut = () =>{
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error)
        });
    }

    return ({
        googleSign,
        logOut,
        user
    })

}

export default useFirebase; 