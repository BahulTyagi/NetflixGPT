import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector(store=>store.user);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
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

  
  useEffect(()=>{

    const unSubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            const {uid, email, displayName, photoURL}=user;
            dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
            navigate('/browse');
        } else {
            // User is signed out
            dispatch(removeUser());
            navigate('/');
        }
        });

        return ()=>unSubscribe(); // to remove the listener when the component unmounts
    },[])

  return (
    <>
    <div className="w-screen absolute py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img onClick={handleLogoClick} className="h-18 w-44" src={LOGO} alt="logo" srcset="" />
       
        {user &&<div className='flex'>
        <img className='w-10 h-10 mx-2 my-2 rounded' src={user.photoURL} alt="imagehere"/>
        <button onClick={handleSignOut} className='bg-red-700 rounded h-8 my-2 mx-2 font-bold text-white px-1'>SignOut</button>
        </div>}
    </div>
    </>
    
  )
}

export default Header