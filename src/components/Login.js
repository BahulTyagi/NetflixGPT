import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
   
    const [isSignInForm, setIsSignInForm]=useState(true);
 
    const toggleSignInForm=()=>{
       setIsSignInForm(!isSignInForm);
    }

  return (
    <>
    <Header/>
    <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg" alt="background image"/>
    </div>
    <form className="bg-opacity-80 text-white absolute w-3/12 p-12 bg-black mx-auto my-10 right-0 left-0 rounded-lg">
        <h1 className="text-2xl font-bold">{isSignInForm?"Sign In":"Sign Up Now"}</h1>
        {!isSignInForm && <input className="bg-gray-700 my-2 rounded w-full" type="text" placeholder="Full Name" />}
        <input className="bg-gray-700 my-2 rounded w-full" type="text" placeholder="Email / Phone Number" />
        <input className="bg-gray-700 my-2 rounded w-full" type="password" placeholder="Password" />
        <button className='w-full rounded-lg my-4 font-bold bg-red-700'>{isSignInForm?"Sign In":"Sign Up"}</button>
    
        <p className="py-4" onClick={toggleSignInForm}>{!isSignInForm?"Sign In":"New to Netflix? Sign Up"}</p>
    </form>
    </>
  )
}

export default Login