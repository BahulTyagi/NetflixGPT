import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }

  const handleLogoClick=()=>{
    if(user)
      navigate('/browse');
    else
      navigate('/');
  }

  return (
    <>
    <div className="w-screen absolute py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img onClick={handleLogoClick} className="h-18 w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" srcset="" />
       
        {user &&<div className='flex'>
        <img className='w-10 h-10 mx-2 my-2 rounded' src={user.photoURL} alt="imagehere"/>
        <button onClick={handleSignOut} className='bg-red-700 rounded h-8 my-2 mx-2 font-bold text-white px-1'>SignOut</button>
        </div>}
    </div>
    </>
    
  )
}

export default Header