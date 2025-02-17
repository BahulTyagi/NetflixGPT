import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'
import {validate} from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { photoURL } from '../utils/constants'

const Login = () => {
   const navigate=useNavigate();

   const dispatch=useDispatch();
    const [isSignInForm, setIsSignInForm]=useState(true);
    const [authResult, setAuthResult]=useState(null);

    const name=useRef(null);
    const email=useRef(null); // default value will go in paranthesis
    const password=useRef(null); // default value will go in paranthesis

    const toggleSignInForm=()=>{
       setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick=()=>{
        //validate the creds
        console.log(email.current.value);
        console.log(password.current.value);
        setAuthResult(validate(email.current.value, password.current.value));
        console.log("authResult is :"+authResult);
        if(!isSignInForm)  //SignUp here
        {
            if(!authResult)
            {
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);

                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: photoURL
                      }).then(() => {
                        // Profile updated!
                        const {uid, email, displayName, photoURL}=user;
                        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                      }).catch((error) => {
                        // An error occurred
                        setAuthResult(error.message);
                      });

                })
                .catch((error) => {
                    setAuthResult(error.message);
                    // ..
                });

            }
        }
        else
        {
            if(!authResult)
            {
                    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                        console.log("logged in with :"+user);
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode);
                        setAuthResult("Invalid Credentials");
                    });
            }
        }

    }

  return (
    <>
    <Header/>
    <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg" alt="background image"/>
    </div>
    <form onSubmit={(e)=>{e.preventDefault()}} className="bg-opacity-80 text-white absolute w-3/12 p-12 bg-black mx-auto my-10 right-0 left-0 rounded-lg">
        
        <h1 className="text-2xl font-bold">{isSignInForm?"Sign In":"Sign Up"}</h1>
        
        {!isSignInForm && <input ref={name} className="bg-gray-700 my-2 rounded w-full" type="text" placeholder="Full Name" />}
        <input ref={email} className="bg-gray-700 my-2 rounded w-full" type="text" placeholder="Email / Phone Number" />
        <input ref={password} className="bg-gray-700 my-2 rounded w-full" type="password" placeholder="Password" />
        
        <button className='w-full rounded-lg my-4 font-bold bg-red-700' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
        
        {authResult && <p className='text-red-700'>{authResult}</p>}
        
        <p className="py-4" onClick={toggleSignInForm}>{!isSignInForm?"Already a customer? Sign In":"New to Netflix? Sign Up"}</p>
    </form>
    </>
  )
}

export default Login