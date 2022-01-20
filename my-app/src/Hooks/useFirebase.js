import {
    GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, FacebookAuthProvider,
    createUserWithEmailAndPassword, updateProfile, sendEmailVerification, updatePassword,
    signInWithEmailAndPassword, sendPasswordResetEmail, 
} from "firebase/auth";
import firebaseInitialization from './../Firebase/firebase.init';
import { useState } from 'react';



firebaseInitialization();
const auth = getAuth();



const googleProvider = new GoogleAuthProvider();
const facebookprovider = new FacebookAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [errors, setError] = useState("")


    const googleSign = (history) => {
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
            history.replace('/home')
    }

    const facebookSign = (history) => {
        signInWithPopup(auth, facebookprovider)
            .then((result) => {
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        setUser(user)
                    } else {
                        setError(errors)
                    }
                });
                history.replace('/home')
            })
            .catch((error) => {
                setError(error)
            });
    }
    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({})

        }).catch((error) => {
            setError(error)
        });
        history.replace('/home')
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then((result) => {
                setError(result)

            })
    }

 
    const userCreate = (name, email, password, phone, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //User Create after registration
                const newUser = { email, displayName: name, phoneNumber: phone };
                const uid = auth.currentUser.uid
                verifyEmail();
          
                updateProfile(auth.currentUser, {
                    displayName: name,
                })
                    .then(() => {
                        console.log()
                    })
                    .catch((error) => {
                    });
                history.replace('/');
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const resetPassword = (email, history) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password Reset Email Sent")
            })
            .catch((error) => {
                setError(error)
            });

    }

    const signInUser = (email, password, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
                if (user) {
                    history.replace('/home')
                }
                console.log(user)
            })
            .catch((error) => {

            });
    }




    const updatePass = (newpassword, history) => {

        const user = auth.currentUser;
        const newPassword = newpassword

        updatePassword(user, newPassword).then(() => {
            if (newPassword) {
                alert("Password Update Successfully")
                history.replace('/signin')
            }
        }).catch((error) => {
            console.log(error)
        });
    }

    return ({
        googleSign,
        logOut,
        facebookSign,
        userCreate,
        resetPassword,
        signInUser,
        updatePass,
      
        user,

    })

}

export default useFirebase; 